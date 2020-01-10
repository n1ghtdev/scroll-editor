/** @jsx jsx */
import React from 'react';
import { Input } from 'antd';
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
          height: 60%;
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
      <Input.TextArea rows={10} value={styles?.join('')} />
    </React.Fragment>
  );
};

export default Preview;
