from pydantic import BaseModel


class EmployeeBase(BaseModel):
    name: str
    position: str
    image: str
    team: str

class EmployeeCreate(EmployeeBase):
    pass

class Employee(EmployeeBase):
    id: int
    
    class Config:
        from_attributes = True
