from typing import TYPE_CHECKING, List
import database as database
import models as models
import schemas 

if TYPE_CHECKING:
    from sqlalchemy.orm import Session


# Essa função cria o banco de dados 
def add_tables():
    return database.Base.metadata.create_all(bind=database.engine)

# Função que cria uma sessão no db
def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Função que vai criar uma tarefa 
async def create_task(task: schemas.CreateTask, db: "Session" )-> schemas.Task:
    task = models.Contact(**task.dict())
    db.add(task)
    db.commit()
    return schemas.Task.from_orm(task)

# Função que retorna todas tarefas 
async def get_all_tasks(db: "Session") -> List[schemas.Task]:
    tasks = db.query(models.Contact).all()
    return list(map(schemas.Task.from_orm, tasks))

# Função que retorna uma tarefa especifica 
async def get_task(task_id:int ,db: "Session"):
    task_unique = db.query(models.Contact).filter(models.Contact.id == task_id).first()
    return task_unique

# Função que deleta alguma tarefa
async def delete_task(task: models.Contact, db:"Session"):
    db.delete(task)
    db.commit()

# Função que faz o update em uma tarefa 
async def update_task(
    task_data: schemas.CreateTask, task: models.Contact, db: "Session"
) -> schemas.Task:
    task.task = task_data.task

    db.commit()
    db.refresh(task)

    return schemas.Task.from_orm(task)
