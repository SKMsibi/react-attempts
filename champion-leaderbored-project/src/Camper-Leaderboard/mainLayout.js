import React from 'react';
import Heading from './heading';
import Table from './table';
import axios from 'axios';

export default class MainLayout extends React.Component {
    constructor() {
        super();
        this.state = { name: "", points: 0, data: [] }
    }
    componentDidMount() {
        axios.get(`https://fcctop100.herokuapp.com/api/fccusers/top/alltime`)
            .then(res => {
                console.log(res)
                this.setState({ data: res });
                this.state.data.forEach(function (element) {
                    return <Table username={element.username} points={element.alltime} />
                })
            })
    }
    render() {
        var allData = this.componentDidMount();
        return (
            <div>
                <Heading />
                {allData}
            </div>
        )
    }
}