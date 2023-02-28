import { useEffect,useRef,useState } from "react";
import './Date.css';

export default function CurrentDate(){

    const [curDate, setDate] = useState({}); 

    function GetCuurentDate(){

        let date = new Date();
        const week = ['SUNDAY','MONSDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY']; 
    
        const dayOfWeek = week[date.getDay()]; 
    
        const years = String(date.getFullYear());
        const month = String(date.getMonth());
        const days = String(date.getDay()).padStart(2,"0");
    
        const hours = String(date.getHours()).padStart(2,"0");
        const minutes = String(date.getMinutes()).padStart(2,"0");
        const seconds = String(date.getSeconds()).padStart(2,"0");
    
        let dateObj = {
            dayOfWeek ,
            years,
            month,
            days,
            hours,
            minutes,
            seconds,
        }; 
        
        return dateObj;
        //return `${dayOfWeek}요일 / ${years}-${month}-${days}-${hours}:${minutes}:${seconds}`;
    }


    function useInterval(callback, delay){
        const saveCallback = useRef(); //최근에 들어온 callback을 저장할 ref를 하나 만든다.
        
        useEffect(()=>{
          saveCallback.current = callback; // callback이 바뀔 때마다 ref를 업데이트 해준다. 
        },[callback]);
    
        useEffect(()=>{
          function tick(){
            saveCallback.current(); // callback이 바뀔 때 마다 ref를 업데이트 해준다. 
          }
          if(delay !== null){ //만약 delay가 null이 아니라면
            let id = setInterval(tick ,delay); //delay에 맞추어 interval을 새로 실행시킨다.
            return () => clearInterval(id); //unmount될 때 clearInterval을 해준다.
          }
        },[delay]); //delay가 바뀔 때마다 새로 실행된다. 
          
    
      }

      useInterval(()=>{
        const newObj = {...GetCuurentDate()}; 
        console.log(curDate);
        setDate(newObj); 
      },1000)

    return (
      <div>
        <div className="dateBox">
          <div className="dmy_box">
            <div className="day">
              <strong>{curDate.days}</strong>
            </div>
            <div className="month_year">
              <div className="month">
                <strong>{curDate.month}</strong>
              </div>
              <div className="year">{curDate.years}</div>
            </div>
          </div>
          <div className="dayofWeek">{curDate.dayOfWeek}</div>
        </div>
        <div className="curTime">
            {`${curDate.hours}:${curDate.minutes}:${curDate.seconds}`}
        </div>
      </div>
    );

}