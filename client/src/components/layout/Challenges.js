import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Import Components
import Card from '../../common/Cards/Card';

//import images
import LoveYourPark from '../../img/Love your park day img.png';
import Mitzvag from '../../img/Mitzvag img.png';
import Virtual from '../../img/virtual volunteering img.png';

import Reduced from '../../img/SDG/10 Reduced Inequalities.svg';
import emblem from '../../img/SDG/12 Responsible and Production.svg'
import Zero from '../../img/SDG/2 Zero Hunger.svg';
import Health from '../../img/SDG/3 Good Health and Well-Being.svg';

//import styles
import 'react-circular-progressbar/dist/styles.css';
import './styles.css';

export default class Challenges extends Component {
    render() {
        return (
            <div >
                {/*Create and display 4 cards*/}

                <div className="row">
                    <div className="col-6">
                        <h4>Challenges</h4>
                    </div>
                    <div className="col-6 see-more">
                        <Link to="/">See More</Link>
                    </div>
                </div>
                <div className="row challenges">
                    <Card
                        image={LoveYourPark}
                        alt="Love Your Park"
                        emblem={emblem}
                        target={25}
                        current={5}
                        caption="Let Youth Be Youth Challenge"
                        description="An inner city arts project with your friends that builds a sage creative space"
                        hosts={[{ image: LoveYourPark, name: "Chance the Rapper" }, { image: Mitzvag, name: "Miley Cyrus" }]}
                        type="challenge"
                    />
                    <Card
                        image={Mitzvag}
                        alt="Mitzvag"
                        emblem={Zero}
                        target={125}
                        current={35}
                        caption="Code Movement"
                        description="Promote and teach basic code languages to students who are interest in pursing Computer Science"
                        hosts={[{ image: LoveYourPark, name: "Karlie Kloss" }]}
                        type="challenge"
                    />
                    <Card
                        image={Virtual}
                        alt="Virtual"
                        emblem={Health}
                        target={45}
                        current={45}
                        caption="Food Drive Challenge"
                        description="Organize groups and collect as many canned and dry items to help support people affected by Huricane"
                        hosts={[{ image: LoveYourPark, name: "Miley Cyrus" }]}
                        type="challenge"
                    />
                    <Card
                        image={Mitzvag}
                        alt="Team My Effect"
                        emblem={Reduced}
                        target={10}
                        current={2}
                        caption="MyEffect Challenge"
                        description="Refer a firend, let's build a community of Change Leaders!"
                        hosts={[{ image: LoveYourPark, name: "Kelly Lovell" }]}
                        type="challenge"
                    />


                </div>

            </div>
        )
    }
}
