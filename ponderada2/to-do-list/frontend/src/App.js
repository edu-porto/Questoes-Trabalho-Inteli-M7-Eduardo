import React, { useState, useEffect } from "react";
import Todo from "./components/Todo";
import FilterButton from "./components/FilterButton"
import Form from "./components/Form"
import { nanoid } from "nanoid";
import axios from 'axios';
import TaskList from './components/TaskList'


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



  // Rota para fazer um get  
  useEffect(() => {
    fetch("http://localhost:8000/api/get/tasks/").then(response => 
    response.json()).then(
      data =>{
        const newDada = data.map((item) => item.task)
        setTasks(data);
      })
      .catch(error => {
        console.log(setTasks)
      });
  }, []);


// Mapping de todas as características de uma tarefa 
const taskList = tasks.filter(FILTER_MAP[filter])
.map((task) => (
    <Todo
      id={task.id}
      name={task.task}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
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
    axios.delete(`http://localhost:8000/api/tasks/delete/${id}`)
    .then(response => {
      if (response.status === 200) {
        console.log('Task deleted successfully.');
        // You might want to update your tasks state here if needed.
      } else {
        console.error('Failed to delete task.');
      }
    })
    .catch(error => {
      console.error('Error deleting task:', error);
    });
  }

  // Função que edita as tarefas 
  function editTask(id, newName){
    const editedTaskList = tasks.map((task) => {
      if (id=== task.id ){
        return {...task, name: newName};
      }
      return task;
    });
    // setTasks(editedTaskList)
    axios.put(`http://localhost:8000/api/tasks/update/${id}/`, {
      task: newName,
    },
    console.log(newName)
    )
      .then(response => {
        if (response.status === 200) {
          console.log('Task updated successfully.');
          setTasks(editedTaskList);
        } else {
          console.error('Failed to update task.');
        }
      })
      .catch(error => {
        console.error('Error updating task:', error);
      });
  }

  return (
    <div className="todoapp stack-large">
      <h1>TO-DO-LIST</h1>
      <Form addTask={addTask}/>
      <div className="filters btn-group stack-exception">
      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
          {taskList}
      </ul>
      <h3>Não se esqueça de recarregar a página para conferir as tarefas</h3>
    </div>
  );
}

export default App;
