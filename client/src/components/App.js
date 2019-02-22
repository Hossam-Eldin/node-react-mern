import React,{Component} from 'react'
import { BrowserRouter, Route} from 'react-router-dom'
import Header from './Header'
import Landing from './Landing'
import {connect} from 'react-redux'
import * as actions from '../actions'
import Dash from './Dash'
import SurveyNew from './surveys/surveyNew'


class App extends Component{

    componentDidMount(){
        this.props.fetchUser();        
    }


   render() {
    return(
        <div className="container">
               <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact={true} path="/" component={Landing} />
                        <Route path="/dash" component={Dash} />
                        <Route  path="/survey" component={SurveyNew} />
                    </div>
               </BrowserRouter> 
        </div>
    )
   }
};


export default connect(null, actions)(App);