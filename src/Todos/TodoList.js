import React from 'react'

export default function TodoList(props) {
    const {todos} = props;
    return (
        <div>            
            <div className="todoList">
                {
                    todos && todos.length > 0 && <h2 className="todoItem" >Todo List</h2>
                }
                {
                    todos && todos.map((todo, idx) => (
                        <div className="todoItem" key={todo.id}>
                            {todo.value}
                            <div className="item-options">                                
                                <button className="edit"  value="edit" onClick={()=>props.handleEdit(todo.id)}><a href="#form">Edit</a></button>
                                <button className="delete" value="delete" onClick={()=>props.handleDelete(todo.id)}>Delete</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
