import React from 'react'
import InputTodos from './InputTodos'
import TodoList from './TodoList';
import nextId from "react-id-generator";
import './todos.css'

function Todo() {

    const [todos, setTodos] = React.useState([]);
    const [msg, setMsg] = React.useState('');
    const [editItem, setEditItem] = React.useState();
    const [edit, setEdit] = React.useState(false);
    const [currentTodo, setCurrentTodo] = React.useState('');
    const uId= nextId('todo-');
    
//handle todos value
    const handleTodos = (value) => {

        let newTodo = {            
            id:editItem ? editItem.id : uId,
            value:value
        }
        
        let todoArr = [];
        if(edit){            
            todoArr = todos.map(todo =>{
                return todo.id==editItem.id ? newTodo : todo
            });
            setEditItem('');
            setEdit(false);
        }
        else{
            todoArr = [...todos, newTodo];
    }
    
    value && value.trim() && setTodos(todoArr); 
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
        setEdit(true);
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
            edit={edit}
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