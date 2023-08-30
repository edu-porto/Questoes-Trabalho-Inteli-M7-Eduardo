from typing import TYPE_CHECKING, List
import app.database as database
from app.schemas import CreateTask,Task
from app.models import Contact
if TYPE_CHECKING:
    from sqlalchemy.orm import Session


# Essa função cria o banco de dados 
def add_tables_services():
    return database.Base.metadata.create_all(bind=database.engine)

# Função que cria uma sessão no db
def get_db_services():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Função que vai criar uma tarefa 
async def create_task_services(task: CreateTask, db: "Session" )-> Task:
    task = Contact(**task.dict())
    db.add(task)
    db.commit()
    return Task.from_orm(task)

# Função que retorna todas tarefas 
async def get_all_tasks_services(db: "Session") -> List[Task]:
    tasks = db.query(Contact).all()
    return list(map(Task.from_orm, tasks))

# Função que retorna uma tarefa especifica 
async def get_task_services(task_id:int ,db: "Session"):
    task_unique = db.query(Contact).filter(Contact.id == task_id).first()
    return task_unique

# Função que deleta alguma tarefa
async def delete_task_services(task: Contact, db:"Session"):
    db.delete(task)
    db.commit()

# Função que faz o update em uma tarefa 
async def update_task_services(
    task_data: CreateTask, task: Contact, db: "Session"
) -> Task:
    task.task = task_data.task

    db.commit()
    db.refresh(task)

    return Task.from_orm(task)
