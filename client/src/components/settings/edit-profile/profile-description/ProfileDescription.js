import React from 'react';
import PropTypes from 'prop-types';

//import components
import TextAreaFieldGroup from '../../../../common/TextAreaFieldGroup';

const ProfileDescription = ({
    about,
    errors,
    onChange
}) => {
    return (
        <div>
            <TextAreaFieldGroup
                name="about"
                value={about}
                onChange={onChange}
                error={errors.about}
                info="About"
            />

        </div>
    )
};


ProfileDescription.propTypes = {
    about: PropTypes.string.isRequired,
    errors: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
};

export default ProfileDescription;
