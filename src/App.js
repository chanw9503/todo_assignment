import React from 'react'
import './App.css'
function App() {
  return (
    <div>
      <div className='wrap'>
        <div className='container'>
          <div className='wrap_header'>
            <div className="header_text">
              <div className='dateBox'>
                날짜/요일
              </div>
              <div className='todoListCount'>
                todoList 갯수
              </div>
            </div>
            <div className='add_Btn_Box'>
              <button className='addBtn'>+</button>
            </div>
          </div>
          <div className='toDoCard'>

          </div>

        </div>

      </div>
    </div>
  )
}

export default App