import React from 'react';
import './self.css';
import image from './img/filler.jpg';

export class Self extends React.Component {
    render() {
        return (
            <img src={image} className="self" alt="self" />
        );
    }
}