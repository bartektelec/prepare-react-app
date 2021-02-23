import * as React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('<App>', () => {
	it('renders learn react link', () => {
		const { getByText } = render(<App />);
		const linkElement = getByText(/page has been open/i);
		expect(linkElement).toBeInTheDocument();
	});
});
