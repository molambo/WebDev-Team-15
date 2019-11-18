import React from 'react'

import '../css/ChannelListComponent.css'

export default class ChannelListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTitle: ''
        }
    }

    searchTitleChanged = event =>
        this.setState({
            searchTitle: event.target.value
        });

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
                        onClick={() => this.props.searchChannel(this.state.searchTitle)}
                        className="btn btn-primary wbdv-search-btn ">Search
                    </button>
                </div>
                {
                    this.props.channels && this.props.channels.map(channel =>
                        <div onClick={() =>
                            this.props.selectChannel(channel.id.channelId)}
                             className="list-group-item row"
                             key={channel.id.channelId}>
                            <div className="row wbdv-channel-row">
                                <img className="wbdv-channel-thumbnail" src={channel.snippet.thumbnails.high.url}/>
                                <div className="wbdv-channel-info">
                                    <a className="wbdv-channel-title"> {channel.snippet.title}</a>&nbsp;by&nbsp;
                                    <a className="wbdv-channel-name">{channel.snippet.channelTitle}</a>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>)
    }
}
