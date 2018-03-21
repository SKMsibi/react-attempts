import React from 'react';
export default class TableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.num}</td>
                <td><img src={this.props.image} style={{ width: 25, height: 25 }} />{this.props.hint}</td>
                <td>{this.props.hint2}</td>
                <td>{this.props.hint3}</td>
            </tr>
        )
    }
}