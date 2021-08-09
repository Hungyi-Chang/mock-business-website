/**
 * This is a DOM click event listener.
 * When a click event happens outside of it, it runs onClick function.
 *
 * This component is used in the Dropdown list. When click outside the list,
 * the list should collapse.
 *
 * @author Dapeng Zhang
 * @version 1.0.0
 */
import React from 'react';
import PropTypes from 'prop-types';

class DOMClickListener extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.clickHandler = (event) => {
      if (this.ref.current) {
        // only execute onClick function when click is from inside the Wrappered component
        if (this.ref.current.contains(event.target)) return;
        const { onClick } = this.props;
        if (onClick) onClick(event);
      }
    };
  }

  componentDidMount() {
    document.addEventListener('click', this.clickHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.clickHandler);
  }

  render() {
    const { children } = this.props;
    return (
      <div ref={this.ref}>
        {children}
      </div>
    );
  }
}

DOMClickListener.propTypes = {
  onClick: PropTypes.func.isRequired,
  /* eslint-disable react/forbid-prop-types */
  children: PropTypes.any.isRequired,
};

export default DOMClickListener;
