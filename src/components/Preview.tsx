/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';

const Preview = ({ previewStyles }: { previewStyles: any }) => {
  return (
    <React.Fragment>
      Scroll preview/code
      <div
        css={css`
          height: 100%;
          width: 100%;
          background-color: #f5f5f5;
          overflow-y: scroll;
          ${previewStyles}
        `}
      >
        <div
          css={css`
            min-height: 125%;
          `}
        />
      </div>
    </React.Fragment>
  );
};

export default Preview;
