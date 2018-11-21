import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Import Components
import Card from '../../common/Cards/Card';

//import images
import LoveYourPark from '../../img/Love your park day img.png';
import Mitzvag from '../../img/Mitzvag img.png';
import Virtual from '../../img/virtual volunteering img.png';

import NoPoverty from '../../img/SDG/1 No Poverty.svg';
import Cities from '../../img/SDG/11 Sustainable Cities and Communities.svg';
import Reduced from '../../img/SDG/10 Reduced Inequalities.svg';
import emblem from '../../img/SDG/12 Responsible and Production.svg';
import Zero from '../../img/SDG/2 Zero Hunger.svg';
import Health from '../../img/SDG/3 Good Health and Well-Being.svg';

//import styles
import 'react-circular-progressbar/dist/styles.css';
import './styles.css';

class Actions extends Component {
    render() {
        return (
            <div>
                {/*Create and display 4 cards*/}
                <div className="row">
                    <div className="col-6">
                        <h4>Actions</h4>
                    </div>
                    <div className="col-6 see-more">
                        <Link to="/">See More</Link>
                    </div>
                </div>
                <div className="row actions">
                    <Card
                        image={LoveYourPark}
                        emblem={emblem}
                        target={25}
                        current={5}
                        caption="Love Your Park in kiwanas park. "
                        icons={[{ image: NoPoverty, alt: "NoPoverty" }, { image: Cities, alt: "Cities" }]}
                        from="Sept, 15 2019"
                        to="Sept, 17 2019"
                        title="Volunteer"
                        type="action"
                    />
                    <Card
                        image={Mitzvag}
                        emblem={Zero}
                        target={125}
                        current={35}
                        caption="Food Drive"
                        icons={[{ image: Cities, alt: "Cities" }]}
                        from="Sept, 15 2019"
                        title="Donation"
                        type="action"
                    />
                    <Card
                        image={Virtual}
                        emblem={Health}
                        target={45}
                        current={45}
                        caption="Jazz festival Volunteering"
                        icons={[{ image: NoPoverty, alt: "NoPoverty" }, { image: Cities, alt: "Cities" }, { image: Reduced, alt: "Reduced" }]}
                        from="Mar, 7 2019"
                        to="Sept, 10 2019"
                        title="Volunteer"
                        type="action"
                    />
                    <Card
                        image={Mitzvag}
                        emblem={Reduced}
                        target={10}
                        current={2}
                        caption="School Library Team Member"
                        icons={[{ image: NoPoverty, alt: "NoPoverty" }]}
                        from="Jan, 15 2019"
                        to="Dec, 17 2019"
                        title="Volunteer"
                        type="action"
                    />


                </div>

            </div>
        )
    }
};

export default Actions;
