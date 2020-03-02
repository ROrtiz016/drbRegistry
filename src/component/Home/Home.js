import React,{Component} from 'react';
import './Home.css'
import justice from "../../pictures/lady-justice-vector-logo.png"
import {Link} from 'react-router-dom';

class Home extends Component{

    render(){
        return(
            <div>
                <img src={justice} className="lady-justice-image" alt="Justice"/>
                <div className="start-button-div">
                    <button className="start-button"><Link to="/registry">Start</Link></button>
                </div>
                
            </div>
        )
    }
}

export default Home;