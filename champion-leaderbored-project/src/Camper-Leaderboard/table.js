import React from 'react';
import TableRow from './table-row';

export default class Table extends React.Component {
    render() {
        return (
            <table>
                <TableRow data={this.props} />
            </table>
        )
    }
}