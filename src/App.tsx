import React, { useState } from "react";
import {
  Button,
  CircularProgress,
  Grid,
  Pagination,
  TextField,
} from "@mui/material";
import axios from "axios";
import { Track } from "@spotify/web-api-ts-sdk";
import { TrackTable } from "./TrackTable";

function App() {
  const [search, setSearch] = useState("");
  const [method] = useState("GET");
  const [tracks, setTracks] = useState<Track[]>([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const getData = (page: number) => {
    setLoading(true);
    axios({
      method: "GET",
      params: { search, method, page: page - 1 },
      url: "/api/search",
    })
      .then((res) => {
        setTracks(res.data.tracks.items);
        setCount(Math.floor(res.data.tracks.total / 20));
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleSearch = () => {
    setPage(1);
    setTracks([]);
    getData(1);
  };

  const clearResponse = () => {
    setTracks([]);
  };

  return (
    <Grid container>
      <Grid container item xs={12}>
        <Grid item>
          <Button onClick={handleSearch}>Search</Button>
        </Grid>
        <Grid item>
          <Button onClick={clearResponse}>Clear</Button>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <TextField
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          fullWidth
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
      </Grid>

      {loading ? (
        <Grid
          container
          item
          justifyContent={"center"}
          alignItems={"center"}
          height={"50vh"}
        >
          <CircularProgress />
        </Grid>
      ) : (
        <>
          <Grid container item>
            <TrackTable tracks={tracks} />
          </Grid>
          <Grid container item>
            <Pagination
              count={count}
              page={page}
              onChange={(e, newPage) => {
                if (newPage !== page) {
                  setPage(newPage);
                  getData(newPage);
                }
              }}
            />
          </Grid>
        </>
      )}
    </Grid>
  );
}

export default App;
