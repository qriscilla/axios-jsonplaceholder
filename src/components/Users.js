import React, { Component } from 'react';
import axios from 'axios';
import person from '../person.png';

export default class Users extends Component {
    state = {
        users: [],

        name: '',
        username: '',
        email: '',
        phone: '',
    };

    async componentDidMount() {
        let res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
        this.setState({ users: res.data });
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    handleSubmit = e => {
        e.preventDefault();

        const newUser = {
            id: 1000,
            name: this.state.name,
            username: this.state.username,
            email: this.state.email,
            phone: this.state.phone,
            address: {}
        };

        axios
            .post(`https://jsonplaceholder.typicode.com/users`, {newUser})
            .then(res => console.log(res.data));
    };

    updateUser = e => {
        e.preventDefault();

        const data = {
            'id': 1,
            'name': 'User 1 Updated name',
            'username': 'User 1 updated username',
            'email': 'User 1 updated email',
            'phone': 'User 1 updated phone number',
            'address': 'User 1 updated address'
        };

          axios.put('https://jsonplaceholder.typicode.com/users/1', data)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    };

    deleteUser = e => {
        e.preventDefault();

        axios
            .delete(`https://jsonplaceholder.typicode.com/users/1`)
            .then(res => console.log(res.data));
    };

    render() {
        return (
            <div>
                <div className='header'>Users</div>

                <div style={{display: 'flex'}}>
                    <form className='form' onSubmit={this.handleSubmit}>
                        <div className='label'>New users</div>
                        <div className='label'>Name</div>
                        <input type='text' name='name' onChange={this.handleChange} />
                        <div className='label'>Username</div>
                        <input type='text' name='username' onChange={this.handleChange} />
                        <div className='label'>eMail</div>
                        <input type='email' name='email' onChange={this.handleChange} />
                        <div className='label'>Phone</div>
                        <input type='phone' name='phone' onChange={this.handleChange} /> <br />

                        <button type='submit'>Add</button>
                    </form>

                    <form className='form' onSubmit={this.updateUser}>
                        <div className='label'>Click "Update" to update the first user.</div>
                        <button type='submit'>Update</button>
                    </form>

                    <form className='form' onSubmit={this.deleteUser}>
                        <div className='label'>
                            Click "Delete" to fake-delete the first user.
                        </div>
                        <button type='submit'>Delete</button>
                    </form>
                </div>

                {this.state.users.map(user =>
                    <div key={user.id} className='user'>
                        <img src={person} alt='person' className='person' />
                        <div className='info'>
                            <div><span className='header'>Name:</span>{user.name}</div>
                            <div><span className='header'>Username:</span>{user.username}</div>
                        </div>
                        <div className='contact'>
                            <div><span className='header'>eMail:</span>{user.email}</div>
                            <div><span className='header'>Phone:</span>{user.phone}</div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}