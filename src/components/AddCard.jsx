import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import * as React from "react";
import AddPostFormDialog from "./AddPostFormDialog";

export default function AddCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent sx={{ height: "100%" }}>
        <AddPostFormDialog />
      </CardContent>
    </Card>
  );
}
