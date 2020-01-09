import React from 'react';
import { Input } from 'antd';
import { InputTypes } from '../types';
import ColorPicker from './ColorPicker';
import InputRange from './InputRange';

const components = {
  [InputTypes.input]: Input,
  [InputTypes.colorpicker]: ColorPicker,
  [InputTypes.inputslider]: InputRange,
};

const useInputComponent = (type: InputTypes) => {
  const [value, setValue] = React.useState();

  React.useEffect(() => {
    setValue(null);
  }, [type]);

  const onChange = (e: any) => {
    if (e.hasOwnProperty('target')) {
      setValue(e.target.value);
    } else if (e.hasOwnProperty('hex')) {
      setValue(e.hex);
    } else {
      setValue(e);
    }
  };

  const Component = (components as any)[type as keyof typeof InputTypes];

  return [Component, value, onChange, () => setValue(null)];
};

export default useInputComponent;
