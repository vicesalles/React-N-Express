import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

class Header extends Component {

    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (<li><a href="/auth/linkedin">Login with Linkedin</a></li>
                );
            default:
                return (<li><a href="/api/logout">Logout</a></li>
                );
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
