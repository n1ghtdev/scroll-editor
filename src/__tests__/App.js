import React from 'react';
import { render, getByText } from '@testing-library/react';
import App from '../components/App';

describe('render app', () => {
  it('renders without crash', () => {
    const { container } = render(<App />);
    const formLabel = getByText(container, 'scrollbar');

    expect(formLabel).toHaveTextContent(/scrollbar/);
  });
});
