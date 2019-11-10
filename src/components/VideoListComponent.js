import React from 'react'

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
        return(<div>
            <ul className="list-group">
                <li className="list-group-item">
                    <input
                        onChange={this.searchTitleChanged}
                        value={this.state.searchTitle}
                        className="form-control"
                        placeholder="Search for music and artists"/>
                    <button
                        onClick={() => this.props.searchVideo(this.state.searchTitle)}
                        className="btn btn-primary">Search</button>
                </li>
                {
                    this.props.videos && this.props.videos.map(video =>
                        <li onClick={() => this.props.selectVideo(video.imdbID)}
                            className="list-group-item text-left"
                            key={video.id.videoId}>
                            <img height="40px" src={video.snippet.thumbnails.high.url}/>
                            &nbsp; &nbsp;
                            {video.snippet.title}

                        </li>
                    )
                }
            </ul>
        </div>)
    }
}
