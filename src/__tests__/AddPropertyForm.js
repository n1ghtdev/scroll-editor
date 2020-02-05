import React from 'react';
import { render } from '@testing-library/react';
import AddPropertyForm from '../components/AddPropertyForm';

describe('AddPropertyForm component', () => {
  it('renders', () => {
    const onSubmit = jest.fn((property, value) => {});
    const property = {
      option: 'scrollbar',
      props: [{ id: 0, property: 'width', value: 12 }],
    };
    const { getByText } = render(
      <AddPropertyForm
        optionName={property.option}
        activeProperties={property.props.map(prop => prop.property)}
        onSubmit={onSubmit}
      />,
    );

    expect(getByText('Choose property')).toBeTruthy();
  });
});
