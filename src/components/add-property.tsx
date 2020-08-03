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
    flex: 1;
    padding: 7px 5px;
    margin-right: 10px;
  }
  button {
    min-width: 100px;
    background-color: #4834ec;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: bold;
    transition: opacity 250ms;

    &:hover {
      opacity: 0.7;
    }
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
