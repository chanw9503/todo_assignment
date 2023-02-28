import React,{useState} from 'react'
import './App.css'
import ToDoCard from './component/TodoCard';
import Header from './component/Header'

function App() {

  const [cardCount, setCardCount] = useState(0);
  const [isWriting,setIsWriting] = useState(false);

  const [cardList, setCardList] = useState([
    { id: 1, done: false, content: 'Walking in the Morning'},
    { id: 2, done: false, content: 'Walking in the lunch'},
    { id: 3, done: false, content: 'Walking in the Evening'},
  ]);

  function addCard(event,content) {
    event.preventDefault();
    setCardCount(cardCount + 1);
    const obj = {
      id : Date.now(),
      done : false,
      content: content,
 
    }
    setCardList([...cardList,obj]);
  }

  function completeCard(id){

    const newCardList = cardList.map((item)=>{

      let done = item.id === id ? !item.done : item.done;
      const newObj = {
          id : item.id,
          done,
          content: item.content,
      }
      return newObj;
    })

    console.log(newCardList);
   setCardList(newCardList);

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
                  completeHandler={completeCard}
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