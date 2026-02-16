from datetime import datetime
from typing import Optional
from sqlmodel import SQLModel, Field
from app.enums import Dialect, Orthography
from pydantic.alias_generators import to_camel
from pydantic import ConfigDict

class Verb(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    created_at: datetime = Field(default_factory=datetime.utcnow, index=False)

    infinitive: str = Field(index=True)
    past_stem: str = Field(index=True)
    present_stem: str = Field(index=True)
    
    dialect: Dialect = Field(default=Dialect.unspecified, index=True)
    orthography: Orthography = Field(default=Orthography.latin)
    
    example_sentence: Optional[str] = None
    en_gloss: Optional[str] = None


    model_config = ConfigDict(
        alias_generator=to_camel,
        populate_by_name=True
    )