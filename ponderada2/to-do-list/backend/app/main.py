from typing import TYPE_CHECKING, List
from fastapi import FastAPI, Depends, HTTPException
import schemas as schemas
import sqlalchemy.orm as orm
import services as services

if TYPE_CHECKING:
    from sqlalchemy.orm import Session


app = FastAPI()

# Rota que vai criar uma tarefa
@app.post('/api/tasks', response_model=schemas.Task)
async def create_task(
    task:schemas.CreateTask, 
    db: orm.Session = Depends(services.get_db),
    ):

    return await services.create_task(task=task,db=db)


# Rota que vai fazer um get em todas tarefas
@app.get("/api/tasks/", response_model= List[schemas.Task])
async def get_all_tasks(
    db: orm.Session = Depends(services.get_db)):

    return await services.get_all_tasks(db=db)

# Rota que vai fazer um get em uma tarefa
@app.get("/api/tasks/{task_id}", response_model=schemas.Task)
async def get_task(
    task_id: int, db: orm.Session = Depends(services.get_db)
):
    task = await services.get_task(db=db, task_id=task_id)
    if task is None:
        raise HTTPException(status_code=404, detail="Essa tarefa não existe")
    
    return task



# Rota da api que aciona o serviço de deletar uma tarefa 
@app.delete("/api/tasks/{task_id}/")
async def delete_task(
    task_id:int, db : orm.Session = Depends(services.get_db)):
    task = await services.get_task(db=db, task_id=task_id)
    if task is None:
        raise HTTPException(status_code=404, detail="Essa tarefa não existe")
    
    await services.delete_task(task, db=db)

    return "Deletado com sucesso "

# Rota que atualiza uma tarefa 
@app.put("/api/tasks/{task_id}/", response_model=schemas.Task)
async def update_task(
    task_id: int,
    task_data: schemas.CreateTask,
    db: orm.Session = Depends(services.get_db)
):
    task = await services.get_task(task_id=task_id, db=db)
    if task is None:
        raise HTTPException(status_code=404, detail="Essa tarefa não existe")

    return await services.update_task(task_data=task_data, task=task, db=db)

