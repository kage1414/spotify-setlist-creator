import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Typography,
} from "@mui/material";

import { Track } from "@spotify/web-api-ts-sdk";
import React from "react";
import { TrackRow } from "./TrackRow";

interface TrackTableProps {
  tracks: Track[];
  noResults: boolean;
}

export const TrackTable: React.FC<TrackTableProps> = ({
  tracks,
  noResults,
}) => {
  if (!tracks.length && !noResults) return null;

  return noResults ? (
    <Typography>No Results Found</Typography>
  ) : (
    <TableContainer>
      <Table>
        <TableHead>
          <TableCell>Title</TableCell>
          <TableCell>Artist</TableCell>
          <TableCell>Album</TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
        </TableHead>
        <TableBody>
          {tracks.map((track, idx) => (
            <TrackRow track={track} key={`${track.id}-${idx}`} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
