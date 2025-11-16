import React from "react"

class TodoList extends React.Component {
state = {
    items: [
        {id: 1, text: "Поприбирати"}
    ]
}

addTodo = () => {
    const text = prompt("Яке у вас завдання?")
    const newTodo = {
        id: Date.now(),
        text
    };

    this.setState(prevState => ({
        items: [...prevState.items, newTodo]
    }))
};

deleteTodo = (id) => {
    this.setState(prevState => ({
        items: prevState.items.filter(task => task.id !== id)
    }))
}

render() {
        return (
            <div>
                <button onClick={this.addTodo}>
                    Добавити задачу
                </button>
                <ul>
                    {this.state.items.map(item => (
                        <li>
                            <h2>{item.text}</h2>
                            <button onClick={() => this.deleteTodo(item.id)}>Видалити</button>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

}


    export default TodoList