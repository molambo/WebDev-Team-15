import React, {Component} from 'react'

export default class VideoListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchChannel: ''
        }
    }

    searchChannelChanged = event =>
        this.setState({
            searchChannel: event.target.value
        });


}