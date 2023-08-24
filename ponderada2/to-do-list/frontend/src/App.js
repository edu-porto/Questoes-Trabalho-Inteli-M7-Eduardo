import React, { useState } from "react";
import Todo from "./components/Todo";
import FilterButton from "./components/FilterButton"
import Form from "./components/Form"
import { nanoid } from "nanoid";



// Constante que guarda os filtros das tasks 
const FILTER_MAP = {
  Todas: () => true,
  Ativa: (task) => !task.completed,
  Completa: (task) => task.completed,
};
const FILTER_NAMES = Object.keys(FILTER_MAP);


function App(props){

  const [tasks, setTasks] = useState(props.tasks);

  const [filter, setFilter] = useState("Todas");


  // Mapping de todas as características de uma tarefa 
  const taskList = tasks.filter(FILTER_MAP[filter])
.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ));

  const filterList = FILTER_NAMES.map((name) => (
      <FilterButton 
      key={name} 
      name={name} 
      isPressed={name===filter}
      setFilter={setFilter}
      />
    ));
    


  // Função que checa se uma tarefa foi completada ou não 
  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      // Checa se o id que foi clicado é igual ao id da task 
      if (id === task.id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);  
  }

  // Nesta função que fica salvo os dados da minha nova tarefa 
  function addTask(name){
    // Essa lib incrementa 1 na id de cada task
    const newTask = { id:`todo-${nanoid()}` , name, completed: false };
    setTasks([...tasks, newTask]);
  }


  // Conta quantas tarefas ainda tenho pendentes e define se é plural ou não 
  const tasksNoun = taskList.length !== 1 ? "tarefas" : "tarefa";
  const headingText = `${taskList.length} ${tasksNoun} pendentes`;
  
  // Função que deleta as tarefas 
  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  // Função que edita as tarefas 
  function editTask(id, newName){
    const editedTaskList = tasks.map((task) => {
      if (id=== task.id ){
        return {...task, name: newName};
      }
      return task;
    });
    setTasks(editedTaskList)
  }

  return (
    <div className="todoapp stack-large">
      <h1>TO-DO-LIST</h1>
      <Form addTask={addTask}/>
      <div className="filters btn-group stack-exception">
      {/* Aqui é onde está o filtro das tasks */}
      {filterList}
      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
          {taskList}
      </ul>
    </div>
  );
}

export default App;
