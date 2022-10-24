import {useState} from 'react'; 
import Backdrop from './Backdrop';
import Modal from './Modal';

// parameter in react is called props , props is js 
// object that will take the attributes that it is assigned 
// key value pairs 

// In react if we want to use event listen for the button 
// to be clicked. We use onClick which does something, In
// this case we use a function that performs an action. 

// We want the deleteHandler to do something , in this 
// case we will use react library called useState which 
// are use hooks. 
// useState returns an array with two elements 
// first element in the array(modalIsOpen) is inital  value/current state
// which it was set. While the second element setModalIsOpen 
// can be the function that changes or does something with 
// first element 


function Todo(props){

 const [modalIsOpen,setModalIsOpen] =  useState(false); 

function deleteHandler(){
    setModalIsOpen(true); 
}
function closeModalHandler(){
    setModalIsOpen(false); 
}

return(
    <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">   
        <button className="btn" onClick={deleteHandler}>Delete</button>
        </div>
        
       {modalIsOpen ? <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/> : null}
       {modalIsOpen ? <Backdrop onClickBackDrop={closeModalHandler}/> : null}
    </div>
);

}

export default Todo;