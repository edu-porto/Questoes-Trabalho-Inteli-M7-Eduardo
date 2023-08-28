import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:8000/api/get/tasks/');
        if (response.status === 200) {
          setTasks(response.data);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.task_name}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
