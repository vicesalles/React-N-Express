import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

//Components
import Header from './Header';

//dumy components for router

const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>




class App extends Component {
    render() {
        return (<div>
            <Switch>
                <Header/>
                <Route exact path="/" component={Landing} />
                <Route exact path="/surveys" component={Dashboard} />
                <Route path="/surveys/new" component={SurveyNew} />
            </Switch>
        </div>)
    }
}

export default App;