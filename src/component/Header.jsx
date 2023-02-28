import React,{useState,useEffect,useRef} from 'react'
import CurrentDate from './CurrentDate';


export default function Header({addCardHandler}){

    const [todoInput, setInput] = useState(''); 
    const [dateView, setDateView] = useState('');

    function currentTimer(){
        let date = new Date();
        const week = ['일','월','화','수','목','금','토']; 
    
        const dayOfWeek = week[date.getDay()]; 
    
        const years = String(date.getFullYear());
        const month = String(date.getMonth());
        const days = String(date.getDay()).padStart(2,"0");
    
        const hours = String(date.getHours()).padStart(2,"0");
        const minutes = String(date.getMinutes()).padStart(2,"0");
        const seconds = String(date.getSeconds()).padStart(2,"0");
    
        const newDate = `${dayOfWeek} ${years}-${month}-${days}/${hours}:${minutes}:${seconds}`;
        return newDate;
    }

    return(
        <div className='wrap_header'>
        <div className='row date-list-btn'>
          <div className="header_text">
              <CurrentDate/>
          </div>
        </div>

        <div className='row'>
            <form className='toDoInputForm' onSubmit={(event)=>addCardHandler(event,todoInput)}>
              <input
                type={"text"}
                placeholder={"할일을 입력해 주세요"}
                id={"todo_input"}
                required
                value={todoInput}
                onChange={(event)=>{setInput(event.target.value)}}
              />
              <input
              type={"submit"}
              id={"todo_submit"}
              value={'+'}
              />
            </form>
        </div>
      </div>
    )
}