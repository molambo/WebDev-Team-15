import React from 'react';
import './VideoDetailsComponent.css'

export default class VideoDetailsComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.video.title != '' &&
                <div className="container wbdv-details">
                    <h3>{this.props.video.title}</h3>
                    <img className="wbdv-video-thumbnail"
                         src={this.props.video.thumbnail}/>
                    <h5>Artist: {this.props.video.artist}</h5>
                    <h6>Published: {this.props.video.date.toString().substring(0, 10)}</h6>
                    <h6>Description: {this.props.video.description}</h6>
                </div>
                }
            </div>
        )
    }
}