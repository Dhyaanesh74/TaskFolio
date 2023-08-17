import React,{useState} from 'react'
import './Detail.css'
export function Detail() {
    const [newItem,setnewitem]= useState('')
    const [items, setitem]= useState([])
    const [ids,setids]= useState(1)
    const [newdate, setNewDate] = useState('')
    const [newTitle, setNewtitle] = useState('')

  function AddItem(){

    if(!(newItem && newTitle && newdate) ){
      alert('enter your title & task.....')
      return
    }
    const list ={
      id : ids,
      title: newTitle,
      value : newItem,
      date : newdate
    }
    
    setitem(prev => [...prev, list])
    setNewtitle("")
    setnewitem("")
    setNewDate('')
    setids(e => e + 1)
   
  }
  return (
    <div>
    <div className='body'>
      
      <div >
      <div>
        <h1 className='head'>TaskFolio</h1>
      </div>
        <label>Title</label><pre/>
        <input placeholder='Give your title...' value={newTitle} onChange={e => setNewtitle(e.target.value)}></input>
        <pre/>
        <label>Description</label><pre/>
        <textarea type='text' placeholder='add your task' value={newItem} onChange={e => setnewitem(e.target.value) } /><pre/>
        <label>DeadLine</label><pre/>
        <input type='date' value={newdate} onChange={e => setNewDate(e.target.value)}></input><pre/>
        <div>
                 <button className='button' onClick={()=>AddItem()}>add</button>
        </div>
      </div>
      </div>
      <ul>
      <div className='cards'>
            {items.map(list => (
          
            <div className='card'>
                <li key={list.id} >
                    <div className='title'>
                    <h3>Title: {list.title}</h3>
                    </div>
                    <div>
                    <h4>Desp:</h4> {list.value}
                    </div>
                    <div className='deadline'>
                    DeadLine: {list.date}
                    </div>
                </li>
            </div>
           
            ))}
         </div>
        </ul>
      
    </div>
  )
  
}


