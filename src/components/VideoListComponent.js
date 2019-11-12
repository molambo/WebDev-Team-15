import React from 'react'

import './VideoListComponent.css'

export default class VideoListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTitle: ''
        }
    }

    searchTitleChanged = event =>
        this.setState({
            searchTitle: event.target.value
        })

    render() {
        return (<div>
            <div className="list-group">
                <div className="list-group-item form-inline row">
                    <input
                        onChange={this.searchTitleChanged}
                        value={this.state.searchTitle}
                        className="form-control wbdv-video-searchbar "
                        placeholder="Search for artists"/>
                    <button
                        onClick={() => this.props.searchVideo(this.state.searchTitle)}
                        className="btn btn-primary wbdv-search-btn ">Search
                    </button>
                </div>
                {
                    this.props.videos && this.props.videos.map(video =>
                        <div onClick={() =>
                            this.props.selectVideo(video.id.videoId)}
                             className="list-group-item row"
                             key={video.id.videoId}>
                            <div className="row wbdv-video-row">
                                <img className="wbdv-video-thumbnail" src={video.snippet.thumbnails.high.url}/>
                                <div className="wbdv-video-info">
                                    <a className="wbdv-video-title"> {video.snippet.title}</a>&nbsp;by&nbsp;
                                    <a className="wbdv-channel-name">{video.snippet.channelTitle}</a>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>)
    }
}
