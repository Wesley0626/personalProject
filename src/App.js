import React from 'react';
import './reset.css'
import './App.css';
import Header from "./Components/Header"
import routes from './routes'
import Footer from './Components/Footer'
import {connect} from 'react-redux'

function App(props) {
  return (
    <div className="App">
      {props.user.loggedIn ? (
       <div>
         <Header />
         {routes}
         <Footer id="footer" />
       </div>
      ) : (
       <div>
         <Header />
         {routes}
       </div> 
      )
      }
    </div>
  );
}

function mapStateToProps(state){
  return state.user
}

export default connect(mapStateToProps)(App);
