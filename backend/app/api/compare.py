from collections import defaultdict
from fastapi import APIRouter
from sqlmodel import Session, select
from sqlalchemy import func

from app.core.db import engine
from app.models.verb import Verb

import logging
logger = logging.getLogger(__name__)


router = APIRouter(prefix="", tags=["verbs"])


@router.get("/compare/{infinitive}", response_model=dict[str, list[Verb]])
def compare_infinitive(infinitive: str):

    normalized = infinitive.strip().lower()
    # print("Searching for:", normalized)
    with Session(engine) as session:
        rows = session.exec(
            select(Verb).where(
                func.lower(func.trim(Verb.infinitive)) == normalized
            )
        ).all()

    grouped = defaultdict(list)

    for r in rows:
        grouped[r.infinitive].append({
            "infinitive": r.infinitive,
            "dialect": r.dialect,
            "past_stem": r.past_stem,
            "present_stem": r.present_stem,
            "en_gloss": r.en_gloss,
            "example_sentence": r.example_sentence,
            "id": r.id,
        })

    return grouped
