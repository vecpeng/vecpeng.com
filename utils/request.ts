import { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_ACCESS_TOKEN } from "./constants";

export const getAccessToken = async () => {

    // const res = await fetch("https://accounts.spotify.com/api/token", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/x-www-form-urlencoded",
    //         "Authorization": `Basic ${Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString("base64")}`,
    //     },
    //     body: {

    //     }
    // })
}

export const getCurrentPlayingTrack = async () => {
    return fetch("https://api.spotify.com/v1/me/player/currently-playing", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${SPOTIFY_ACCESS_TOKEN}`,
            "Host": "api.spotify.com",
        },
    })
    .then(res => {
         if (res.ok) {
            return res.json()
         }
    })
    .catch((error) => {
        return Promise.reject(error);
    });
}