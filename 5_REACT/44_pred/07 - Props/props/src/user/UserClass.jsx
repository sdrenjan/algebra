import React from 'react';

export default class UserClass extends React.Component {
    render() {
        const { name, years, job} = this.props;
        return (
            <p>
                Pozdrav, moje ime je {name} i imam {years} godina.
                <br />
      Radim kao {job}
            </p>
        );
    }
}

UserClass.defaultProps = {
    job: 'unemployed'
}