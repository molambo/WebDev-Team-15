import React from 'react';
import {faPlug} from "../../node_modules/@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '../../node_modules/@fortawesome/react-fontawesome';
import './PluggedInPrototype.css'

export class PluggedInPrototype extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }

    }

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
