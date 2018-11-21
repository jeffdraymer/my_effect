import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import { Link } from 'react-router-dom';

//Import images
import ChangeGen from '../../img/Gallery/ChangeGen.png'
import KellyLovell from '../../img/Gallery/Kelly Lovell.png'
import LovellAward from '../../img/Gallery/Lovell Award.png'
import MeetAndGreet from '../../img/Gallery/MeetAndGreet.png'

//import Styles
import './styles.css';


class Memories extends Component {
    render() {
        return (
            <div className="memories">
                <div className="row">
                    <div className="col-6">
                        <h4>Memories</h4>
                    </div>
                    <div className="col-6 see-more">
                        <Link to="/">See More</Link>
                    </div>
                </div>
                <Gallery photos={PHOTO_SET} columns={2} margin={5} />

            </div>

        );
    }
}
const PHOTO_SET = [
    {
        src: MeetAndGreet,
        width: 3,
        height: 3,
        alt: MeetAndGreet
    },
    {
        src: ChangeGen,
        width: 4,
        height: 3,
        alt: ChangeGen
    },
    {
        src: KellyLovell,
        width: 3,
        height: 2,
        alt: KellyLovell
    },
    {
        src: LovellAward,
        width: 4,
        height: 3,
        alt: LovellAward
    }

];

export default Memories;