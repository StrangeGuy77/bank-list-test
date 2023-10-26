import type { BankCardProps } from './bank-card.types';
import './bank-card.styles.scss';

const BankCard = ({ bank }: BankCardProps) => {
	const { age, bankName, description, url } = bank;
	const activeSince = new Date().getFullYear() - age;

	return (
		<div className='bank-card'>
			<img alt={`bank ${bankName}`} src={url} />
			<div className='bank-info'>
				<h2>{bankName}</h2>
				<p> {description}</p>
				<p>Activo desde {activeSince}</p>
			</div>
		</div>
	);
};

export default BankCard;
