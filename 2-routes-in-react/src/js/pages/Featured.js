import React from 'react';

import Article from '../components/Article';

export default class Featured extends React.Component {
    render () {
        const Articles = [
            "Some Article 1",
            "Some Article 2",
            "Some Article 3",
            "Some Article 4",
            "Some Article 5",
        ].map((title, i) =>
            <Article
                key={i}
                title={title} />);

        return (
            <div>
                <div class="row">
                    {Articles}
                </div>
            </div>
        );
    }
}
