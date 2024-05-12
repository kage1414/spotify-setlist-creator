import { Track } from "@spotify/web-api-ts-sdk";
import React from "react";
import { IconButton, TableCell, TableRow, Typography } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
interface TrackRowProps {
  track: Track;
}

export const TrackRow: React.FC<TrackRowProps> = ({ track }) => {
  const imageRatio = track.album.images[0].height / track.album.images[0].width;
  return (
    <TableRow>
      <TableCell>
        <Typography>{track.name}</Typography>
      </TableCell>
      <TableCell>
        {track.artists.map((artist) => (
          <Typography>{artist.name}</Typography>
        ))}
      </TableCell>
      <TableCell>
        <Typography>{track.album.name}</Typography>
      </TableCell>
      <TableCell>
        <img
          src={track.album.images[0].url}
          height={80 * imageRatio}
          width={80}
        />
      </TableCell>
      <TableCell>
        <IconButton>
          <AddIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};
