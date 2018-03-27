import React from 'react';

export default class Item extends React.Component {
    
    render() {
        console.log("data", this.props)
        return (
            <div>
                <button>{this.props.item}</button>
                {this.props.product.map(element => { return <ul>{element}</ul> })}
            </div>
        )
    }
}