/* eslint-disable react/forbid-prop-types */
/**
 * This is a Dropdown list
 *
 * When click outside the dropdown, it will collapse automatically.
 * This feature depends on DOMClickListener
 *
 * @version 1.0.0
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { UnstyledButton as Button } from '../Styles';
import DOMClickListener from './DOMClickListener';

const Dropdown = (props) => {
  const { Head, Body } = props;
  const [collapse, setCollapse] = useState(true);

  const handleHeadClick = () => {
    setCollapse(!collapse);
  };

  return (
    <>
      <Button
        type="button"
        onClick={handleHeadClick}
        aria-label="dropdown label"
        aria-haspopup="true"
        aria-expanded="false"
        className={collapse ? 'collapse' : 'show'}
      >
        {Head}
      </Button>
      {
        !collapse
          ? (
            <DOMClickListener onClick={() => setCollapse(true)}>
              {Body}
            </DOMClickListener>
          ) : null
      }
    </>
  );
};

Dropdown.propTypes = {
  Head: PropTypes.object.isRequired,
  Body: PropTypes.object.isRequired,
};

export default Dropdown;
