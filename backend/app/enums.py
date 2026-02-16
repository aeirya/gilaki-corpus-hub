from enum import Enum

class Dialect(str, Enum):
    unspecified = "unspecified"
    western = "western"
    eastern = "eastern"

class Orthography(str, Enum):
    latin = "latin"
    perso_arabic = "perso_arabic"
