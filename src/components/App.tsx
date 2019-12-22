/** @jsx jsx */
import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Grid, Form, Button } from 'semantic-ui-react';
import { css, jsx } from '@emotion/core';
import ColorPicker from './ColorPicker';

const App = () => {
  // add state to each (:hover, :active)
  const [isColorPickerActive, setIsColorPickerActive] = React.useState(false);
  const [scrollOptions, setScrollOptions] = React.useState({
    scrollbarWidth: 14,
    scrollbarColor: 'green',
    trackColor: 'red',
    trackRadius: 0,
    thumbColor: 'blue',
    thumbRadius: 0,
  });

  const onChange = (evt: React.FormEvent<EventTarget>): void => {
    const target = evt.target as HTMLInputElement;
    setScrollOptions(opts => ({ ...opts, [target.name]: target.value }));
  };

  const onColorChange = (color: any, state: string) => {
    console.log(color);

    setScrollOptions(opts => ({ ...opts, [state]: color.hex }));
  };
  console.log(scrollOptions.scrollbarColor);
  // TODO: move form.field and label to ColorPicker
  return (
    <Container>
      <Grid divided="vertically">
        <Grid.Row columns={1}>
          <Grid.Column>Header/Title of app</Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Form>
              <Form.Group>
                <Form.Input
                  name="scrollbarWidth"
                  value={scrollOptions.scrollbarWidth}
                  onChange={e => onChange(e)}
                  label="Scrollbar width"
                />
                <Form.Field>
                  <label>Scrollbar color</label>
                  <ColorPicker
                    color={scrollOptions.scrollbarColor}
                    onChange={onColorChange}
                    name="scrollbarColor"
                    buttonText="Change scrollbar color"
                  />
                </Form.Field>
              </Form.Group>
              <Form.Group>
                <Form.Input
                  name="trackRadius"
                  value={scrollOptions.trackRadius}
                  onChange={e => onChange(e)}
                  label="Track radius"
                />
                <Form.Field>
                  <label>Track color</label>
                  <ColorPicker
                    color={scrollOptions.trackColor}
                    onChange={onColorChange}
                    name="trackColor"
                    buttonText="Change track color"
                  />
                </Form.Field>
              </Form.Group>
              <Form.Group>
                <Form.Input
                  name="thumbRadius"
                  value={scrollOptions.thumbRadius}
                  onChange={e => onChange(e)}
                  label="Thumb radius"
                />
                <Form.Field>
                  <label>Thumb color</label>
                  <ColorPicker
                    color={scrollOptions.thumbColor}
                    onChange={onColorChange}
                    name="thumbColor"
                    buttonText="Change thumb color"
                  />
                </Form.Field>
              </Form.Group>
            </Form>
          </Grid.Column>
          <Grid.Column>
            Scroll preview/code
            <div
              css={css`
                height: 100%;
                width: 100%;
                background-color: #f5f5f5;
                overflow-y: scroll;
                &::-webkit-scrollbar-track {
                  background-color: ${scrollOptions.trackColor};
                  border-radius: ${scrollOptions.trackRadius}px;
                }
                &::-webkit-scrollbar {
                  width: ${scrollOptions.scrollbarWidth}px;
                  background-color: ${scrollOptions.scrollbarColor};
                }
                &::-webkit-scrollbar-thumb {
                  background-color: ${scrollOptions.thumbColor};
                  border-radius: ${scrollOptions.thumbRadius}px;
                }
              `}
            >
              <div
                css={css`
                  min-height: 125%;
                `}
              ></div>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default App;
