import BankCard from '../../cards/bank-card/bank-card';
import type { BankListProps } from './bank-list.types';
import './bank-list.styles.scss';

const BankList = ({ banks }: BankListProps) => {
	return (
		<div className='bank-list'>
			{banks.map((bank, idx) => (
				<BankCard bank={bank} key={idx} />
			))}
		</div>
	);
};

export default BankList;
