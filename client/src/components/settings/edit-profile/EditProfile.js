import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//import actions 
import { createProfile, getCurrentProfile } from '../../../actions/profileActions';

//import components 
import ProfileInfo from './profile-info/ProfileInfo';
import ProfileDescription from './profile-description/ProfileDescription';
import SocialMedia from './social-media/SocialMedia';
import Privacy from './privacy/Privacy';
import isEmpty from '../../../validation/is-empty';

import TeamMyEffect from '../../../img/TeamMyEffect.png';


class EditProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            city: '',
            phone: '',
            website: '',
            about: '',
            twitter: '',
            facebook: '',
            linkedin: '',
            youtube: '',
            instagram: '',
            google: '',
            contact: true,
            location: true,
            member: true,
            leader: true,
            posts: true,
            impact: true,
            actions: true,
            errors: {}
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onCheck = this.onCheck.bind(this);
    }

    componentWillMount() {
        this.props.getCurrentProfile();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }

        if (nextProps.profile.profile) {

            const profile = nextProps.profile.profile;

            profile.name = !isEmpty(profile.name) ? profile.name : '';
            profile.city = !isEmpty(profile.city) ? profile.city : '';
            profile.phone = !isEmpty(profile.phone) ? profile.phone : '';
            profile.website = !isEmpty(profile.website) ? profile.website : '';
            profile.about = !isEmpty(profile.about) ? profile.about : '';
            profile.social = !isEmpty(profile.social) ? profile.social : {};
            profile.social.twitter = !isEmpty(profile.social.twitter) ? profile.social.twitter : '';
            profile.social.facebook = !isEmpty(profile.social.facebook) ? profile.social.facebook : '';
            profile.social.linkedin = !isEmpty(profile.social.linkedin) ? profile.social.linkedin : '';
            profile.social.youtube = !isEmpty(profile.social.youtube) ? profile.social.youtube : '';
            profile.social.instagram = !isEmpty(profile.social.instagram) ? profile.social.instagram : '';
            profile.social.google = !isEmpty(profile.social.google) ? profile.social.google : '';
            profile.privacy = !isEmpty(profile.privacy) ? profile.privacy : {};
            profile.privacy.contact = !isEmpty(profile.privacy.contact) ? profile.privacy.contact : true;
            profile.privacy.location = !isEmpty(profile.privacy.location) ? profile.privacy.location : true;
            profile.privacy.member = !isEmpty(profile.privacy.member) ? profile.privacy.member : true;
            profile.privacy.actions = !isEmpty(profile.privacy.actions) ? profile.privacy.actions : true;
            profile.privacy.leader = !isEmpty(profile.privacy.leader) ? profile.privacy.leader : true;
            profile.privacy.posts = !isEmpty(profile.privacy.posts) ? profile.privacy.posts : true;
            profile.privacy.impact = !isEmpty(profile.privacy.impact) ? profile.privacy.impact : true;

            this.setState({
                name: profile.name,
                city: profile.city,
                phone: profile.phone,
                website: profile.website,
                about: profile.about,
                twitter: profile.social.twitter,
                facebook: profile.social.facebook,
                linkedin: profile.social.linkedin,
                youtube: profile.social.youtube,
                instagram: profile.social.instagram,
                google: profile.social.google,
                contact: profile.privacy.contact,
                location: profile.privacy.location,
                member: profile.privacy.member,
                actions: profile.privacy.actions,
                leader: profile.privacy.leader,
                posts: profile.privacy.posts,
                impact: profile.privacy.impact
            });
        }
    }

    onSubmit(e) {
        e.preventDefault();

        const profileData = {
            name: this.state.name,
            city: this.state.city,
            phone: this.state.phone,
            website: this.state.website,
            about: this.state.about,
            twitter: this.state.twitter,
            facebook: this.state.facebook,
            linkedin: this.state.linkedin,
            youtube: this.state.youtube,
            instagram: this.state.instagram,
            google: this.state.google,
            contact: this.state.contact,
            location: this.state.location,
            member: this.state.member,
            actions: this.state.actions,
            leader: this.state.leader,
            posts: this.state.posts,
            impact: this.state.impact
        }
        this.props.createProfile(profileData);

    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onCheck(e) {
        this.setState({ [e.target.name]: e.target.checked });
    }


    render() {
        return (

            <div className="edit-profile">
                <div className="row">
                    <div className="col-4">
                        <div className="image-profile">
                            <img src={TeamMyEffect} alt="profile" />
                        </div>
                        <div>
                            <small>Add a picture to gain more recognition</small>
                        </div>
                        <button className="btn btn-small edit-image">Edit Image</button>
                        <div className="section-caption">Profile Info</div>
                        <ProfileInfo
                            name={this.state.name}
                            city={this.state.city}
                            phone={this.state.phone}
                            website={this.state.website}
                            onChange={this.onChange}
                            errors={this.state.errors}
                        />

                    </div>
                    <div className="col-8">
                        <div>
                            <div className="section-caption">Profile Description</div>
                            <div className="profile-description">
                                <ProfileDescription
                                    about={this.state.about}
                                    onChange={this.onChange}
                                    errors={this.state.errors}
                                />
                            </div>
                        </div>
                        <div>
                            <div className="section-caption">Social Media Links</div>
                            <div className="profile-social">
                                <SocialMedia
                                    twitter={this.state.twitter}
                                    linkedin={this.state.linkedin}
                                    instagram={this.state.instagram}
                                    facebook={this.state.facebook}
                                    youtube={this.state.youtube}
                                    google={this.state.google}
                                    onChange={this.onChange}
                                    errors={this.state.errors}
                                />
                            </div>
                        </div>
                        <div>
                            <div className="section-caption">Privacy</div>
                            <div className="profile-privacy">
                                <Privacy
                                    contact={this.state.contact}
                                    location={this.state.location}
                                    member={this.state.member}
                                    actions={this.state.actions}
                                    leader={this.state.leader}
                                    posts={this.state.posts}
                                    impact={this.state.impact}
                                    onChange={this.onCheck}
                                />
                            </div>

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="submit">
                        <input type="submit" className="btn btn-small submit-button" onClick={this.onSubmit} value="Save Changes" />

                    </div>
                </div>

            </div>
        )
    }
};

EditProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapDispatchToProps = {
    createProfile,
    getCurrentProfile
};

const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
});


export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
