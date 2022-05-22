import React from "react";
import { useEffect } from "react";

const Dashboard = () => {
	var token = 'sv'
	var validToken = localStorage.getItem('token');
	console.log('validToken', validToken);

	useEffect(() => {
		fetch('http://localhost:8080/verifyToken', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'authorization': `Bearer ${token}`
			}
		})
			.then(response => {
				console.log(response);
				return response.json();
			})
			.then(data => {
				console.log(data);

				document.getElementById('invalid').innerText = "";
				document.getElementById('invalid').innerText = `msg: ${data.msg} \ndata: ${data.data}`;

			})
			.catch(err => {
				console.log(err);
			});


		fetch('http://localhost:8080/verifyToken', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'authorization': `Bearer ${validToken}`
			}
		})
			.then(response => {
				console.log(response);
				return response.json();
			})
			.then(data => {
				console.log(data);

				document.getElementById('valid').innerText = "";
				document.getElementById('valid').innerText = `msg: ${data.msg} \ndata: ${data.data.email}`;

			})
			.catch(err => {
				console.log(err);
			});


		fetch('http://localhost:8080/verifyToken', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',

			}
		})
			.then(response => {
				console.log(response);
				return response.json();
			})
			.then(data => {
				console.log(data);

				document.getElementById('noHeader').innerText = "";
				document.getElementById('noHeader').innerText = `msg: ${data.msg} \ndata: ${data.data}`;

			})
			.catch(err => {
				console.log(err);
			});
	}, []);
	return (
		<>
			<h1>Dashboard</h1>
			<div className="div">
				Calling with incorrect request header
				<h2 id="invalid"></h2>
			</div>
			<hr />
			<div className="div">
				Calling with correct request header
				<h2 id="valid"></h2>
			</div>
			<hr />
			<div className="div">
				Calling without setting header
				<h2 id="noHeader"></h2>
			</div>
		</>
	);
};

export default Dashboard;
