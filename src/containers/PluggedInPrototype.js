import React from 'react';
import {faPlug} from "../../node_modules/@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '../../node_modules/@fortawesome/react-fontawesome';
import './PluggedInPrototype.css'
import './../config'
import VideoListComponent from "../components/VideoListComponent"
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import VideoDetailsComponent from "../components/VideoDetailsComponent";

export class PluggedInPrototype extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            videos: [],
            video: {
                title: '',
                description: '',
                artist: ''
            }
        }
    }

    componentDidMount() {
        this.findVideoByTitle("adele")
    }

    searchVideo = searchTitleChanged =>
        this.findVideoByTitle(searchTitleChanged)

    findVideoByTitle = searchphrase =>
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchphrase}&type=video&key=AIzaSyDzAog-ZQbUDu3qB2I0JCoyleKhfguoVNs`)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    videos: response.items
                })
            });

    selectVideo = (title, artist, description, thumbnail, date) =>
        this.setState({
            video: {
                title: title,
                description: description,
                artist: artist,
                thumbnail: thumbnail,
                date: date
            }
        });

    render() {
        return (
            <body>
            {/*<nav className="wbdv-nav">*/}
            {/*    <a href="../index.html">Home</a>*/}
            {/*</nav>*/}
            <div className="wbdv-header">
                <div className="row">
                    <div className="col-12">
                        <div className="wbdv-logo">
                            <h1 className="wbdv-title">PluggedIn
                                <FontAwesomeIcon icon={faPlug}
                                                 className="fa fa-plug fa-lg wbdv-icon"/>
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <Router>
                        <div className="col-6 wbdv-video-list">
                            <VideoListComponent
                                selectVideo={this.selectVideo}
                                searchVideo={this.searchVideo}
                                videos={this.state.videos}/>
                        </div>

                        <div className="col-6 wbdv-video-details">
                            <VideoDetailsComponent
                                video={this.state.video}/>
                        </div>
                    </Router>
                </div>
            </div>
            </body>

        )
    }
}
