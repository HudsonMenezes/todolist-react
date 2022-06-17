import React from 'react'
import { IoMdAdd } from 'react-icons/io'
import { MdOutlineClose } from 'react-icons/md'
import './styles.css'
import './global.css'

function App() {
  return (
    <div className="app">
      <div className="todo">
        {/* Aqui fica o Input */}

        <header>
          <input type="text" placeholder="Adicione uma tarefa" />
          <button>
            <IoMdAdd />
          </button>
        </header>

        {/* Aqui começa a seção das tasks */}
        <div className="task-container">
          {/* Começa a task */}
          <div className="check-and-title">
            <label className="checkbox-container">
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
            <p>Criar Site</p>
          </div>
          <div>
            <MdOutlineClose />
          </div>
          {/* Termina a task */}
        </div>
      </div>
    </div>
  )
}

export default App
