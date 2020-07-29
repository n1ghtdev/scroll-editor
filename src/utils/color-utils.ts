export function rgbToHex(rgb: number[]): string {
  return '#' + rgb.map((x) => x.toString(16).padStart(2, '0')).join('');
}
export function hexToRgb(hex: string): number[] {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return result && result.length > 0
    ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
      ]
    : [255, 255, 255];
}
