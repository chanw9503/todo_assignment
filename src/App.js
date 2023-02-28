import React,{useState} from 'react'
import './App.css'
import ToDoCard from './component/TodoCard';
import Header from './component/Header'

function App() {

  const [cardCount, setCardCount] = useState(0);
  const [isWriting,setIsWriting] = useState(false);

  const [cardList, setCardList] = useState([
    { id: 1, done: false, content: 'Walking in the Morning', saveTime: 7 },
    { id: 2, done: false, content: 'Walking in the lunch', saveTime: 7 },
    { id: 3, done: false, content: 'Walking in the Evening', saveTime: 7 },
  ]);

  function addCard(event,content) {
    event.preventDefault();
    setCardCount(cardCount + 1);
    const newTime = 0;
    const obj = {
      id : Date.now(),
      done : false,
      content: content,
      saveTime :newTime
    }
    setCardList([...cardList,obj]);
  }

  function deleteCard(id){
   const newCardList=  cardList.filter((item)=> item.id !== id);
   setCardList(newCardList);
  }

  return (
    <div>
      <div className='wrap'>
        <div className='container'>
          <Header addCardHandler = {addCard} />
          
          {
          isWriting?<div>작성중</div> : <div className='wrap_List'>
            {
              cardList.map((item) => {
                return <ToDoCard
                  key={item.id}
                  item={item}
                  deleteHandler={deleteCard}
                />
              })
            } 
          </div>
          }
        </div>

      </div>
    </div>
  )
}

export default App