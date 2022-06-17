import React from 'react'
import { useState } from 'react'
import { IoMdAdd } from 'react-icons/io'
import { MdOutlineClose } from 'react-icons/md'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './styles.css'
import './global.css'

function App() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([]) // armazena todas as tasks

  function handleCreateTask() {
    if (task === '') {
      //erro
      toast.error('Digite alguma task')
    } else {
      //adiciona a task
      const idRandom = num => Math.floor(Math.random() * num)
      const newTask = { id: idRandom(9000000), title: task, isComplete: false }

      setTasks([...tasks, newTask])
    }
  }

  return (
    <div className="app">
      <ToastContainer />

      <div className="todo">
        {/* Aqui fica o Input */}

        <header>
          <input
            type="text"
            placeholder="Adicione uma tarefa"
            value={task}
            onChange={ev => setTask(ev.target.value)}
          />
          <button onClick={handleCreateTask}>
            <IoMdAdd />
          </button>
        </header>

        {/* Aqui começa a seção das tasks */}
        {tasks.map(task => (
          <div key={task.id} className="task-container">
            {/* Começa a task */}
            <div className="check-and-title">
              <label className="checkbox-container">
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <p>{task.title}</p>
            </div>
            <div>
              <MdOutlineClose />
            </div>
          </div>
        ))}
        {/* Termina a task */}
      </div>
    </div>
  )
}

export default App
