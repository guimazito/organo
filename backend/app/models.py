from sqlalchemy import Column, Integer, String

from .database import Base


class Employee(Base):
    __tablename__ = "employees"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255), index=True)
    position = Column(String(100), index=True)
    image = Column(String(255), index=True)
    team = Column(String(100), index=True)
