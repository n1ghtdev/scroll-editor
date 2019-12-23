/** @jsx jsx */
import React from 'react';
import { Form, Button, Popup } from 'semantic-ui-react';
import { css, jsx } from '@emotion/core';
import { ChromePicker } from 'react-color';

interface ColorPickerProps {
  color: any;
  onChange: (color: any, state: any) => void;
  name: string;
  buttonText: string;
}

const ColorPicker = ({
  color,
  onChange,
  name,
  buttonText,
}: ColorPickerProps) => {
  const [isActive, setIsActive] = React.useState(false);
  return (
    <Form.Group>
      <button
        onClick={() => setIsActive(!isActive)}
        css={css`
          width: 38px;
          border: 1px solid #e1e1e1;
          border-radius: 4px;
          margin-right: 5px;
          background-color: ${color};
        `}
      />
      <Popup
        on="click"
        trigger={<Button>{buttonText}</Button>}
        open={isActive}
        onClose={() => setIsActive(false)}
        onOpen={() => setIsActive(true)}
        position="top right"
      >
        <div
          css={css`
            position: absolute;
            z-index: 2;
          `}
        >
          <ChromePicker
            color={color}
            onChange={color => onChange(color, name)}
          />
        </div>
      </Popup>
    </Form.Group>
  );
};

export default ColorPicker;
