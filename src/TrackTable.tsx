import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
} from "@mui/material";

import { Track } from "@spotify/web-api-ts-sdk";
import React from "react";
import { TrackRow } from "./TrackRow";

interface TrackTableProps {
  tracks: Track[];
}

export const TrackTable: React.FC<TrackTableProps> = ({ tracks }) => {
  if (!tracks.length) return null;
  return (
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
