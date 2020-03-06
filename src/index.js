import React from 'react';
import ReactDOM from 'react-dom';
import SeasonsDisplay from './SeasonsDisplay';
import Loading from './Loading';



class App extends React.Component {


    state = {lat:null, error: ''};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude}),
            (err) => this.setState({ error: err.message})
        );
        
    }

    componentDidUpdate(){
        console.log('update ho gaya');
    }

    render(){
        if(this.state.error && !this.state.lat){
            return <div>Error : {this.state.error} </div>
        }
        if(this.state.lat && !this.state.error){
            return <SeasonsDisplay lat={this.state.lat} />
        }
        return <div><Loading/></div>

    }
 
}

ReactDOM.render (<App/>, document.querySelector('#root'));