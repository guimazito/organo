from typing import List

from . import crud, models
from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session

from . import schemas
from .database import SessionLocal, engine

from fastapi.middleware.cors import CORSMiddleware

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = [
    "http://localhost:3000",
    "http://localhost",
    "http://127.0.0.1:3000",
    "http://127.0.0.1",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/test")
def oi():
    return "oi"


@app.post("/employees/", response_model=schemas.Employee)
def create_employee(employee: schemas.EmployeeCreate, db: Session = Depends(get_db)):
    print(employee)
    return crud.create_employee(db=db, employee=employee)


@app.get("/employees/", response_model=List[schemas.Employee])
def get_employees(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    limit = min(limit, 100)
    employee = crud.get_employees(db, skip=skip, limit=limit)

    if not employee:
        raise HTTPException(status_code=404, detail="Employee not found")
    
    return employee


# uvicorn app.main:app --reload