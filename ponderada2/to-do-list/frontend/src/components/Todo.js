import React, { useState } from "react";

export default function Todo(props) {

  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState("");

  function handleSubmit(e){
    e.preventDefault();
    props.editTask(props.id, newName);
    setNewName("")
    setEditing(false)
  }
  function handleChange(e) {
    setNewName(e.target.value);
  }
  

  

  // Template para editar uma tarefa 
  const editingTemplate = (
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="todo-label" htmlFor={props.id}>
          Defina um novo nome para a tarefa :  {props.name}
        </label>
        <input id={props.id} 
        className="todo-text" 
        type="text"
        value={newName}
        onChange={handleChange} />
      </div>
      <div className="btn-group">
        <button type="button"
         className="btn todo-cancel"
         onClick={() => setEditing(false)}
         >
          Cancelar
          <span className="visually-hidden">renaming {props.name}</span>
        </button>
        <button type="submit" className="btn btn__primary todo-edit">
          Salvar
          <span className="visually-hidden">new name for {props.name}</span>
        </button>
      </div>
    </form>
  );

  // Template para visualizar as tarefas 
  const viewTemplate = (
    <div className="stack-small">
      <div className="todo-box">
        <h3 className="todo-label" htmlFor={props.id}>
          {props.name}
        </h3>
      </div>
      <div className="btn-group">
        <button type="button"
         className="btn" 
         onClick={() => setEditing(true)}>
          Editar <span className="visually-hidden">{props.name}</span>
        </button>
        <button
          type="button"
          className="btn btn__danger"
          onClick={() => props.deleteTask(props.id)}>
          Deletar <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </div>
  );
  
  // Condicional de rendering que checa se realmente está editando ou vendo uma task
  return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
  }
  