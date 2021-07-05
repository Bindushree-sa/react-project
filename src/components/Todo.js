

import Modal from "./Modal";

import {useState} from "react";
import Backdrop from "./Backdrop";


function Todo(props) {

 const [modalIsOpen,setModalIsOpen]=useState(false)

    function DeleteHandler() 
    {
  
      console.log(props.text)
      setModalIsOpen(true)
    }
    
    function CancelHandler() 
    {
  
      console.log(props.text)
      setModalIsOpen(false)
    }
    function AlertMessage(){
      alert("Deleted Sucessfully")

      setModalIsOpen(false)
    }
    return (
      <div className='card'>
        <h2>{props.text}</h2>
        <div className='actions'>
          <button className='btn' onClick={DeleteHandler}>Delete</button>
        </div>
        

        {modalIsOpen && <Modal onConfirm={AlertMessage} onCancel={CancelHandler}/>}
        
       
        
        {modalIsOpen && <Backdrop onTouch={CancelHandler}/>}
       
     
      </div>
    );
  }
  
  export default Todo;