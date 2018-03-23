import React from 'react';
export default class TableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.num}</td>
                <td> <a href={"https://freecodecamp.com/" + this.props.hint}><img src={this.props.image} style={{ width: 50, height: 50 }} />{this.props.hint}</a></td>
                <td>{this.props.hint2}</td>
                <td>{this.props.hint3}</td>
            </tr >
        )
    }
}