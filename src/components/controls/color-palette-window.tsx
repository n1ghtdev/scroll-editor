/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import { throttle } from 'throttle-debounce';
import ColorPalette from '../../utils/color-palette';

type Props = {
  onColorChange: (color: string) => void;
  initialColor?: string;
};

const wrapper = css`
  position: absolute;
  left: 0;
  top: -250px;
`;

function ColorPaletteWindow({ onColorChange, initialColor }: Props) {
  const ref = React.useRef<HTMLCanvasElement>(null);
  const colorPaletteRef = React.useRef<ColorPalette | null>(null);
  const [currentColor, setCurrentColor] = React.useState(
    initialColor || '#fff',
  );

  React.useEffect(() => {
    onColorChange(currentColor);
  }, [currentColor, onColorChange]);

  React.useEffect(() => {}, []);

  React.useEffect(() => {
    const canvas = ref.current!;
    let colorPalette = colorPaletteRef.current!;

    colorPalette = new ColorPalette(canvas);
    colorPalette.render();
    const unbindEvents = bindEvents();

    function bindEvents() {
      function getColor(e: any) {
        const x = e.pageX - canvas.getBoundingClientRect().left;
        const y = e.pageY - canvas.getBoundingClientRect().top;

        if (x <= canvas.width && x >= 0 && y <= canvas.height && y >= 0) {
          const color = colorPalette.getColor(x, y);
          setCurrentColor(color);
        }
      }
      const throttledOnMousemove = throttle(50, getColor);

      const onMousedown = (e: any) => {
        getColor(e);
        window.addEventListener('mousemove', throttledOnMousemove);
      };

      const onMouseup = () => {
        window.removeEventListener('mousemove', throttledOnMousemove);
      };

      canvas.addEventListener('mousedown', onMousedown);
      window.addEventListener('mouseup', onMouseup);

      return () => {
        window.removeEventListener('mousemove', throttledOnMousemove);
        window.removeEventListener('mouseup', onMouseup);
        canvas.removeEventListener('mousedown', onMousedown);
      };
    }

    return () => {
      unbindEvents();
    };
  }, []);

  return (
    <div css={wrapper}>
      <canvas ref={ref} width="250" height="250"></canvas>
    </div>
  );
}

export default ColorPaletteWindow;
