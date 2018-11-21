import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ActionFooter from './ActionFooter/ActionFooter';
import ChallengeFooter from './ChallengeFooter/ChallengeFooter';
import CircularProgressbar from 'react-circular-progressbar';

import Caregiving from '../../img/Impact Tallies/caregiving_hours.png';

//import styles
import 'react-circular-progressbar/dist/styles.css';
import './styles.css';

class Card extends Component {

    render() {
        const { image,
            alt,
            emblem,
            target,
            current,
            caption,
            description,
            icons,
            from,
            to,
            title,
            type,
            hosts } = this.props;

        const percentage = (current / target * 100)

        return (
            <div className="card">
                <div className="row header" >
                    {/*Icon with goal counter*/}
                    <div className="col-5 blue target-counter">
                        {type === 'challenge'
                            ? (<div><img src={Caregiving} alt="Caregiving" className="caregiving" />{current}/{target}</div>)
                            : (<div><div className="card-icon"><i className="fas fa-users" /></div><div>{current}/{target}</div> </div>)}

                    </div>

                    {/*Image*/}
                    <div>
                        <div className="progressbar">
                            <CircularProgressbar percentage={percentage} />
                        </div>

                        <img className="card-image" src={image} alt={alt} />
                    </div>

                    {/*Emblem*/}
                    <div className="col-5 emblem">
                        <img src={emblem} alt="emblem" />
                    </div>
                </div>

                {/*Text body*/}
                <div className="caption">
                    <div>{caption}</div>

                </div>

                <div className="row">
                    <div className="col-12">
                        {/*Action/Challenge footer*/}
                        {type === "challenge"
                            ? <ChallengeFooter hosts={hosts} description={description} />
                            : <ActionFooter icons={icons} from={from} to={to} title={title} />}
                    </div>
                </div>

            </div>
        );
    }

};

Card.propTypes = {
    image: PropTypes.string.isRequired,
    emblem: PropTypes.string.isRequired,
    target: PropTypes.number.isRequired,
    current: PropTypes.number.isRequired,
    caption: PropTypes.string.isRequired,
    description: PropTypes.string,
    type: PropTypes.string.isRequired,
    icons: PropTypes.array,
    from: PropTypes.string,
    to: PropTypes.string,
    title: PropTypes.string,
    hosts: PropTypes.array
}

export default Card;
