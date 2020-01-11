import { Input } from 'antd';
import { InputTypes } from '../types';

import ColorPicker from './ColorPicker';
import InputRange from './InputRange';
import BorderInput from './BorderInput';
import BoxShadowInput from './BoxShadowInput';

const components = {
  [InputTypes.input]: Input,
  [InputTypes.colorPicker]: ColorPicker,
  [InputTypes.inputRange]: InputRange,
  [InputTypes.border]: BorderInput,
  [InputTypes.boxShadow]: BoxShadowInput,
};

const useInputComponent = (type: InputTypes) => {
  const Component = (components as any)[type as keyof typeof InputTypes];

  return [Component];
};

export default useInputComponent;
