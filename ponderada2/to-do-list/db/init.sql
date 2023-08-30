CREATE TABLE tasks_to_do (
    id SERIAL PRIMARY KEY,
    task VARCHAR,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO tasks_to_do (id,task, date_created)
VALUES (1,'Primeira tarefa', NOW());

