import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

//Components
import Header from './Header';
import Landing from './Landing';

//Actions
import * as actions from '../state/actions';

//dumy components for router

const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>





class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    render() {
        return (<div className="container">
            <Header />
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/surveys" component={Dashboard} />
                <Route path="/surveys/new" component={SurveyNew} />
            </Switch>
        </div>)
    }
}

//second argument passes all the actions to component Props
export default withRouter(connect(null, actions)(App));