export default function InputTodos(props){

    const value  = props.todo;

    const handleChange = (e) => {
        props.handleChangeCurrent(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleChangeTodo(value);
        props.handleChangeCurrent('')
    }
    

        return (
            <form className="input-form" onSubmit={handleSubmit} id="form">
                <input type="text" value={value} onChange={handleChange} placeholder="Add Todo..." />
                <button type="submit" value="submit">+Add</button>
            </form>
        )
}
