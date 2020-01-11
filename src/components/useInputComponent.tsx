import { Input } from 'antd';
import { InputTypes } from '../types';

import ColorPicker from './ColorPicker';
import InputRange from './InputRange';
import InputBorder from './InputBorder';
import InputBoxShadow from './InputBoxShadow';

const components = {
  [InputTypes.input]: Input,
  [InputTypes.colorPicker]: ColorPicker,
  [InputTypes.inputRange]: InputRange,
  [InputTypes.border]: InputBorder,
  [InputTypes.boxShadow]: InputBoxShadow,
};

const useInputComponent = (type: InputTypes) => {
  const Component = (components as any)[type as keyof typeof InputTypes];

  return [Component];
};

export default useInputComponent;
