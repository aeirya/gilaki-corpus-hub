from datetime import datetime
from typing import Optional
from pydantic import BaseModel
from app.enums import Dialect, Orthography
from pydantic.alias_generators import to_camel
from pydantic import ConfigDict

class VerbBase(BaseModel):
    infinitive: str
    past_stem: str
    present_stem: str
    example_sentence: Optional[str] = None
    en_gloss: Optional[str] = None
    dialect: Dialect = Dialect.unspecified
    orthography: Orthography = Orthography.latin

    model_config = ConfigDict(
        alias_generator=to_camel,
        populate_by_name=True
    )