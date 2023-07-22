// import React, { useEffect, useState } from "react";

// const CustomSpotifyPlayer = ({ accessToken, currentTrack }) => {
// 	const [player, setPlayer] = useState(null);
// 	const [isPaused, setPaused] = useState(false);
// 	const ac = accessToken;
// 	useEffect(() => {
// 		const script = document.createElement("script");
// 		script.src = "https://sdk.scdn.co/spotify-player.js";
// 		script.async = true;
// 		document.body.appendChild(script);

// 		window.onSpotifyWebPlaybackSDKReady = () => {
// 			const newPlayer = new window.Spotify.Player({
// 				name: "React Spotify Player",
// 				getOAuthToken: (cb) => {
// 					cb(ac);
// 				},
// 			});
// 			setPlayer(newPlayer);
// 			newPlayer.connect().then((success) => {
// 				if (success) {
// 					console.log("Connected to Spotify player!");
// 				}
// 			});
// 		};
// 	}, [currentTrack, accessToken]);

// 	useEffect(() => {
// 		if (currentTrack?.uri && player && accessToken) {
// 			player.addListener("ready", ({ device_id }) => {
// 				player._options.id = device_id;
// 				player._options.getOAuthToken((access_token) => {
// 					fetch(`https://api.spotify.com/v1/me/player/play?device_id=${device_id}`, {
// 						method: "PUT",
// 						body: JSON.stringify({ uris: [currentTrack.uri] }),
// 						headers: {
// 							"Content-Type": "application/json",
// 							Authorization: `Bearer ${access_token}`,
// 						},
// 					})
// 						.then((response) => {
// 							if (response.ok) {
// 								player.resume();
// 							}
// 						})
// 						.catch((error) => {
// 							console.error("Error:", error);
// 						});
// 				});
// 			});
// 		}
// 	}, [player]);

// 	const handlePreviousTrack = () => {
// 		if (player !== null) {
// 			player.previousTrack();
// 		}
// 	};

// 	const handleTogglePlay = () => {
// 		if (player !== null) {
// 			player.togglePlay();
// 			setPaused(!isPaused);
// 		}
// 	};

// 	const handleNextTrack = () => {
// 		if (player !== null) {
// 			player.nextTrack();
// 		}
// 	};

// 	if (currentTrack != null) {
// 		return (
// 			<div id="spotify-player">
// 				<div className="main-wrapper">
// 					<img src={currentTrack.album.images[0].url} className="now-playing__cover" alt="" />
// 					<div className="now-playing__side">
// 						<div className="now-playing__name">{currentTrack.name}</div>
// 						<div className="now-playing__artist">{currentTrack.artists[0].name}</div>
// 						<button className="btn-spotify" onClick={handlePreviousTrack}>
// 							&lt;&lt;
// 						</button>
// 						<button className="btn-spotify" onClick={handleTogglePlay}>
// 							{isPaused ? "PLAY" : "PAUSE"}
// 						</button>
// 						<button className="btn-spotify" onClick={handleNextTrack}>
// 							&gt;&gt;
// 						</button>
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	} else {
// 		return null;
// 	}
// };

// export default CustomSpotifyPlayer;
