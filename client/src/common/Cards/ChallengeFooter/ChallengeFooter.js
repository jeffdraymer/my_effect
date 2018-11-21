import React, { Component } from 'react';
import PropTypes from 'prop-types';

//import styles 
import './styles.css';

class ChallengeFooter extends Component {

    //create an i tag for any icon classes which are passed in
    hostItem = (host, i) => (
        <div key={i} className="host">
            <img key={i} src={host.image} alt={host.alt} />
            {host.name}
        </div>
    );

    render() {
        const { description } = this.props;
        //map through all the icons which were passed in as props
        const hosts = this.props.hosts.map(this.hostItem);

        return (
            <div className="challenge-footer">
                <div className="row description">
                    {description}
                </div>
                <div className="row hosted-by">
                    <p>Hosted by:</p>
                </div>
                <div className="row hosts">
                    {hosts}
                </div>
            </div>
        )
    }
};

ChallengeFooter.propTypes = {
    hosts: PropTypes.array.isRequired,
    description: PropTypes.string.isRequired
}

export default ChallengeFooter;



