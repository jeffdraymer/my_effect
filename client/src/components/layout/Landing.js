import React, { Component } from 'react';

//Component imports
import Carousel from './Carousel';
import Memories from './Memories';
import Actions from './Actions';
import Challenges from './Challenges';

//import images
import TeamMyEffect from '../../img/TeamMyEffect.png';
import Partnership from '../../img/SDG/17 Partnerships for the Goals.svg';
import Industry from '../../img/SDG/9 Industry, Innovation and Infrastructure.svg';
import Growth from '../../img/SDG/8 Decent Work and Economic Growth.svg';

//import styles
import './styles.css';

class Landing extends Component {
    render() {


        return (
            <div className="landing" >
                <div className="row ">
                    <div className="col-11 top-bell blue">
                        <i className="fas fa-bell" />
                    </div>
                </div>

                {/*Page Header*/}
                < div className="row page-header" >
                    <div className="spacing"></div>
                    <div className="profile-image">
                        <img className='side-nave-img' src={TeamMyEffect} alt="Team My Effect" />
                        <div>My Effect</div>
                    </div>
                    <div className="button-div">
                        <div className="user-buttons">
                            <button className="btn btn-sm user-button" >
                                <i className='fas fa-square' /> Share
                            </button>
                            <button className="btn btn-sm user-button" >
                                <i className='fas fa-pencil-alt' /> Edit Profile
                            </button>
                        </div>
                    </div>

                </div >

                <div className="row" id="details">
                    <div className="col-4 member-count">
                        24.1k Members
                    </div>
                    <div className="col-4 join-link">
                        <button className="btn btn-sm btn-warning">
                            Join
                        </button>
                    </div>
                    <div className="col-4 network-links">
                        <img src={Growth} alt='Growth' />
                        <img src={Industry} alt='Industry' />
                        <img src={Partnership} alt='Partnership' />
                    </div>
                </div>

                {/*Carousel with impact tallies */}

                <div className="row">
                    <div className="col-10 col-centered section">
                        <Carousel className="carousel" />
                    </div>
                </div>



                {/*About section*/}
                <div className="row">
                    <div className="col-10 col-centered section">
                        <h4>About</h4>
                        <div className="about-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                </div>


                {/*Memories images*/}
                <div className="row">
                    <div className="col-10 col-centered memories section">
                        <Memories />
                    </div>
                </div>

                {/*Actions */}
                <div className="row">
                    <div className="col-10 col-centered section">
                        <Actions />
                    </div>
                </div>


                {/*Challenges*/}
                <div className="row">
                    <div className="col-10 col-centered section">
                        <Challenges />
                    </div>
                </div>


            </div >
        )
    }
}


export default Landing;