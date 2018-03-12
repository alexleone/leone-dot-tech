import React, {Component} from "react";
// import { Link } from "react-router-dom";
// import {PageHeader, ListGroup, ListGroupItem} from "react-bootstrap";
import {invokeApig} from '../libs/awsLib';
import "./Profile.css";

export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            profile: null
        };
    }

    async componentDidMount() {
        if (!this.props.isAuthenticated) {
            return;
        }

        try {
            const results = await this.profile();
            this.setState({profile: results});
        } catch (e) {
            alert(e);
        }

        this.setState({isLoading: false});
    }

    profile() {
        return invokeApig({path: "/profile"});
    }

    render() {
        return (
            <div className="Profile">
                <h2>Profile</h2>
                <hr />

            </div>
        );
    }
}