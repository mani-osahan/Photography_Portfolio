import './App.css';
import sample from './sample.jpeg'
import React from 'react'
import instagram from './instagram.png'
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Gear from "./Gear"

class Index extends React.Component {

    render() {

        return (
            <Router>

                <html>

                <header className="menu">

                    <div className="logo">
                        <a href="#">
                            <h1>Manipal Osahan</h1>

                        </a>

                    </div>

                    <div className="nav">


                            <ul>
                                <li><a className="linkAnim" href="/">PORTFOLIO</a></li>
                                <li><a className="linkAnim" href="/presets">PRESETS</a></li>
                                <li><a className="linkAnim" href="/gear">GEAR</a></li>
                                <li><a className="linkAnim" href="/about">ABOUT</a></li>
                                <li><a className="linkAnim" href="/"><img className="instaicon" alt='' src={instagram}/></a>

                                </li>
                            </ul>



                    </div>

                    <div className="top_main">
                        <img src={sample} alt="sample"/>
                    </div>

                </header>

                <body className="body">


                <h3>Welcome to my portfolio</h3>
                <p>Click here to view my portfolio</p>
                <nav>
                <li><Link to="/gear">gear</Link></li>
                </nav>



                </body>


                <footer className="footer">


                </footer>


                </html>
            </Router>
        )
    }
}


export default Index;
