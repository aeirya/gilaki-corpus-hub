from sqlmodel import create_engine

DB_URL = "sqlite:////data/gilaki.db"
engine = create_engine(DB_URL, echo=False)
