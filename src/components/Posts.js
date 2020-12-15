import React, { Component } from 'react';
import axios from 'axios';

export default class Posts extends Component {
    state = {
        posts: [],
        title: '',
        post: '',
    };

    async componentDidMount() {
        let res = await axios.get(`https://jsonplaceholder.typicode.com/posts/`);
        this.setState({ posts: res.data });
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    addPost = e => {
        e.preventDefault();

        const newPost = {
            userId: 1000,
            id: 1000,
            title: this.state.title,
            body: this.state.post
        };

        axios
            .post(`https://jsonplaceholder.typicode.com/posts/`, {newPost})
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    };

    updatePost = e => {
        e.preventDefault();

        const postToUpdate = {
            'userId': '1',
            'id': '1',
            'title': 'Post 1 Updated Title',
            'body': "Post 1 Updated Blog Post"
        };

          axios
            .put('https://jsonplaceholder.typicode.com/posts/1', {postToUpdate})
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    };

    deletePost = e => {
        e.preventDefault();

        const postToDelete = {
            'userId': '1',
            'id': '1',
            'title': "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            'body': "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        };

        axios
            .delete(`https://jsonplaceholder.typicode.com/posts/1`, {postToDelete})
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>                
                <div className='header'>Posts</div>

                <div style={{display: 'flex'}}>
                    <form className='form' onSubmit={this.addPost}>
                        <div className='label'>New Post:</div>
                        <input type='text' name='title' onChange={this.handleChange} /> <br />
                        <textarea name='post' onChange={this.handleChange} /> <br/>
                        <button type='submit'>Add</button>
                    </form>

                    <form className='form' onSubmit={this.updatePost}>
                        <div className='label'>Click "Update" to fake-update the first post.</div>
                        <button type='submit'>Update</button>
                    </form>

                    <form className='form' onSubmit={this.deletePost}>
                        <div className='label'>
                            Click "Delete" to fake-delete the first post.
                        </div>
                        <button type='submit'>Delete</button>
                    </form>
                </div>

                {this.state.posts.map(post =>
                    <div key={post.id} className='post'>
                        <div className='title'>{post.title}</div>
                        <div className='body'>
                            {post.body.charAt(0).toUpperCase() + post.body.slice(1)}
                        </div>
                    </div>
                )}
            </div>
        );        
    }
}