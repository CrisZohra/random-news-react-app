import { Chip } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import * as React from "react";
import CardMenu from "./PostCardMenu";
import { chipStyles } from "./Chips";
import LikesButtons from "./LikesButtons";
import icon from "/icon1.png";
import locationLogo from "/location-icon.png";

const LocationLogo = styled("img")(() => ({
  height: "25px",
}));

export default function PostCard(props) {
  const chipStyle = chipStyles.find(
    (style) => style.label.toLowerCase() === props.post.category.toLowerCase()
  );

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            WN
          </Avatar>
        }
        action={<CardMenu post={props.post} />}
        title={props.post.title}
        subheader={
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <LocationLogo src={locationLogo} alt="location icon" />
            {props.post.location}
          </Typography>
        }
      />
      <CardMedia
        component="img"
        height="194"
        image={props.post.image || icon}
        alt={props.post.title}
      />
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            whiteSpace: "nowrap",
          }}
        >
          {props.post.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <LikesButtons />

        <Chip
          label={chipStyle.label}
          color="primary"
          variant="filled"
          icon={chipStyle.icon}
          style={{
            backgroundColor: chipStyle.backgroundColor,
            color: chipStyle.color,
            fontSize: "12px",
            fontFamily: "monospace",
            marginLeft: "auto",
          }}
        />
      </CardActions>
    </Card>
  );
}