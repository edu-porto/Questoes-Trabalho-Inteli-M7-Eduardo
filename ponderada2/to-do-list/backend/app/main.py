from typing import TYPE_CHECKING, List
from fastapi import FastAPI, Depends, HTTPException, Body
from fastapi.middleware.cors import CORSMiddleware
from fastapi.encoders import jsonable_encoder
import sqlalchemy.orm as orm
from app.services import get_db_services,create_task_services,get_all_tasks_services,get_task_services,delete_task_services,update_task_services
from app.schemas import BaseModel, BaseTask, Task, CreateTask
from app.models import UserSchema, UserLoginSchema
from app.auth.jwt_handler import signJWT
from app.auth.jwt_bearer import jwtBearer

if TYPE_CHECKING:
    from sqlalchemy.orm import Session


users = []
default_user = { 
    'user' : "teste",
    'password': "teste123"
}
app = FastAPI()

origins = [
    "http://54.146.235.203:3000",
    "http://54.146.235.203:3000/"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
)



# Nessa rota iremos fazer um login
@app.post("/user/login_new", tags=["user"])
def user_login_new(user: UserLoginSchema = Body(default=None)):
    data = jsonable_encoder(user)
    if default_user['user'] == data['user'] and default_user['password'] == data['password']:
        return signJWT(user.user)
    else:
        return{
            "Login inválido"
        }

# Rota que vai criar uma tarefa
@app.post('/api/create/tasks/', response_model=Task, tags=["CRUD"])
async def create_task(
    task:CreateTask, 
    db: orm.Session = Depends(get_db_services),
    ):
    try:
        create_task = await create_task_services(task=task,db=db)
        return create_task
    except Exception as e :
        raise HTTPException(status_code=500, detail=str(e))



# Rota que vai fazer um get em todas tarefas
@app.get("/api/get/tasks/", response_model= List[Task], tags=["CRUD"])
async def get_all_tasks(
    db: orm.Session = Depends(get_db_services)):

    return await get_all_tasks_services(db=db)


# Rota que vai fazer um get em uma tarefa
@app.get("/api/task/{task_id}", response_model=Task, tags=["CRUD"])
async def get_task(
    task_id: int, db: orm.Session = Depends(get_db_services)
):
    task = await get_task_services(db=db, task_id=task_id)
    if task is None:
        raise HTTPException(status_code=404, detail="Essa tarefa não existe")
    
    return task



# Rota da api que aciona o serviço de deletar uma tarefa 
@app.delete("/api/tasks/delete/{task_id}/", tags=["CRUD"])
async def delete_task(
    task_id:int, db : orm.Session = Depends(get_db_services)):
    task = await get_task_services(db=db, task_id=task_id)
    if task is None:
        raise HTTPException(status_code=404, detail="Essa tarefa não existe")
    
    await delete_task_services(task, db=db)

    return "Deletado com sucesso "

# Rota que atualiza uma tarefa 
@app.put("/api/tasks/update/{task_id}/", response_model=Task, tags=["CRUD"])
async def update_task(
    task_id: int,
    task_data: CreateTask,
    db: orm.Session = Depends(get_db_services)
):
    task = await get_task_services(task_id=task_id, db=db)
    if task is None:
        raise HTTPException(status_code=404, detail="Essa tarefa não existe")

    return await update_task_services(task_data=task_data, task=task, db=db)
