import React from 'react';
import PropTypes from 'prop-types';

import TextFieldGroup from '../../../../common/TextFieldGroup';

const SocialMedia = ({
    twitter,
    linkedin,
    instagram,
    facebook,
    youtube,
    google,
    onChange,
    errors
}) => {
    return (
        <div className="row">
            <div className="col-6">
                <TextFieldGroup
                    name="twitter"
                    value={twitter}
                    onChange={onChange}
                    error={errors.twitter}
                    info="Twitter"
                />
                <TextFieldGroup
                    name="linkedin"
                    value={linkedin}
                    onChange={onChange}
                    error={errors.linkedin}
                    info="LinkedIn"
                />
                <TextFieldGroup
                    name="instagram"
                    value={instagram}
                    onChange={onChange}
                    error={errors.instagram}
                    info="Instagram"
                />
            </div>
            <div className="col-6">
                <TextFieldGroup
                    name="facebook"
                    value={facebook}
                    onChange={onChange}
                    error={errors.facebook}
                    info="Facebook"
                />
                <TextFieldGroup
                    name="youtube"
                    value={youtube}
                    onChange={onChange}
                    error={errors.youtube}
                    info="Youtube"
                />
                <TextFieldGroup
                    name="google"
                    value={google}
                    onChange={onChange}
                    error={errors.google}
                    info="Google+ Link"
                />
            </div>


        </div>
    )
};

SocialMedia.propTypes = {
    twitter: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired,
    instagram: PropTypes.string.isRequired,
    facebook: PropTypes.string.isRequired,
    youtube: PropTypes.string.isRequired,
    google: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

export default SocialMedia;
