'use client';
import { useState } from 'react';

// 	const { email, password } = Object.fromEntries(data);
// 	const response = await fetch('http://localhost:4200/api/auth/register', {
// 		method: 'POST',
// 		body: JSON.stringify({
// 			email: email,
// 			password: password,
// 		}),
// 		headers: new Headers({ 'content-type': 'application/json' }),
// 	});
// 	const date = await response.json();
// 	console.log(date);
// };

export default function Home() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [data, setDate] = useState();

	const fetchRegister = async () => {
		const response = await fetch('http://localhost:4200/api/auth/register', {
			method: 'POST',
			body: JSON.stringify({
				email: email,
				password: password,
			}),
			headers: new Headers({ 'content-type': 'application/json' }),
		});
		const date = await response.json();
		setDate(date);
	};

	const onsubmitHandler = async () => {
		await fetchRegister();
	};
	console.log(data);
	return (
		<>
			<form
				style={{ display: 'flex', flexDirection: 'column' }}
				onSubmit={(e) => e.preventDefault()}
				// action={loginIn}
			>
				<input
					type='text'
					placeholder='email'
					name='email'
					onChange={(e) => {
						setEmail(e.target.value);
					}}
				/>
				<input
					type='text'
					placeholder='password'
					name='password'
					onChange={(e) => {
						setPassword(e.target.value);
					}}
				/>
				<input
					type='submit'
					value='login'
					onClick={onsubmitHandler}
				/>
			</form>
			<div>email {data?.user ? data?.user?.email : data.message}</div>
			<div className=''>id {data?.user ? data?.user?.id : data.message}</div>
		</>
	);
}
