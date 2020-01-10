/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';

import { generateScrollbarStyles } from '../utils/generateScrollbarStyles';

const Preview = ({ options }: { options: any }) => {
  // TODO: ref vs state
  const [styles, setStyles] = React.useState(generateScrollbarStyles(options));

  React.useEffect(() => {
    setStyles(generateScrollbarStyles(options));
  }, [options]);

  return (
    <React.Fragment>
      Scroll preview/code
      <div
        css={css`
          height: 100%;
          width: 100%;
          background-color: #f5f5f5;
          overflow-y: scroll;
          ${styles}
        `}
      >
        <div
          css={css`
            min-height: 125%;
          `}
        />
      </div>
      <textarea rows={20} style={{ width: '500px' }}>
        {styles?.join('')}
      </textarea>
    </React.Fragment>
  );
};

export default Preview;
