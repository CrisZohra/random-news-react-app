import { Button, Chip } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import CardMenu from "./PostCardMenu";
import { chipStyles } from "./Chips";
import LikesButtons from "./LikesButtons";
import icon from "/icon1.png";
import locationLogo from "/location-icon.png";
import { NavLink } from "react-router-dom";
import Comments from "./Comments";

const LocationLogo = styled("img")(() => ({
  height: "25px",
}));

export default function PostCard({ post }) {
  const chipStyle = chipStyles.find(
    (style) => style.label.toLowerCase() === post.category.toLowerCase()
  );
  const [toggleComments, setToggleComments] = useState(false);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            WN
          </Avatar>
        }
        action={<CardMenu post={post} />}
        title={post.title}
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
            {post.location}
          </Typography>
        }
      />
      <NavLink to={`/posts/${post.id}`}>
        <CardMedia
          component="img"
          height="194"
          image={post.image || icon}
          alt={post.title}
        />
      </NavLink>
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
          {post.description}
        </Typography>

        <Button
          onClick={() => setToggleComments((prev) => !prev)}
          sx={{
            color: "#72335b",
            margin: "5px 0",
            "&:hover": {
              color: "#72335b",
              backgroundColor: "#72335b24",
            },
          }}
        >
          {`${toggleComments ? "Hide" : "Show"} comments`}
        </Button>
        {toggleComments && <Comments postID={post.id} />}
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
