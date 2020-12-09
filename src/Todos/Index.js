import React from 'react'
import InputTodos from './InputTodos'
import TodoList from './TodoList';
import nextId from "react-id-generator";
import './todos.css'

function Todo() {

    const [todos, setTodos] = React.useState([]);
    const [msg, setMsg] = React.useState('');
    const [editItem, setEditItem] = React.useState();
    const [currentTodo, setCurrentTodo] = React.useState('');
    const uId= nextId('todo-');
    
//handle todos value
    const handleTodos = (value) => {

        if(editItem){            
            let todoArr = todos.map(todo =>{
                if(todo.id==editItem.id){
                    todo.id= editItem.id;
                    todo.value = value;
                }
                return todo;
            });            
            setTodos(todoArr); 
            setEditItem('');
        }
        else{
            let newTodo = {
                id:uId,
                value:value
            }
        let tempArr = [...todos, newTodo];
        value && value.trim()  && setTodos(tempArr);
    }
}

// delete todo
    const handleDelete = (id) => {
        let item = todos.find(todo => todo.id==id);
        let tempArr = todos.filter(todo => todo.id!==id);
        setMsg(item.value +' deleted');        
        setInterval(() => setMsg(''), 3000); //message disappear after 3sec
        setTodos(tempArr);
    }

// edit todo
    const handleEdit = (id ) => {
        let item = todos.find(todo => todo.id==id);
        setEditItem(item);
        setCurrentTodo(item.value);
    }



    return (
        <>
            {/* SUCCESS MESSAGE */}
            {msg &&
                <div className="msg"> <p>{msg}</p> </div>
            }
            
            {/* INPUT TODOS */}
            <InputTodos 
            todo={currentTodo} 
            handleChangeCurrent={setCurrentTodo}  
            handleChangeTodo={handleTodos} />
            
            {/* TODO LIST */}
            <TodoList 
            todos={todos} 
            handleDelete={handleDelete} 
            handleEdit={handleEdit} />
            
        </>
    )
}

export default Todo;