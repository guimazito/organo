from . import models
from sqlalchemy.orm import Session

from . import schemas
# from schemas import Employee
# from models import Employee


def create_employee(db: Session, employee: schemas.Employee):
    db_employee = models.Employee(
        name=employee.name,
        position=employee.position,
        image=employee.image,
        team=employee.team
    )
    db.add(db_employee)
    db.commit()
    db.refresh(db_employee)
    return db_employee


def get_employees(db: Session, skip: int = 0, limit: int = 100):
    return(
        db.query(models.Employee)
        .order_by(models.Employee.id)
        .offset(skip)
        .limit(limit)
        .all()
    )