import type { Bank } from '../../../types/bank-object';

import { render, screen } from '@testing-library/react';
import BankList from './bank-list';

describe('Render BankList', () => {
	it('Should render correctly', () => {
		const banks: Bank[] = [
			{
				age: 10,
				bankName: 'TestBank name',
				description: 'TestBank desc',
				url: 'http://storage.com/path/to/image'
			}
		];

		render(<BankList banks={banks} />);

		const bankName = screen.getByText(/TestBank name/i);
		const bankDesc = screen.getByText(/TestBank desc/i);
		const bankActiveSince = screen.getByText(/Activo desde 2013/i);

		expect(bankName).toBeInTheDocument();
		expect(bankDesc).toBeInTheDocument();
		expect(bankActiveSince).toBeInTheDocument();
	});
});
