export default function ToDoCard({ item, deleteHandler}) {

    return (
        <div key={item.key} className='toDoCard'>
            <div className='Check_Box'>
                <button className='todoCheckBox'></button>
            </div>
            <div className='text_box'>
                <span>{item.content}</span>
                <div className='Btn_box'>
                    <button className='todoBtn deleteBtn' 
                    onClick={()=> deleteHandler(item.id)}
                    >delete</button>
                    <button className='todoBtn ModifyBtn'>Modify</button>
                </div>
                {/* <<span>{item.saveTime}.am</span>> */}
            </div>
        </div>
    )
}

