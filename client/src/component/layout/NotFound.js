import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {notFound} from '../../actions/errorAction';

class NotFound extends Component {
    state = {
        isNotFound: true
    }

    componentDidMount(){
        this.setState({
            isNotFound: true
        })
        this.props.notFound(true)
    }

    componentWillUnmount(){
        this.setState({
            isNotFound: false
        })
        this.props.notFound(false);
    }
    
    render(){
      return (
        <div className="NotFound">
            <img src="/img/PageNotFound.png" className="img-notFound" alt="404 page not found" style={{width: 600, height: 400, display: 'block', margin: 'auto', position: 'relative' }}/>
            <div>
             <Link to="/">Return to Home Page</Link>
            </div>  
          
        </div> 
        )
    }
}

export default connect(null, {notFound})(NotFound);