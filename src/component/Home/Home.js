import React,{Component} from 'react';
import './Home.css'
import justice from "../../pictures/lady-justice-vector-logo.png"
import {Link} from 'react-router-dom';

class Home extends Component{

    render(){
        return(
            <div>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
                <img src={justice} className="lady-justice-image" alt="Justice"/>
                <div className="start-button-div">
                    <button className="start-button"><Link to="/registry">Start</Link></button>
                </div>
                
            </div>
        )
    }
}

export default Home;