import React, { useState } from "react";


function Form(props) {
  
  // Aqui é onde vai ficar salvo o hook contendo o input 
  const [name, setName] = useState("Insira uma tarefa ");

  // Função que anota as mudanças no input field 
  function handleChange(e) {
    setName(e.target.value);
  }

  // Aqui que os dados saem do componente e vão para o componente app
  function handleSubmit(e) {
    e.preventDefault();
    props.addTask(name);
    setName("")
  }
  
    return (
      <form onSubmit={handleSubmit}>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            Tarefas a serem feitas ?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          value={name}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Adicionar
        </button>
      </form>
    );
  }
  
  export default Form;