import React, { Component } from 'react';
import TeamMyEffect from '../../img/TeamMyEffect.png'

import NavItem from './NavItem';

import './styles.css';

class Navbar extends Component {
    onClick(e) {
        e.preventDefault();
        console.log("clicked")
    }
    render() {

        const navLinks = (
            <div className="navLinks">
                {/*Create list of nav items from the MavItem component */}
                <NavItem label="Feed" icon="fas fa-list" link="/" />
                <NavItem label="Recognition" icon="fa fa-trophy" link="" />
                <NavItem label="Actions" icon="fas fa-list" link="" />
                <NavItem label="Members" icon="fas fa-users" link="" />
                <NavItem label="Group Mail" icon="fas fa-envelope" link="" />
                <NavItem label="Performance" icon="fas fa-chart-line" link="" />
                <NavItem label="Settings" icon="fas fa-cogs" link="/settings" />
            </div>
        );

        return (
            <nav className="left-side-nav navbar-collapse">
                <div className="container">
                    {/*Button to toggle the navbar open and closed */}

                    <div className="profile-image">
                        <div className="menu-toggle">
                            <i className="fas fa-bars" onClick={this.onClick.bind(this)} />
                        </div>
                        <img className='side-nave-img' src={TeamMyEffect} alt="Team My Effect" />
                        <div>My Effect</div>
                    </div>
                    <div className="state-view">
                        <i className="fas fa-eye" /> Public View
                    </div>
                    {navLinks}
                </div>
            </nav>
        )
    }
}

export default Navbar;