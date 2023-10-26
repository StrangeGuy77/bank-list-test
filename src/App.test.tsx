import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders the application', () => {
	render(<App />);

	const linkElement = screen.getByText(/Banks/i);

	expect(linkElement).toBeInTheDocument();
});
