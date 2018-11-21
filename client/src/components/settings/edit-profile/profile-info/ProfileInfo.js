import React from 'react';
import PropTypes from 'prop-types';

//import components
import TextFieldGroup from '../../../../common/TextFieldGroup';

const ProfileInfo = ({
    name,
    city,
    phone,
    website,
    onChange,
    errors
}) => {
    return (
        < div >
            <TextFieldGroup
                name="name"
                value={name}
                onChange={onChange}
                error={errors.name}
                info="Name"
            />
            <TextFieldGroup
                name="city"
                value={city}
                onChange={onChange}
                error={errors.city}
                info="City"
            />
            <TextFieldGroup
                name="phone"
                value={phone}
                onChange={onChange}
                error={errors.phone}
                info="Phone Number"
            />
            <TextFieldGroup
                name="website"
                value={website}
                onChange={onChange}
                error={errors.website}
                info="Website"
            />

        </div >
    )
};

ProfileInfo.propTypes = {
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object
}

export default ProfileInfo;
