/** @jsx jsx */
import { Form, Popover, Button } from 'antd';
import { css, jsx } from '@emotion/core';
import { ChromePicker } from 'react-color';
import { debounce } from 'throttle-debounce';

interface ColorPickerProps {
  value: any;
  onChange: (color: any) => void;
}

const ColorPicker = ({ value, onChange }: ColorPickerProps) => {
  return (
    <Popover
      trigger="click"
      // TODO: move <ChromePicker /> outside, rename to ColorPickerPopup
      // TODO: || #000 looking so far so bad
      content={
        <ChromePicker
          color={value || '#000'}
          onChange={debounce(200, onChange)}
        />
      }
    >
      <Form.Item>
        <Button
          css={css`
            border: 1px solid #e1e1e1;
            border-radius: 4px;
            margin-right: 5px;
            background-color: ${value || '#000'};
            &:hover,
            &:focus {
              background-color: ${value || '#000'};
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
          {value || '#000'}
        </span>
      </Form.Item>
    </Popover>
  );
};

export default ColorPicker;
