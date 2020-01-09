export enum InputTypes {
  input = 'input',
  inputslider = 'inputslider',
  colorpicker = 'colorpicker',
  inputcolor = 'inputcolor',
}

export const PropertyTypes: any = {
  width: InputTypes.input,
  'background-color': InputTypes.colorpicker,
  'border-radius': InputTypes.input,
  border: InputTypes.input,
  'box-shadow': InputTypes.input,
};
