/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import { throttle } from 'throttle-debounce';

type Props = {
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
};

const slider = css`
  width: 100%;
  position: relative;
  height: 12px;
  touch-action: none;
  cursor: pointer;
  padding: 4px 0;
`;
const rail = css`
  position: absolute;
  height: 4px;
  width: 100%;
  border-radius: 2px;
  background-color: #ebebeb;
`;
const track = css`
  left: 0%;
  right: auto;

  background-color: #46d92e;
  border-radius: 4px;
  position: absolute;
  height: 4px;
`;
const thumb = css`
  right: auto;
  transform: translateX(-50%);
  position: absolute;
  width: 14px;
  height: 14px;
  margin-top: -5px;
  background-color: #46d92e;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  cursor: pointer;
`;

function Range(props: Props) {
  // TODO: implement min
  const { min, max, value, onChange } = props;
  const ref = React.useRef<HTMLDivElement>(null);
  const [isMousedown, setIsMousedown] = React.useState(false);

  React.useEffect(() => {
    const currentRef = ref.current;

    const left = currentRef?.getBoundingClientRect().left || 0;
    const width = currentRef?.getBoundingClientRect().width || 0;

    function onMousedown(e: any) {
      setIsMousedown(true);
      onChange(((e.clientX - left) / width) * max);
    }

    function onMouseup() {
      if (isMousedown) {
        setIsMousedown(false);
      }
    }

    const onMousemove = throttle(20, (e: any) => {
      // checking if clicked on ref element
      // and if clientX not greater than width of ref element
      if (isMousedown && e.clientX <= width + left && e.clientX >= left) {
        onChange(((e.clientX - left) / width) * max);
      }
    });

    if (currentRef) {
      currentRef.addEventListener('mousedown', onMousedown);
      window.addEventListener('mouseup', onMouseup);
      window.addEventListener('mousemove', onMousemove);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('mousedown', onMousedown);
        window.removeEventListener('mouseup', onMouseup);
        window.removeEventListener('mousemove', onMousemove);
      }
    };
  }, [max, isMousedown, onChange]);

  const width = (value / max) * 100 > 100 ? 100 : (value / max) * 100;

  return (
    <div css={slider} ref={ref}>
      <div css={rail}></div>
      <div css={track} style={{ width: `${width}%` }}></div>
      <div css={thumb} style={{ left: `${width}%` }}></div>
    </div>
  );
}

export default Range;
