import datetime as dt
import sqlalchemy as sql

import database as database

#  Criando a classe que é usada para fazer a tabela
class Contact(database.Base):
    __tablename__ = "tasks_to_do"
    id = sql.Column(sql.Integer, primary_key=True, index=True)
    task = sql.Column(sql.String, index=True)
    date_created = sql.Column(sql.DateTime, default=dt.datetime.utcnow)