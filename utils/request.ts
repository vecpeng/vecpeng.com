import {
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET,
  SPOTIFY_REFRESH_TOKEN,
} from "./constants";
import querystring from "querystring";

export const getAccessToken = async () => {
  return fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${Buffer.from(
        `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
      ).toString("base64")}`,
    },
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token: SPOTIFY_REFRESH_TOKEN,
    }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return res;
      }
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

export const getCurrentPlayingTrack = async (accessToken: string) => {
  return fetch("https://api.spotify.com/v1/me/player/currently-playing", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
      Host: "api.spotify.com",
    },
  })
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else if (res.status === 204) {
        return res;
      }
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

export const getUserQueue = async (accessToken: string) => {
  return fetch("https://api.spotify.com/v1/me/player/queue", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
      Host: "api.spotify.com",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};
