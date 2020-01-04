import React, { Component } from 'react';
import Tour from '../Tour';
import './tourlist.scss';
import {tourData} from '../../tourData';

export default class TourList extends Component {
    state = {
        tours: tourData
    };
    removeTour = id => {
        console.log(id);
    }
    render() {
        //console.log(this.state.tours);
        return (
            <div>
                <h1>Hello from TourList</h1>
                <Tour/>
            </div>
        )
    }
}
