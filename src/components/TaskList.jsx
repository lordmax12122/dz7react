import React from "react";

class TaskList extends React.Component {
    static tasks = [
        { id: 1, text: "test" },
        { id: 2, text: "test1" }
    ];

    addTask = () => {
        const text = prompt("твій промпт");
        if (text && text.trim() !== "") {
            TaskList.tasks.push({ id: Date.now() + 1, text });
            this.forceUpdate();
        }
    };

    deleteTask = (id) => {
        TaskList.tasks = TaskList.tasks.filter(task => task.id !== id);
        this.forceUpdate();
    };

    render() {
        return (
            <div className="tasks-div">
                <button className="tasks-add" onClick={this.addTask}>add prompt</button>
                <ul className="tasks-list">
                    {TaskList.tasks.map(task => (
                        <li className="tasks-item" key={task.id}>
                            <h2>{task.text}</h2>
                            <button className="tasks-delete" onClick={() => this.deleteTask(task.id)}>
                                delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default TaskList;
