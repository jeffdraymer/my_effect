import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

//import component
import EditProfile from './edit-profile/EditProfile';

//import styles
import './styles.css';

class Settings extends Component {
    render() {
        return (

            <div className="settings">
                <div className="row ">
                    <div className="col-11 top-bell blue">
                        <i className="fas fa-bell" />
                    </div>

                </div>
                <div className="row page-head blue">

                    <i className="fas fa-cogs" />
                    <h2>Settings</h2>

                </div >

                <Tabs className='tabs' defaultIndex={0} defaultactivekey={1} >
                    <TabList>
                        <Tab>Edit Profile</Tab>
                        <Tab>Resource Uploads</Tab>
                        <Tab>Impact Reporting</Tab>
                        <Tab>Theme Customization</Tab>
                        <Tab>Account Plan</Tab>
                        <Tab>Verification</Tab>
                    </TabList>
                    <span className="tab-content">
                        <TabPanel><EditProfile /></TabPanel>
                        <TabPanel>Content For Resource Uploads</TabPanel>
                        <TabPanel>Content For Impact Reporting</TabPanel>
                        <TabPanel>Content For Theme Customization</TabPanel>
                        <TabPanel>Content For Account Plan</TabPanel>
                        <TabPanel>Content For Verification</TabPanel>
                    </span>

                </Tabs>


            </div>
        )
    }
};

const mapStateToProps = state => ({
    profile: state.profile
});


export default connect(mapStateToProps)(Settings);
