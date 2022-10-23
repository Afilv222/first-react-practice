import {useState} from 'react'; 
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
// first element in the array(modalIsOpen) is inital  value
// which it was set. While the second element setModalIsOpen 
// can be the function that changes or does something with 
// first element 


function Todo(props){

 const [modalIsOpen,setModalIsOpen] =  useState(false); 

function deleteHandler(){
<div className = {props.className} style={{display: "none"}}>
</div>
}

return(
    <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">   
        <button className="btn" onClick={deleteHandler}>Delete</button>
        </div>
    </div>
);

}

export default Todo;