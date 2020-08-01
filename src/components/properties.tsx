/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { ScrollProperty, PropertyKeys } from '../modules/types';
import Property from './property';
import AddProperty from './add-property';
import InputBorder from './controls/input-border';
import InputColor from './controls/input-color';
import InputRange from './controls/input-range';

type Props = {
  properties: any;
  updateProperty: any;
  addProperty: (name: PropertyKeys) => void;
  removeProperty: () => void;
};

const styles = css`
  display: flex;
  margin: 0 -10px;
  flex-wrap: wrap;
`;

function Properties(props: Props) {
  const { properties, updateProperty, addProperty, removeProperty } = props;

  const inActiveProperties = properties.filter(
    (prop: ScrollProperty) => !prop.active,
  );

  function renderProperty(prop: ScrollProperty) {
    const type = prop.name;

    switch (type) {
      case 'border':
        return (
          <InputBorder
            value={prop.value}
            onChange={(value: any) =>
              updateProperty({
                name: type,
                value: {
                  ...prop.value,
                  ...value,
                },
              })
            }
          />
        );
      case 'background-color':
        return (
          <InputColor
            value={prop.value}
            onChange={(color: string) =>
              updateProperty({
                name: type,
                value: color,
              })
            }
          />
        );
      case 'width':
      case 'border-radius':
        return (
          <InputRange
            value={prop.value}
            onChange={(value: number) =>
              updateProperty({
                name: type,
                value: Math.round(value),
              })
            }
          />
        );
      default:
        return null;
    }
  }
  return (
    <div css={styles}>
      {properties.map((prop: ScrollProperty) =>
        prop.active ? (
          <Property title={prop.name}>{renderProperty(prop)}</Property>
        ) : null,
      )}
      {inActiveProperties.length > 0 ? (
        <Property title="add new property">
          <AddProperty
            addProperty={addProperty}
            properties={inActiveProperties}
          />
        </Property>
      ) : null}
    </div>
  );
}

export default Properties;
