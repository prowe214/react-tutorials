import React from 'react';

export default class Todo extends React.Component {
    render () {
        const { complete, edit, text } = this.props;
        const icon = complete ? 'Yup' : 'Nope';

        if (edit) {
            return (
                <li>
                    <input value={text} focus="focused" />
                </li>
            );
        }

        return (
            <li>
                <span>{text}</span>
                <span>{icon}</span>
            </li>
        );
    }
}
