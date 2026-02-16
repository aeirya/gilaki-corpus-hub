import random
from fastapi import APIRouter
from sqlmodel import Session, select
from sqlalchemy import func
from ..core.db import engine
from ..models.verb import Verb
from ..models.vote import Vote

router = APIRouter(prefix="/review", tags=["review"])

@router.get("/")
def get_review_card():
    with Session(engine) as session:
        verbs = session.exec(select(Verb)).all()
        if not verbs:
            return {"error": "no data"}

        v = random.choice(verbs)

        correct_count = session.exec(
            select(func.count()).where(Vote.verb_id == v.id, Vote.correct == True)
        ).one()

        incorrect_count = session.exec(
            select(func.count()).where(Vote.verb_id == v.id, Vote.correct == False)
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
def vote_flashcard(data: dict):
    vote = Vote(
        verb_id=data["verb_id"],
        correct=data["correct"]
    )

    with Session(engine) as session:
        session.add(vote)
        session.commit()

    return {"status": "ok"}
