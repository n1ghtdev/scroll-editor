export enum InputTypes {
  input = 'input',
  inputrange = 'inputrange',
  colorpicker = 'colorpicker',
  inputcolor = 'inputcolor',
  border = 'border',
}

export const PropertyTypes: any = {
  width: InputTypes.input,
  'background-color': InputTypes.colorpicker,
  'border-radius': InputTypes.input,
  border: InputTypes.border,
  'box-shadow': InputTypes.input,
};
