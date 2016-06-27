import React from 'react';
import { Link } from 'react-router';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default class Layout extends React.Component {
    navigate() {
        this.props.history.replaceState(null, '/');
    }
    render () {
        const { location } = this.props;
        const containerStyle = {
            marginTop: "30px"
        };

        return (
            <div>
                <Navbar location={location}/>

                <div class="container" style={containerStyle}>
                    <div class="row">
                        <div class="col-lg-12">
                            <h1>REACT</h1>

                            {this.props.children}

                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
