import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Stripe from './Stripe';

class Header extends Component {

    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (<li><a href="/auth/linkedin">Login with Linkedin</a></li>
                );

            //User is logged
            default:
                return [
                <li key="credits"><b>Credits </b>{this.props.auth.credits}</li>,
                <li key="logout"><a href="/api/logout">Logout</a></li>,
                <li key="stripe"><Stripe/></li>
            ];
        }
    }

    render() {

        return (<nav>
            <div className="nav-wrapper">
                <Link to={this.props.auth ? "/surveys" : "/"} className="brand-logo left">Emailejador</Link>
                <ul className="right hide-on-med-and-down">
                    {this.renderContent()}
                </ul>
            </div>
        </nav>);
    }
}

function mapStateToProps({ auth }) {
    return { auth }
}

export default withRouter(connect(mapStateToProps)(Header));


//<li><a href="/auth/linkedin">Login with Linkedin</a></li>                
