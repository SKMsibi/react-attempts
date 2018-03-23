import React from 'react'

export default class Table extends React.Component {
    render() {
        console.log("this.props", this.props)
        return (
            <table>
                <tr>
                    <th>Name</th>
                    <td>{this.props.data.Name}</td>
                </tr>
                <tr>
                    <th>Surname</th>
                    <td>{this.props.data.Surname}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>{this.props.data.Email}</td>
                </tr>
            </table>

        )
    }
}