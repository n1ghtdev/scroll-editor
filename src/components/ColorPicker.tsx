/** @jsx jsx */
import React from 'react';
import { Form, Button } from 'semantic-ui-react';
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
      <Form.Input />
      {isActive ? (
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
      ) : null}
      <Button onClick={() => setIsActive(!isActive)}>{buttonText}</Button>
    </Form.Group>
  );
};

export default ColorPicker;
