import sqlalchemy as sql   
import sqlalchemy.ext.declarative as declarative
import sqlalchemy.orm as orm

DATABASE_URL = "postgresql://postgres:senha@db:5432/postgres"

engine = sql.create_engine(DATABASE_URL)

SessionLocal = orm.sessionmaker(autoflush=False, autocommit=False, bind=engine)

Base = declarative.declarative_base()