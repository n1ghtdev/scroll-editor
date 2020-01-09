/** @jsx jsx */
import { Collapse } from 'antd';
import { css, jsx } from '@emotion/core';

import useInputComponent from './useInputComponent';
import { PropertyTypes } from '../types';
import { Property } from '../modules/scrollOptions/types';

const PropertyItem = ({
  property,
  onChange,
  ...props
}: {
  property: Property;
  onChange: (id: number, value: string) => null;
  [key: string]: any;
}) => {
  // BUG: set to 'width' if no value
  // there is always should be value for property, but 'property' typed
  // as optional to make action work.
  // TODO: propably should fix reducer/action typings
  const propertyName = property.property || 'width';

  // useInputComponent also returns state value and function for set state
  // but in this case onChange event handler uses reducer dispatch
  // and reducer value
  const [Component] = useInputComponent(PropertyTypes[propertyName]);

  return (
    <Collapse.Panel
      key={props.key}
      header={props.header}
      {...props}
      css={css`
        text-transform: uppercase;
        font-size: 12px;
      `}
    >
      <Component
        value={property.value}
        onChange={(value: any) =>
          onChange(property.id, value.hex ? value.hex : value)
        }
      />
    </Collapse.Panel>
  );
};

export default PropertyItem;
