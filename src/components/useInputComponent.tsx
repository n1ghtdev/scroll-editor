import { Input } from 'antd';
import { InputTypes } from '../types';

import ColorPicker from './ColorPicker';
import InputRange from './InputRange';
import BorderInput from './BorderInput';

const components = {
  [InputTypes.input]: Input,
  [InputTypes.colorpicker]: ColorPicker,
  [InputTypes.inputrange]: InputRange,
  [InputTypes.border]: BorderInput,
};

const useInputComponent = (type: InputTypes) => {
  const Component = (components as any)[type as keyof typeof InputTypes];

  return [Component];
};

export default useInputComponent;
