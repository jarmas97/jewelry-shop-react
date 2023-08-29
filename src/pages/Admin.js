import Header from "../components/Header";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SERVER_URL } from "./CONSTANTS";

export default function() {

    const [loggedUser, setLoggedUser] = useState('');
    const loginError = document.getElementById("login-error");
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function login(e) {

        e.preventDefault();
        const data = {
            username: username,
            password: password
        }
        axios.post(SERVER_URL + '/login', data)
        .then(res => {
            if(res.status == 200) {
                localStorage.setItem('admin-token', res.headers.authorization);
                loginError.style.display = "none";
                window.location.reload();
            } else {
                console.log(res);
                loginError.style.display = "block";
            }
        })
        .catch(err => {
            console.log(err);
        });
    }

    async function checkToken() {

        var token = localStorage.getItem('admin-token');
        if(token !== null) {
            axios.get(SERVER_URL + '/login', {method: 'GET', headers: {'Authorization': 'Bearer ' + token}})
            .then(res => {
                if(res.status == 200) {
                    console.log("User logged in with token");
                    setLoggedUser(true);
                } else {
                    console.log(res);
                }
            })
            .catch(err => {
                console.log(err);
            })
        }
    };

    

    useEffect(() => {
        checkToken();
    }, []);

    if(loggedUser) {

        return(

            <div>
                <Header/>
                <div className="content-centered">
                    <h2>Control panel</h2>
                </div>
                
            </div>
        );
    } else {

        return (

            <div>
                <Header/>
                <div className="content-centered">
                    <h2>Log in</h2>
                    <form className="form" onSubmit={(e) => login(e)}>
                        <input 
                            placeholder="Nazwa użytkownika"
                            type="text"
                            name="username"
                            required="required"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        /><br/>
                        <input 
                            placeholder="Hasło"
                            type="password"
                            name="password"
                            required="required"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        /><br/>
                        <label id="login-error" className="error">BŁĘDNA NAZWA LUB HASŁO</label><br/>
                        <button type="submit">Zaloguj się</button>
                    </form>
                </div>
            </div>
        );
    }
    
}