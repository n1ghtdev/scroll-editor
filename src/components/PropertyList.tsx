/** @jsx jsx */
import { Collapse } from 'antd';
import { css, jsx } from '@emotion/core';

const PropertyList = ({ children }: { children: React.ReactNode }) => {
  return (
    <Collapse
      bordered={false}
      css={css`
        .ant-collapse-header {
          padding: 6px 16px !important;
          padding-left: 40px !important;
        }
      `}
    >
      {children}
    </Collapse>
  );
};

export default PropertyList;
