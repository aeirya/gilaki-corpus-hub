from fastapi import APIRouter
from .verbs import router as verbs_router
from .export import router as export_router
from .review import router as review_router
from .compare import router as compare_router

api_router = APIRouter(prefix="/api/gilaki")

api_router.include_router(verbs_router)
api_router.include_router(export_router)
api_router.include_router(review_router)
api_router.include_router(compare_router)
