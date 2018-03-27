import React from 'react';
import Heading from './heading';
import Table from './table';
import TableRow from './table-row';
import { Link } from 'react-router-dom';
import '../index.css';
import axios from 'axios';

export default class MainLayout extends React.Component {
    constructor() {
        super();
        this.state = { all: [] };
        this
    }
    componentDidMount() {
        axios.get(`https://fcctop100.herokuapp.com/api/fccusers/top/recent`)
            .then(res => {
                this.setState({ all: res.data });
            })
    }
    render() {
        return (
            <div>
                <Heading />
                <Link to="allTimeData"><button>All time data (sorted)</button></Link>
                <table border="3">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Points in 30 days</th>
                            <th>Points in all time</th>
                        </tr>
                    </thead>
                    <tbody>{this.state.all.map(element => {
                        return < TableRow hint={element.username} hint2={element.recent} hint3={element.alltime} image={element.img} num={this.state.all.indexOf(element) + 1} />
                    })}</tbody>
                </table>
            </div>

        )
    }
}