import { useEffect, useState } from 'react';
import './App.scss';
import BankList from './components/lists/bank-list/bank-list';

function App() {
	const [banks, setBanks] = useState([]);

	useEffect(() => {
		fetch('https://dev.obtenmas.com/catom/api/challenge/banks')
			.then((response) => response.json())
			.then((banks) => setBanks(banks));
	}, []);

	return (
		<div className='App'>
			<h1 className='app-title'>Banks</h1>

			<BankList banks={banks} />
		</div>
	);
}

export default App;
