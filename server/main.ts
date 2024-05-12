import express from "express";
import { SpotifyApi } from "@spotify/web-api-ts-sdk";

export const app = express();

const sdk = SpotifyApi.withClientCredentials(
  process.env.SPOTIFY_CLIENT_ID ?? "",
  process.env.SPOTIFY_CLIENT_SECRET ?? ""
);

app.get("/api/search", async ({ query: { search, method, page } }, res) => {
  if (
    search &&
    method &&
    typeof search === "string" &&
    typeof method === "string"
  ) {
    const offset = Number(page) * 20;
    const response = await sdk.search(
      search,
      ["artist", "album", "track"],
      undefined,
      20,
      offset
    );

    res.send(response).end();
  } else {
    res.send("Hello world!").end();
  }
});
