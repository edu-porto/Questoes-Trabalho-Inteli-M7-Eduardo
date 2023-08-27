import datetime as dt
from pydantic import BaseModel

# Clase base da tarefa
class BaseTask(BaseModel):
    task: str

class Task(BaseTask):
    id: int
    date_created: dt.datetime

    class Config:
        orm_mode = True
        from_attributes = True

class CreateTask(BaseTask):
    pass
