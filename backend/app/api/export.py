from fastapi import APIRouter, Query
from fastapi.responses import StreamingResponse, JSONResponse
from sqlmodel import Session, select
from ..core.db import engine
from ..models.verb import Verb
from io import StringIO
import csv

router = APIRouter(prefix="/export", tags=["export"])

def fetch_verbs():
    with Session(engine) as session:
        return session.exec(select(Verb)).all()

def table_columns():
    return [
        "id", "infinitive", "past_stem",
        "present_stem", "example_sentence",
        "en_gloss", "dialect", "orthography", "created_at"
    ]

def delimited_data(rows, delim: str=','):
    output = StringIO()
    writer = csv.writer(output, delimiter=delim)
    header = table_columns()
    writer.writerow(header)

    for r in rows:
        # i'm proud of myself for writing this haha
        writer.writerow([getattr(r, attr) for attr in header])

    output.seek(0)
    return output


def export_json(rows):
    return JSONResponse([r.model_dump() for r in rows])


@router.get("/")
def export(frmat: str = Query("tsv")):
    rows = fetch_verbs()

    if frmat == 'json':
        return export_json(rows)
    
    if frmat not in ['tsv', 'csv']:
        return JSONResponse({"error": "Invalid format"}, status_code=400)

    if frmat == 'tsv':
        delim = '\t'
        mtype = "text/tab-separated-values"
    if frmat == 'csv':
        delim = ','
        mtype = "text/csv"
    
    headers = {"Content-Disposition": f"attachment; filename=verbs.{frmat}"}
    output = delimited_data(rows, delim)
    
    return StreamingResponse(
        output, media_type=mtype, headers=headers
    )
 