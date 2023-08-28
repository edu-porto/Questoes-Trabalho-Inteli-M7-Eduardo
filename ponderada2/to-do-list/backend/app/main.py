from typing import TYPE_CHECKING, List
from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import schemas as schemas
import sqlalchemy.orm as orm
import services as services

if TYPE_CHECKING:
    from sqlalchemy.orm import Session


app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
)


# Rota que vai criar uma tarefa
@app.post('/api/create/tasks/', response_model=schemas.Task)
async def create_task(
    task:schemas.CreateTask, 
    db: orm.Session = Depends(services.get_db),
    ):
    try:
        create_task = await services.create_task(task=task,db=db)
        return create_task
    except Exception as e :
        raise HTTPException(status_code=500, detail=str(e))



# Rota que vai fazer um get em todas tarefas
@app.get("/api/get/tasks/", response_model= List[schemas.Task])
async def get_all_tasks(
    db: orm.Session = Depends(services.get_db)):

    return await services.get_all_tasks(db=db)

# Rota que vai fazer um get em uma tarefa
@app.get("/api/task/{task_id}", response_model=schemas.Task)
async def get_task(
    task_id: int, db: orm.Session = Depends(services.get_db)
):
    task = await services.get_task(db=db, task_id=task_id)
    if task is None:
        raise HTTPException(status_code=404, detail="Essa tarefa não existe")
    
    return task



# Rota da api que aciona o serviço de deletar uma tarefa 
@app.delete("/api/tasks/delete/{task_id}/")
async def delete_task(
    task_id:int, db : orm.Session = Depends(services.get_db)):
    task = await services.get_task(db=db, task_id=task_id)
    if task is None:
        raise HTTPException(status_code=404, detail="Essa tarefa não existe")
    
    await services.delete_task(task, db=db)

    return "Deletado com sucesso "

# Rota que atualiza uma tarefa 
@app.put("/api/tasks/update/{task_id}/", response_model=schemas.Task)
async def update_task(
    task_id: int,
    task_data: schemas.CreateTask,
    db: orm.Session = Depends(services.get_db)
):
    task = await services.get_task(task_id=task_id, db=db)
    if task is None:
        raise HTTPException(status_code=404, detail="Essa tarefa não existe")

    return await services.update_task(task_data=task_data, task=task, db=db)

