import React, { Component } from 'react';

class Card extends Component {
    render() {
        const { item } = this.props
        console.log(item);
        return (
            <div className="card">
                <div className="face face-title">
                    <div className="content">
                        <img className="item-icon" src={item.icon} alt={item.name} />
                        <h3 className="item-name">{item.name}</h3>
                    </div>
                </div>
                <div className="face face-content">
                    <div className="content">
                        <p className="item-description">{item.description}</p>
                        <a className="item-link" href={item.link}>Learn More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;
