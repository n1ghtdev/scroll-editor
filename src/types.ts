export enum InputTypes {
  input = 'input',
  inputRange = 'inputRange',
  colorPicker = 'colorPicker',
  border = 'border',
  boxShadow = 'boxShadow',
}

export const PropertyTypes: any = {
  width: InputTypes.inputRange,
  'background-color': InputTypes.colorPicker,
  'border-radius': InputTypes.inputRange,
  border: InputTypes.border,
  'box-shadow': InputTypes.boxShadow,
};
