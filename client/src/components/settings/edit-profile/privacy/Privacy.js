import React from 'react';
import PropTypes from 'prop-types';

//import components
import Togglebox from '../../../../common/Togglebox';

const Privacy = ({
    contact,
    location,
    actions,
    member,
    leader,
    posts,
    impact,
    onChange
}) => {
    return (
        <div className="row">
            <div className="col-12 privacy-small"><small className="text-muted">Select the sections you wish to share on your Group profile page</small></div>
            <div className="col-6">
                <Togglebox
                    name="contact"
                    checked={contact}
                    info="Contact Phone Number"
                    onChange={onChange}
                />
                <Togglebox
                    name="location"
                    checked={location}
                    info="Location"
                    onChange={onChange}
                />
                <Togglebox
                    name="actions"
                    checked={actions}
                    info="Actions"
                    onChange={onChange}
                />
                <Togglebox
                    name="member"
                    checked={member}
                    info="Member list"
                    onChange={onChange}
                />
            </div>
            <div className="col-6">
                <Togglebox
                    name="leader"
                    checked={leader}
                    info="Group leader board"
                    onChange={onChange}
                />
                <Togglebox
                    name="posts"
                    checked={posts}
                    info="Post wall"
                    onChange={onChange}
                />
                <Togglebox
                    name="impact"
                    checked={impact}
                    info="Social Impact"
                    onChange={onChange}
                />
            </div>
        </div>
    )
};

Privacy.propTypes = {
    contact: PropTypes.bool.isRequired,
    location: PropTypes.bool.isRequired,
    actions: PropTypes.bool.isRequired,
    member: PropTypes.bool.isRequired,
    leader: PropTypes.bool.isRequired,
    posts: PropTypes.bool.isRequired,
    impact: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
}



export default Privacy;
