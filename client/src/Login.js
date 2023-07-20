import React from "react";
import { Container } from "react-bootstrap";

const CLIENT_ID = "b96044a084a542c691fe9b0eca9684de";
const REDIRECT_URI = "http://localhost:3000";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "code";
const SCOPES = "streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";
const AUTH_URL = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES}`;
const Login = ({ setCode }) => {
	const handleClick = () => {
		if (new URLSearchParams(window.location.search).get("code") !== null) {
			setCode(new URLSearchParams(window.location.search).get("code"));
		}
	};

	return (
		<div>
			<button onClick={handleClick}>Login to Spotify</button>
		</div>
	);
};
export default Login;
