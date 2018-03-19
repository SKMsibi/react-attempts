import React from 'react';
import Settings from './settings'
import { Link } from 'react-router-dom'
export default class Layout extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>this is layout</h1>
                <Link to="archives">archives</Link>
                <Link to="settings">settings</Link>

            </div>
        )
    }
} 