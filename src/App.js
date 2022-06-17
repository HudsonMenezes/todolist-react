import React from 'react'
import { useState } from 'react'
import { IoMdAdd } from 'react-icons/io'
import { MdOutlineClose } from 'react-icons/md'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './styles.css'
import './global.css'

function App() {
  const [task, setTask] = useState('') // task do input
  const [tasks, setTasks] = useState([]) // array com todas as tasks

  function handleCreateTask() {
    if (task === '') {
      //erro
      toast.error('Adicione uma tarefa!')
    } else {
      //adiciona a task
      const idRandom = num => Math.floor(Math.random() * num)
      const newTask = { id: idRandom(9000000), title: task, isComplete: false }

      setTasks([...tasks, newTask])
      setTask('')
    }
  }

  // Função que muda o estilo da fonte caso ela esteja marcada ou não.

  function handleToggleTaskCompletion(id) {
    const taskComplete = tasks.map(task => {
      if (task.id === id) {
        return { ...task, isComplete: !task.isComplete }
      }
      return task
    })
    setTasks(taskComplete)
  }
  // FIM DA Função que muda o estilo da fonte caso ela esteja marcada ou não.

  // Remover a task atraves do botão de delete
  function handleDeleteTask(id) {
    setTasks(tasks.filter(remove => remove.id !== id))
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
          <div
            key={task.id}
            className={
              task.isComplete ? 'task-container completed' : 'task-container'
            }
          >
            {/* Começa a task */}
            <div className="check-and-title">
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  onClick={() => handleToggleTaskCompletion(task.id)}
                />
                <span className="checkmark"></span>
              </label>
              <p>{task.title}</p>
            </div>
            <div>
              <MdOutlineClose onClick={() => handleDeleteTask(task.id)} />
            </div>
          </div>
        ))}
        {/* Termina a task */}
      </div>
    </div>
  )
}

export default App
