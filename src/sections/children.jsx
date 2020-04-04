import React, { Component } from 'react';

class Box extends Component {
    render() {
        return (
            <div style={{ border: '1px solid #0DF866',borderRadius: '10rem' , margin:5, padding: 5, color: '#00ACCB'}}>
                { this.props.children }
            </div>
        );
    }
}

export default Box;