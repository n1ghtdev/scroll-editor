import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PropertyList from '../components/PropertyList';
import PropertyItem from '../components/PropertyItem';

function createProperty() {
  let property = { id: 0, property: 'width', value: 12 };
  const onChange = (id, value) => {
    if (property.id === id) {
      property.value = value;
    }
  };
  const onDelete = () => {
    Object.keys(property).forEach(key => delete property[key]);
  };

  return {
    property,
    onChange,
    onDelete,
  };
}

describe('PropertyItem component', () => {
  it('renders', () => {
    const { property, onChange, onDelete } = createProperty();

    const { getByText } = render(
      <PropertyList defaultActiveKey={[property.id]}>
        <PropertyItem
          key={property.id}
          header={property.property}
          property={property}
          onChange={onChange}
          onDelete={onDelete}
        />
      </PropertyList>,
    );

    expect(getByText(property.property)).toBeTruthy();
  });
  it('change property value', () => {
    const { property, onChange, onDelete } = createProperty();

    const { getByDisplayValue } = render(
      <PropertyList defaultActiveKey={[property.id]}>
        <PropertyItem
          key={property.id}
          header={property.property}
          property={property}
          onChange={onChange}
          onDelete={onDelete}
        />
      </PropertyList>,
    );

    fireEvent.change(getByDisplayValue(`${property.value}px`), {
      target: { value: 6 },
    });

    expect(property.value).toEqual(6);
  });
  it('delete property value', () => {
    const { property, onChange, onDelete } = createProperty();

    const { getByLabelText } = render(
      <PropertyList defaultActiveKey={[property.id]}>
        <PropertyItem
          key={property.id}
          header={property.property}
          property={property}
          onChange={onChange}
          onDelete={onDelete}
        />
      </PropertyList>,
    );

    fireEvent.click(getByLabelText('icon: close'));

    expect(property).toEqual({});
  });
});
