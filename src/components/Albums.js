import React, { Component } from 'react';
import axios from 'axios';
import folder from '../folder.png';

export default class Albums extends Component {
    state = {
        albums: [],

        title: ''
    };

    async componentDidMount() {
        let res = await axios.get(`https://jsonplaceholder.typicode.com/albums`);
        this.setState({ albums: res.data });
    };

    handleChange = e => this.setState({ title: e.target.value });

    handleSubmit = e => {
        e.preventDefault();

        const newAlbum = {
            userId: 1000,
            id: 1000,
            title: this.state.title
        };

        axios
            .post(`https://jsonplaceholder.typicode.com/albums`, {newAlbum})
            .then(res => console.log(res.data));
    };

    updateAlbum = e => {
        e.preventDefault();

        const data = {
            'userId': '1',
            'id': '1',
            'title': 'Post 1 Updated Title',
        };

          axios.put('https://jsonplaceholder.typicode.com/albums/1', data)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    };

    deleteAlbum = e => {
        e.preventDefault();

        axios
            .delete(`https://jsonplaceholder.typicode.com/albums/1`)
            .then(res => console.log(res.data));
    };

    render() {
        return (
            <div>
                <div className='header'>Albums</div>

                <div style={{display: 'flex'}}>
                    <form className='form' onSubmit={this.handleSubmit}>
                        <div className='label'>New Album Title:</div>
                        <input type='text' name='title' onChange={this.handleChange} /> <br />
                        <button type='submit'>Add</button>
                    </form>

                    <form className='form' onSubmit={this.updateAlbum}>
                        <div className='label'>Click "Update" to update the first album.</div>
                        <button type='submit'>Update</button>
                    </form>

                    <form className='form' onSubmit={this.deleteAlbum}>
                        <div className='label'>
                            Click "Delete" to fake-delete the first album.
                        </div>
                        <button type='submit'>Delete</button>
                    </form>
                </div>

                {this.state.albums.map(album =>
                    <div key={album.id} className='album'>
                        <img src={folder} alt='folder' className='folder' />
                        <div className='title'>{album.title}</div>
                    </div>
                )}
            </div>
        );
    }
}