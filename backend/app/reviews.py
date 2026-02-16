import random
from fastapi import APIRouter, Depends
from sqlmodel import select, Session
from sqlalchemy import func

from ..models.verb import Verb
from ..models.vote import Vote
from ..core.db import get_session

router = APIRouter(prefix="/review", tags=["review"])


@router.get("/")
def get_review_card(session: Session = Depends(get_session)):
    verbs = session.exec(select(Verb)).all()
    if not verbs:
        return {"error": "no data"}

    v = random.choice(verbs)

    correct_count = session.exec(
        select(func.count()).where(
            Vote.verb_id == v.id,
            Vote.correct == True
        )
    ).one()

    incorrect_count = session.exec(
        select(func.count()).where(
            Vote.verb_id == v.id,
            Vote.correct == False
        )
    ).one()

    return {
        "id": v.id,
        "infinitive": v.infinitive,
        "past_stem": v.past_stem,
        "present_stem": v.present_stem,
        "dialect": v.dialect,
        "correct": correct_count,
        "incorrect": incorrect_count,
    }


@router.post("/vote")
def vote_flashcard(
    data: dict,
    session: Session = Depends(get_session)
):
    vote = Vote(
        verb_id=data["verb_id"],
        correct=data["correct"]
    )

    session.add(vote)
    session.commit()

    return {"status": "ok"}
