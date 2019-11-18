import React, {Component} from 'react';
import '../css/ChannelDetailsComponent.css'

export default class ChannelDetailsComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.channel.items[0].snippet.title !== '' &&
                <div className="container wbdv-details">
                    <h3>{this.props.channel.items[0].snippet.title}</h3>
                    <img src={this.props.channel.items[0].snippet.thumbnails.high.url}/>
                    <h5>Artist: {this.props.channel.items[0].snippet.channelTitle}</h5>
                    <h6>Description: {this.props.channel.items[0].snippet.description}</h6>
                </div>
                }
            </div>
        )
    }
}
