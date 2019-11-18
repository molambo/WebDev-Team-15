import React from 'react';
import '../css/VideoDetailsComponent.css'

export default class VideoDetailsComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.video.items[0].snippet.title !== '' &&
                <div className="container wbdv-details">
                    <h3>{this.props.video.items[0].snippet.title}</h3>
                    <img src={this.props.video.items[0].snippet.thumbnails.high.url}/>
                    <h5>Artist: {this.props.video.items[0].snippet.channelTitle}</h5>
                    <h6>Published: {this.props.video.items[0].snippet.publishedAt.toString().substring(0, 10)}</h6>
                    <h6>Description: {this.props.video.items[0].snippet.description}</h6>
                </div>
                }
            </div>
        )
    }
}
