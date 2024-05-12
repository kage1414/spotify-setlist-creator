import { Grid, IconButton, Tooltip, Typography } from "@mui/material";
import { Track } from "@spotify/web-api-ts-sdk";
import AddIcon from "@mui/icons-material/Add";
import React from "react";

interface TrackProps {
  track: Track;
}

export const TrackItem: React.FC<TrackProps> = ({
  track: { name, album, artists },
}) => {
  const imageRatio = album.images[0].height / album.images[0].width;
  return (
    <Grid
      container
      item
      minHeight={"100px"}
      border={"1px black solid"}
      margin={2}
      alignItems={"center"}
      padding={1}
    >
      <Grid item xs={2}>
        <Typography>{name}</Typography>
      </Grid>
      <Grid item xs={2}>
        {artists.map(({ name, id }, idx) => (
          <Typography key={`${id}-${idx}`}>{name}</Typography>
        ))}
      </Grid>
      <Grid item xs={2}>
        <img src={album.images[0].url} height={80 * imageRatio} width={80} />
      </Grid>
      <Grid item xs={5}>
        {album.name}
      </Grid>
      <Grid item>
        <Tooltip title={"Add to setlist"}>
          <IconButton>
            <AddIcon />
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  );
};
