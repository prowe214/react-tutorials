import React from 'react';

export default class Layout extends React.Component {
    render () {
        return (
            <div class="container">
                <h1>HELLO</h1>
                {this.props.children}
            </div>
        )
    }
}
