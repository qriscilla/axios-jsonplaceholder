import React, { Component } from 'react';
import axios from 'axios';

export default class Todos extends Component {
    state = {
        todos: [],
        task: ''
    };

    async componentDidMount() {
        let res = await axios.get(`https://jsonplaceholder.typicode.com/todos`);
        this.setState({ todos: res.data });
    };

    handleChange = e => this.setState({ task: e.target.value });

    togglecheckbox = e => {
        console.log("Can't make any real PUT requests with this API");
    };

    addTask = e => {
        e.preventDefault();

        const newTask = {
            userId: 1000,
            id: 1000,
            title: this.state.task,
            completed: false
        };

        axios
            .post(`https://jsonplaceholder.typicode.com/todos`, {newTask})
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    };

    updateTask = e => {
        e.preventDefault();

        const taskToUpdate = {
            'userId': '1',
            'id': '1',
            'title': 'Task 1 Updated Title',
            'completed': false
        };

          axios
            .put('https://jsonplaceholder.typicode.com/todos/1', {taskToUpdate})
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    };

    deleteTask = e => {
        e.preventDefault();

        const taskToDelete = {
            'userId': '1',
            'id': '1',
            'title': "delectus aut autem",
            'completed': false
        };

        axios
            .delete(`https://jsonplaceholder.typicode.com/todos/1`, {taskToDelete})
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <div className='header'>Todos</div>

                <div style={{display: 'flex'}}>
                    <form className='form' onSubmit={this.addTask}>
                        <div className='label'>New Task:</div>
                        <input type='text' onChange={this.handleChange} /> <br />
                        <button type='submit'>Add</button>
                    </form>

                    <form className='form' onSubmit={this.updateTask}>
                        <div className='label'>Click "Update" to fake-update the first task.</div>
                        <button type='submit'>Update</button>
                    </form>

                    <form className='form' onSubmit={this.deleteTask}>
                        <div className='label'>
                            Click "Delete" to fake-delete the first task.
                        </div>
                        <button type='submit'>Delete</button>
                    </form>
                </div>

                {this.state.todos.map(todo =>
                    <div key={todo.id} className='todo'>
                        <input type='checkbox' className='checkbox' checked={todo.completed} onChange={this.togglecheckbox} />
                        <div className='task'>
                            {todo.title.charAt(0).toUpperCase() + todo.title.slice(1)}
                        </div>
                    </div>
                )}
            </div>
        );
    }
}