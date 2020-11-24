import React from 'react';
import PropTypes from 'prop-types';

const SharedButton = (props) => {

    const submitEvent = () => {
        if (props.emitEvent) {
            props.emitEvent();
        }
    }

    const { buttonText } = props;

    return (
        <button onClick={submitEvent} data-test="buttonComponent" style={{ marginLeft: 180 }} >
            {buttonText}
        </button>
    );
}


SharedButton.propTypes = {
    buttonText: PropTypes.string,
    emitEvent: PropTypes.func
};

export default SharedButton;