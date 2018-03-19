import React from 'react';
import TableRow from './table-row';

export default class Table extends React.Component {
    render() {
        return (
            <table>
                <tr>
                    <td>{this.props.data.username}</td>
                    <td>{this.props.data.points}</td>
                </tr>
            </table>
        )
    }
}