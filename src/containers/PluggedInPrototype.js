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
<<<<<<< HEAD
            // videos: [],
            // video: {
            //     title: '',
            //     description: ''
            // },
            channels: [],
            channel: {
                username:'',
                //...
            }
=======
          videos: [],
          video: {
              items:
              [{
                snippet: {
                  title: '',
                  description: '',
                  thumbnails: {
                    high: ''
                  },
                  publishedAt: ''
                }

              }]
          }
>>>>>>> fd3085f4257bc8be751f5dd36fc450fb85c60d93
        }
    }

    componentDidMount() {
        this.findVideoByTitle("adele").then(r => r.json);
        this.findChannelByName("adele").then(r => r.json);
    }

<<<<<<< HEAD
    // createReview = review =>
    //     fetch("http://localhost:8080/api/reviews", {
    //         method: 'post',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(review)
    //     }).then(response => response.json())
    //         .then(review => console.log(review))

    searchChannel = searchTitleChanged =>
        this.findChannelByName(searchTitleChanged);
=======
    searchVideo = searchTitleChanged =>
        this.findVideoByTitle(searchTitleChanged)
>>>>>>> fd3085f4257bc8be751f5dd36fc450fb85c60d93

    findChannelByName = searchphrase  =>
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchphrase}
        &type=video&key=AIzaSyDzAog-ZQbUDu3qB2I0JCoyleKhfguoVNs`)
            .then(response => response.json())
            .then(response => {
<<<<<<< HEAD
                console.log(response.items);
=======
>>>>>>> fd3085f4257bc8be751f5dd36fc450fb85c60d93
                this.setState({
                    channels: response.items
                })
            });
<<<<<<< HEAD


    selectChannel = searchphrase =>
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchphrase}
        &type=video&key=AIzaSyDzAog-ZQbUDu3qB2I0JCoyleKhfguoVNs`)
            .then(response => response.json())
            .then(video => {
                console.log(video)
                this.setState({
                    video: video
                })


    //
    // searchVideo = searchTitleChanged =>
    //     this.findVideoByTitle(searchTitleChanged);
    //
    // findVideoByTitle = searchphrase =>
    //     fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchphrase}
    //     &type=video&key=AIzaSyDzAog-ZQbUDu3qB2I0JCoyleKhfguoVNs`)
    //         .then(response => response.json())
    //         .then(response => {
    //           console.log(response.items)
    //             this.setState({
    //                 videos: response.items
    //             })
    //         });
    //
    // selectVideo = searchphrase =>
    //     fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchphrase}
    //     &type=video&key=AIzaSyDzAog-ZQbUDu3qB2I0JCoyleKhfguoVNs`)
    //         .then(response => response.json())
    //         .then(video => {
    //             console.log(video)
    //             this.setState({
    //                 video: video
    //             })

                // fetch(`http://localhost:8080/api/review/${imdbID}`)
                //     .then(response => response.json())
                //     .then(review => {
                //         console.log(review)
                //         this.setState({
                //             review: review
                //         })
                //     })

            });
=======

            selectVideo = videoId =>
                fetch(`https://www.googleapis.com/youtube/v3/videos?&part=snippet&key=AIzaSyDzAog-ZQbUDu3qB2I0JCoyleKhfguoVNs&id=${videoId}`)
                    .then(response => response.json())
                    .then(video => {
                      console.log(video.items[0])
                        this.setState({
                            video: video
                        })
                      })
>>>>>>> fd3085f4257bc8be751f5dd36fc450fb85c60d93

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
<<<<<<< HEAD
                    <div className="col-xl-6">
                        <VideoListComponent
                            selectVideo={this.selectChannel}
                            searchVideo={this.searchChannel}
                            videos={this.state.channels}/>
                    </div>
=======
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
>>>>>>> fd3085f4257bc8be751f5dd36fc450fb85c60d93
                </div>
            </div>
            </body>

        )
    }
}
