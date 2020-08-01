/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import Select from './controls/select';
import { ScrollProperty, PropertyKeys } from '../modules/types';

type Props = {
  addProperty: (name: PropertyKeys) => void;
  properties: ScrollProperty[];
};

const wrapper = css`
  display: flex;
  select {
    border: none;
    background-color: #fff;
    padding: 7px 5px;
    border-radius: 5px;
    flex: 1;
    margin-right: 20px;
  }
  button {
    min-width: 100px;
    background-color: #46da2e;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: bold;
  }
`;

function AddProperty({ addProperty, properties }: Props) {
  const [selected, setSelected] = React.useState<string>(properties[0].name);

  React.useEffect(() => {
    setSelected(properties[0].name);
  }, [properties]);

  return (
    <div css={wrapper}>
      <Select value={selected} onChange={(value: string) => setSelected(value)}>
        {properties.map((prop: ScrollProperty) => (
          <Select.Option value={prop.name}>{prop.name}</Select.Option>
        ))}
      </Select>
      <button onClick={() => addProperty(selected as PropertyKeys)}>add</button>
    </div>
  );
}

export default AddProperty;
