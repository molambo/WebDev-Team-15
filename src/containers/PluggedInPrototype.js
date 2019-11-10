import React from 'react';
import {faPlug} from "../../node_modules/@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '../../node_modules/@fortawesome/react-fontawesome';
import './PluggedInPrototype.css'
import './../config'

export class PluggedInPrototype extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            videos: [],
            video: {
                title: '',
                description: ''
            }
        }
    }
    componentDidMount() {
        console.log("Component Did Mount")
        // this.findMovieByTitle("batman")
    }

    // createReview = review =>
    //     fetch("http://localhost:8080/api/reviews", {
    //         method: 'post',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(review)
    //     }).then(response => response.json())
    //         .then(review => console.log(review))

    searchVideo = searchTitleChanged =>
        this.findVideoByTitle(searchTitleChanged)

    findVideoByTitle = title =>
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchphrase}&type=video&key=&AIzaSyDzAog-ZQbUDu3qB2I0JCoyleKhfguoVNs`)
            .then(response => response.json())
            .then(response => {
                console.log(response.Search)
                this.setState({
                    videos: response.Search
                })
            })

    selectVideo = imdbID =>
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchphrase}&type=video&key=&AIzaSyDzAog-ZQbUDu3qB2I0JCoyleKhfguoVNs`)
            .then(response => response.json())
            .then(video => {
                console.log(video)
                this.setState({
                    video: video
                })

                // fetch(`http://localhost:8080/api/review/${imdbID}`)
                //     .then(response => response.json())
                //     .then(review => {
                //         console.log(review)
                //         this.setState({
                //             review: review
                //         })
                //     })

            })

    render() {
        return(
          <body>
            <nav className="wbdv-nav">
                <a href="../index.html">Back</a>
            </nav>
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
                    <div className="col-12">
                        <div className="wbdv-search">
                            <input type="text" className="form-control wbdv-search-bar" id="search-bar" placeholder="Search" />
                        </div>
                    </div>
                </div>
            </div>
        </body>

        )
    }
}
