/* eslint-disable react/jsx-props-no-spreading */
/**
 * This HOC tells the Wrapped component when it enters the viewport
 * Here We use the window.pageYOffset value provided by ScrollTopContext.
 * We compare this value with the Wrapped component's getBoundingClientRect value.
 * When Wrapped Component enters the current view port (when user scroll),
 * we signal it through a property.
 *
 * Details:
 *  - We use React.useRef to get ref.current.getBoundingClientReact()
 *  - We use React.useState to obtain the scrollTop value from context consumer
 *
 * @author Dapeng Zhang
 * @version 1.0.0
 */

import React, { useRef, useEffect, useState } from 'react';
import { ScrollTopContext } from '../Context';

const HOC = (Component) => (props) => {
  const ref = useRef();
  const [enterViewport, setEnterViewport] = useState(false);
  const scrollTop = useRef(0);

  // add listener of scrollTop
  // NOTE: add ref.current to listening list is for initialization
  useEffect(() => {
    if (ref.current) {
      const { top } = ref.current.getBoundingClientRect();
      // when enter viewport
      if (top <= window.innerHeight) setEnterViewport(true);
    }
  }, [scrollTop.current, ref.current]);

  const updateScrollTop = (value) => {
    // avoid memory leak, only update before an element enter viewport
    if (!enterViewport) {
      scrollTop.current = value;
    }
  };

  return (
    <ScrollTopContext.Consumer>
      {
          (value) => {
            updateScrollTop(value);
            return (
              <Component
                ref={ref}
                enterViewport={enterViewport}
                {...props}
              />
            );
          }
        }
    </ScrollTopContext.Consumer>
  );
};

export default HOC;
