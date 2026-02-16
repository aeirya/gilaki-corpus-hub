from fastapi import APIRouter, Depends
from fastapi.responses import StreamingResponse
from sqlmodel import select, Session
from io import StringIO
import csv

from ..models.verb import Verb
from ..core.db import get_session

router = APIRouter(prefix="/export", tags=["export"])


@router.get("/csv")
def export_csv(session: Session = Depends(get_session)):
    rows = session.exec(select(Verb)).all()

    output = StringIO()
    writer = csv.writer(output)

    writer.writerow([
        "id", "infinitive", "past_stem",
        "present_stem", "example_sentence",
        "dialect", "orthography", "created_at"
    ])

    for r in rows:
        writer.writerow([
            r.id, r.infinitive, r.past_stem,
            r.present_stem, r.example_sentence,
            r.dialect, r.orthography, r.created_at
        ])

    output.seek(0)

    return StreamingResponse(
        output,
        media_type="text/csv",
        headers={"Content-Disposition": "attachment; filename=gilaki_verbs.csv"}
    )
