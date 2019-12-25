import React from 'react';
import { Form } from 'antd';

import ColorPicker from './ColorPicker';
import InputSlider from './InputSlider';

import {
  updateScrollbar,
  updateTrack,
  updateThumb,
} from '../modules/scrollOptions/actions';

const OptionsForm = ({ state, dispatch }: { state: any; dispatch: any }) => {
  return (
    <Form layout="vertical">
      <Form.Item label="Scrollbar">
        <Form.Item
          label="Scrollbar width"
          style={{ display: 'inline-block', width: '50%' }}
        >
          <InputSlider
            value={state.default.scrollbar.width}
            onChange={(value: any) =>
              dispatch(
                updateScrollbar({
                  name: 'width',
                  value,
                  state: 'default',
                }),
              )
            }
          />
        </Form.Item>
        <Form.Item
          label="Scrollbar color"
          style={{ display: 'inline-block', width: '50%' }}
        >
          <ColorPicker
            color={state.default.scrollbar.color}
            onChange={(color: any) =>
              dispatch(
                updateScrollbar({
                  name: 'color',
                  value: color.hex,
                  state: 'default',
                }),
              )
            }
            name="scrollbarColor"
          />
        </Form.Item>
      </Form.Item>
      <Form.Item label="Scrollbar-track">
        <Form.Item
          label="Track radius"
          style={{ display: 'inline-block', width: '50%' }}
        >
          <InputSlider
            value={state.default.track.radius}
            onChange={(value: any) =>
              dispatch(updateTrack({ name: 'radius', value, state: 'default' }))
            }
          />
        </Form.Item>
        <Form.Item
          label="Track color"
          style={{ display: 'inline-block', width: '50%' }}
        >
          <ColorPicker
            color={state.default.track.color}
            onChange={(color: any) =>
              dispatch(
                updateTrack({
                  name: 'color',
                  value: color.hex,
                  state: 'default',
                }),
              )
            }
            name="trackColor"
          />
        </Form.Item>
      </Form.Item>
      <Form.Item label="Scrollbar-thumb">
        <Form.Item
          label="Thumb radius"
          style={{ display: 'inline-block', width: '50%' }}
        >
          <InputSlider
            value={state.default.thumb.radius}
            onChange={(value: any) =>
              dispatch(updateThumb({ name: 'radius', value, state: 'default' }))
            }
          />
        </Form.Item>
        <Form.Item
          label="Thumb color"
          style={{ display: 'inline-block', width: '50%' }}
        >
          <ColorPicker
            color={state.default.thumb.color}
            onChange={(color: any) =>
              dispatch(
                updateThumb({
                  name: 'color',
                  value: color.hex,
                  state: 'default',
                }),
              )
            }
            name="thumbColor"
          />
        </Form.Item>
      </Form.Item>
    </Form>
  );
};

export default OptionsForm;
