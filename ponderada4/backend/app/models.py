import datetime as dt
from pydantic import BaseModel, Field

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