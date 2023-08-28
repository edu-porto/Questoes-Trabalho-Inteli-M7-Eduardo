import React, { useState } from "react";
import axios from 'axios';


function Form(props) {
  
  // Aqui é onde vai ficar salvo o hook contendo o input 
  const [name, setName] = useState("");

  // Função que anota as mudanças no input field 
  function handleChange(e) {
    setName(e.target.value);
  }

  // Aqui que os dados saem do componente e vão para o componente app
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      console.log('Sending data:', { task : name }); // Log the data before sending

      const response = await axios.post(
        'http://localhost:8000/api/create/tasks',
        { task : name },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Response data:', response.data); // Log the response data

      if (response.status === 200) {
        const newTask = response.data;
        setName(newTask.task); // Clear the input field
      } else {
        console.error('Failed to add task');
      }
    } catch (error) {
      console.error('Error:', error);
    }


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