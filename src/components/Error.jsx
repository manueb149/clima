import React from 'react';
import PropTypes from 'prop-types';

const Error = ({error}) => (
    <p className="red darken-4 error">{error}</p>
);

Error.propTypes = {
    error: PropTypes.string.isRequired
}

export default Error;
