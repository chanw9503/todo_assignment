import { CSSTransition } from 'react-transition-group';
import React,{useState} from 'react'

export default function ToDoCard({ item, deleteHandler, completeHandler }) {
  return (
    <div>
      <div key={item.key} className="toDoCard">
        <div className="Check_Box">
          <input
            id='CopleteCheck'
            type={'checkbox'}
            onClick={() => completeHandler(item.id)}
            className="todoCheckBox"
          />
        </div>
        <div className="text_box">
          <span className={item.done === true ? "completeText" : ""}>
            {item.content}
          </span>

          <div className="Btn_box">
            <button
              className="todoBtn deleteBtn"
              onClick={() => deleteHandler(item.id)}
            >
              delete
            </button>
            <button className="todoBtn ModifyBtn">Modify</button>
          </div>
        </div>
      </div>

      <div
        className={
          item.done === true ? "horizontalLine completeLine" : "horizontalLine"
        }
      ></div>
    </div>
  );
}

