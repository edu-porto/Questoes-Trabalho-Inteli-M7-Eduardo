from typing import Union
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from starlette.responses import FileResponse
from fastapi.staticfiles import StaticFiles


app = FastAPI()



@app.get("/")
async def read_index():
    return FileResponse('static/index.html')


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}

# Caminho da minha página web
app.mount('/static', StaticFiles(directory='static', html=True), name='static')
