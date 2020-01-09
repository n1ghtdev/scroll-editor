/** @jsx jsx */
import { Form } from 'antd';
import { css, jsx } from '@emotion/core';

const OptionItem = ({ children }: { children: React.ReactNode }) => (
  <Form.Item
    label="Scrollbar"
    css={css`
      background-color: #eee;
      padding: 0 20px;
      .ant-form-item {
        margin-bottom: 0 !important;
      }
    `}
  >
    {children}
  </Form.Item>
);

export default OptionItem;
