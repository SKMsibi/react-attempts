import React from 'react';
export default class TableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.data.username}</td>
                <td>{this.props.data.alltime}</td>
            </tr>
        )
    }
}