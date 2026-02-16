from typing import List
from fastapi import APIRouter
from sqlmodel import Session, select
from app.core.db import engine
from app.models.verb import Verb
from app.schemas.verb import VerbBase

router = APIRouter(prefix="/verbs", tags=["verbs"], redirect_slashes=False)

@router.post("", response_model=Verb)
def create_verb(payload: VerbBase):
    with Session(engine) as session:
        v = Verb(**payload.model_dump())
        session.add(v)
        session.commit()
        session.refresh(v)
        return v


@router.get("", response_model=List[Verb])
def list_verbs(limit: int = 50, offset: int = 0):
    with Session(engine) as session:
        stmt = (
            select(Verb)
            .order_by(Verb.created_at.desc())
            .offset(offset)
            .limit(limit)
        )
        return session.exec(stmt).all()


@router.put("/{verb_id}", response_model=Verb)
def update_verb(verb_id: int, payload: VerbBase):
    with Session(engine) as session:
        v = session.get(Verb, verb_id)
        if not v:
            raise HTTPException(status_code=404, detail="Verb not found")

        for key, value in payload.model_dump(exclude_unset=True).items():
            setattr(v, key, value)

        session.commit()
        session.refresh(v)
        return v
        

@router.delete("/{verb_id}")
def delete_verb(verb_id: int):
    with Session(engine) as session:
        v = session.get(Verb, verb_id)

        if not v:
            raise HTTPException(status_code=404, detail="Verb not found")

        session.delete(v)
        session.commit()

        return {"ok": True}
