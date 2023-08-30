import datetime as dt
import sqlalchemy as sql
from pydantic import BaseModel, Field
import app.database as database

#  Criando a classe que é usada para fazer a tabela
class Contact(database.Base):
    __tablename__ = "tasks_to_do"
    id = sql.Column(sql.Integer, primary_key=True, index=True)
    task = sql.Column(sql.String, index=True)
    date_created = sql.Column(sql.DateTime, default=dt.datetime.utcnow)


# Classe que contém o exemplo de usuario 
class UserSchema(BaseModel):
    user : str = Field(default=None)
    password : str = Field(default=None)
    class Config :
        the_schema = {
        "user_final": {
            "user" : "teste",
            "password" : "teste123"
        }
    }
    
# Classe que contém o exemplo de usuario 
class UserLoginSchema(BaseModel):
    user : str = Field(default=None)
    password : str = Field(default=None)
    class Config :
        the_schema = {
        "user_final": {
            "user" : "teste",
            "password" : "teste123"
        }
    }