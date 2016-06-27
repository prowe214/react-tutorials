import React from 'react';

export default class Article extends React.Component {
    render () {
        const { title } = this.props;

        return (
            <div class="col-md-4">
                <h2>{title}</h2>
                <p>Nullam quis risus eget <a href="#">urna mollis ornare</a> vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>
                <a class="btn btn-default" href="#">More things</a>
            </div>
        )
    }
}
