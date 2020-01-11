import React from 'react';
import { Input, Select } from 'antd';

import InputNumberPx from './InputNumberPx';
import ColorPicker from './ColorPicker';

const borderStyles = [
  { id: 0, name: 'dotted' },
  { id: 1, name: 'dashed' },
  { id: 2, name: 'solid' },
  { id: 3, name: 'double' },
  { id: 4, name: 'groove' },
  { id: 5, name: 'ridge' },
  { id: 6, name: 'inset' },
  { id: 7, name: 'outset' },
];

const InputBorder = ({
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
      <InputNumberPx
        min={0}
        width="30%"
        value={value.width}
        onChange={(val: number | undefined) =>
          onChange({ ...value, width: val })
        }
      />
      <Select
        placeholder="style"
        style={{ width: '30%' }}
        value={value.style}
        onChange={(val: any) =>
          onChange({
            ...value,
            style: borderStyles.find((el: any) => el.id === val)?.name,
          })
        }
      >
        {borderStyles.map(style => (
          <Select.Option key={style.id} value={style.id}>
            {style.name}
          </Select.Option>
        ))}
      </Select>
      <ColorPicker
        value={value.color}
        onChange={(color: any) => onChange({ ...value, color: color?.hex })}
      />
    </Input.Group>
  );
};

export default InputBorder;
