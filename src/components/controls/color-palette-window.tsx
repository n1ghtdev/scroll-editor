/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import { throttle } from 'throttle-debounce';

import ColorPalette from '../../utils/color-palette';
import { hexToRgb, rgbToHex } from '../../utils/color-utils';

type Props = {
  onColorChange: (color: string) => void;
  initialColor?: string;
  onClose: () => void;
};

const wrapper = css`
  position: absolute;
  left: 0;
  top: -250px;

  & > canvas {
    border-radius: 10px;
  }
`;

function ColorPaletteWindow({ onColorChange, onClose, initialColor }: Props) {
  const ref = React.useRef<HTMLCanvasElement>(null);
  const colorPaletteRef = React.useRef<ColorPalette | null>(null);
  const [currentColor, setCurrentColor] = React.useState<number[]>(
    hexToRgb(initialColor || '#ffffff'),
  );

  React.useEffect(() => {
    onColorChange(rgbToHex(currentColor));
  }, [currentColor, onColorChange]);

  React.useEffect(() => {
    const canvas = ref.current!;
    let colorPalette = colorPaletteRef.current!;

    colorPalette = new ColorPalette(canvas);
    colorPalette.render();
    const unbindEvents = bindEvents();

    function bindEvents() {
      function handleClickOutside(e: any) {
        if (!canvas.contains(e.target)) {
          e.stopPropagation();
          onClose();
        }
      }

      function getColor(e: any) {
        const x = e.pageX - canvas.getBoundingClientRect().left;
        const y = e.pageY - canvas.getBoundingClientRect().top;

        if (x <= canvas.width && x >= 0 && y <= canvas.height && y >= 0) {
          const rgbArray = colorPalette.getColor(x, y);
          setCurrentColor(rgbArray);
        }
      }

      const throttledOnMousemove = throttle(50, getColor);

      function onMousedown(e: any) {
        getColor(e);
        window.addEventListener('mousemove', throttledOnMousemove);
      }

      function onMouseup(e: any) {
        window.removeEventListener('mousemove', throttledOnMousemove);
      }

      function onClick(e: any) {
        handleClickOutside(e);
      }

      canvas.addEventListener('mousedown', onMousedown);
      window.addEventListener('mouseup', onMouseup);
      window.addEventListener('click', onClick);

      return () => {
        window.removeEventListener('click', onClick);
        window.removeEventListener('mousemove', throttledOnMousemove);
        window.removeEventListener('mouseup', onMouseup);
        canvas.removeEventListener('mousedown', onMousedown);
      };
    }

    return () => {
      unbindEvents();
    };
  }, [onClose]);

  return (
    <div css={wrapper}>
      <canvas ref={ref} width="250" height="250"></canvas>
    </div>
  );
}

export default ColorPaletteWindow;
