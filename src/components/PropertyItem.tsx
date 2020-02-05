/** @jsx jsx */
import { Collapse, Icon } from 'antd';
import { css, jsx } from '@emotion/core';

import useInputComponent from './useInputComponent';
import { PropertyTypes } from '../types';
import { Property } from '../modules/types';

const PropertyItem = ({
  property,
  onChange,
  onDelete,
  ...props
}: {
  property: Property;
  onChange: (id: number, value: string) => void;
  onDelete: () => void;
  [key: string]: any;
}) => {
  // BUG: set to 'width' if no value
  // there is always should be value for property, but 'property' typed
  // as optional to make action work.
  // TODO: propably should fix reducer/action typings
  const propertyName = property.property || 'width';

  const [Component] = useInputComponent(PropertyTypes[propertyName]);

  const handleDelete = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    onDelete();
  };

  return (
    <Collapse.Panel
      key={props.key}
      header={props.header}
      extra={
        <Icon
          onClick={handleDelete}
          style={{ fontSize: '16px' }}
          type="close"
        />
      }
      {...props}
      css={css`
        text-transform: uppercase;
        font-size: 12px;
      `}
    >
      <Component
        value={property.value}
        onChange={(value: any) => {
          onChange(
            property.id,
            value.hex ? value.hex : value.target ? value.target.value : value,
          );
        }}
      />
    </Collapse.Panel>
  );
};

export default PropertyItem;
