/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import Select from './controls/select';
import { ScrollProperty } from '../modules/types';

type Props = {
  onAddProperty: () => void;
  properties: ScrollProperty[];
};

const wrapper = css``;

function AddProperty({ properties }: Props) {
  const [selected, setSelected] = React.useState<string>(properties[0].name);

  return (
    <div css={wrapper}>
      <Select value={selected} onChange={(value: string) => setSelected(value)}>
        {properties.map((prop: ScrollProperty) => (
          <Select.Option value={prop.name}>{prop.name}</Select.Option>
        ))}
      </Select>
      <button>add</button>
    </div>
  );
}

export default AddProperty;
