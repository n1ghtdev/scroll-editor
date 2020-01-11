import React from 'react';
import { Input, InputNumber, Checkbox } from 'antd';

import InputNumberPx from './InputNumberPx';
import ColorPicker from './ColorPicker';

const InputBoxShadow = ({
  value,
  onChange,
}: {
  value: any;
  onChange: (value: any) => void;
}) => {
  React.useEffect(() => {
    onChange(value);
  }, [value, onChange]);

  return (
    <Input.Group compact>
      {/* checkbox or select */}
      <Checkbox
        style={{ marginTop: '5px' }}
        checked={value.inset}
        onChange={(e: any) => onChange({ ...value, inset: e.target.checked })}
      >
        inset
      </Checkbox>
      <InputNumberPx
        value={value.x}
        onChange={(val: number | undefined) => onChange({ ...value, x: val })}
      />
      <InputNumberPx
        value={value.y}
        onChange={(val: number | undefined) => onChange({ ...value, y: val })}
      />
      <InputNumberPx
        value={value.blur}
        onChange={(val: number | undefined) =>
          onChange({ ...value, blur: val })
        }
      />
      <InputNumberPx
        value={value.spread}
        onChange={(val: number | undefined) =>
          onChange({ ...value, spread: val })
        }
      />
      <ColorPicker
        value={value.color}
        onChange={(color: any) => onChange({ ...value, color: color?.hex })}
      />
    </Input.Group>
  );
};

export default InputBoxShadow;
