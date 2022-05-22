import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
const Login = () => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	const onSubmitLogin = (e) => {
		e.preventDefault();

		const data = {
			email: email,
			password: password,
		};
		fetch('http://localhost:8080/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then(async (response) => {
				const res = await response.json();
				if (response.status !== 200 || !data) {
					window.alert('failed');
				} else {
					console.log(res);
					window.localStorage.setItem('token', res.token);
					navigate('/dashboard');
				}
			})
			.catch((error) => {
				console.log('error login', error);
			});
	};


	return (
		<div>
			<h1>Login Page</h1>
			<p>Use a javascript library to persist the JWT Bearer token <br />

				Write  a small Html & javascript library to prove that</p>
			<div id="login">
				<form>


					<label>User Email*</label>
					<br />
					<input
						type='email'
						autoFocus
						required
						placeholder='Student User Email'
						value={email}
						onChange={(e) => {
							e.preventDefault();
							setEmail(e.target.value);
						}}
					></input>
					<br />
					<label>User Password*</label>
					<br />
					<input
						type='password'
						autoFocus
						required
						placeholder='User Password'
						value={password}
						onChange={(e) => {
							e.preventDefault();
							setPassword(e.target.value);
						}}
					></input>
					<button
						type={'submit'}
						onClick={(e) => onSubmitLogin(e)}
					>
						Login
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
