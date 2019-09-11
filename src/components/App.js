import React, { Component } from 'react';
import social from '../api/social.json';
import Card from './Card';

class App extends Component {
    render() {
        const { list } = social;
        console.log(list);
        return (
            <React.Fragment>
                <h1 className="app-title">Sliding Cards</h1>
                <div className="container">
                    {list.map(item => {
                        return <Card key={item.id} item={item} />
                    })}
                </div>
            </React.Fragment>
        )
    }
}

export default App;
