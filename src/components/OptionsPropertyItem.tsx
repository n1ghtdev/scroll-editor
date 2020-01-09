/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';

import { Form, Collapse } from 'antd';
import useInputComponent from './useInputComponent';
import { PropertyTypes } from '../types';
import { Property } from '../modules/scrollOptions/types';

const OptionsPropertyItem = ({
  property,
  onChange,
}: {
  property: Property;
  onChange: (id: number, value: string) => null;
}) => {
  const propertyName = property.property || 'width';

  const [Component, value, setValue] = useInputComponent(
    PropertyTypes[propertyName],
  );

  return (
    <Form.Item>
      <Component
        value={property.value}
        onChange={(value: any) =>
          onChange(property.id, value.hex ? value.hex : value)
        }
      />
    </Form.Item>
  );
};

export default OptionsPropertyItem;
