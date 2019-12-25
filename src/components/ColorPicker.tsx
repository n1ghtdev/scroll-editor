/** @jsx jsx */
import { Form, Popover, Button } from 'antd';
import { css, jsx } from '@emotion/core';
import { ChromePicker } from 'react-color';

interface ColorPickerProps {
  color: any;
  onChange: (color: any) => void;
  name: string;
}

const ColorPicker = ({ color, onChange, name }: ColorPickerProps) => {
  return (
    <Popover
      trigger="click"
      // move <ChromePicker /> outside, rename to ColorPickerPopup
      content={<ChromePicker color={color} onChange={onChange} />}
    >
      <Form.Item>
        <Button
          css={css`
            border: 1px solid #e1e1e1;
            border-radius: 4px;
            margin-right: 5px;
            background-color: ${color};
            &:hover,
            &:focus {
              background-color: ${color};
            }
          `}
        />
        <span
          css={css`
            line-height: 2.25;
            margin-left: 5px;
            font-weight: bold;
          `}
        >
          {color}
        </span>
      </Form.Item>
    </Popover>
  );
};

export default ColorPicker;
