import { Button, Chip } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import CardMenu from "./PostCardMenu";
import { chipStyles } from "./Chips";
import LikesButtons from "./LikesButtons";
import icon from "/icon1.png";
import locationLogo from "/location-icon.png";
import { NavLink } from "react-router-dom";
import Comments from "./Comments";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const LocationLogo = styled("img")(() => ({
  height: "25px",
}));

const StyledNavLink = styled(NavLink)`
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString("en-US", options);
};

const TruncateEllipsisTypography = styled(Typography)(({ numberOfLines }) => ({
  display: "-webkit-box",
  WebkitLineClamp: numberOfLines || 1,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "normal",
}));

const FormattedDateTypography = ({ date }) => {
  const formattedDate = formatDate(date);

  return (
    <TruncateEllipsisTypography>{formattedDate}</TruncateEllipsisTypography>
  );
};

export default function PostCard({ post }) {
  const chipStyle = chipStyles.find(
    (style) => style.label.toLowerCase() === post.category.toLowerCase()
  );
  const [toggleComments, setToggleComments] = useState(false);

  return (
    <Card
      sx={{
        maxWidth: 345,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardHeader
        avatar={<AccountCircleIcon sx={{ fontSize: "40px" }} />}
        action={<CardMenu post={post} />}
        title={
          <TruncateEllipsisTypography>{post.title}</TruncateEllipsisTypography>
        }
        subheader={
          <TruncateEllipsisTypography
            variant="body2"
            color="text.secondary"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <LocationLogo src={locationLogo} alt="location icon" />
            <TruncateEllipsisTypography>
              {post.location}
            </TruncateEllipsisTypography>
          </TruncateEllipsisTypography>
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

      <FormattedDateTypography date={post.date} />

      <CardContent>
        <StyledNavLink to={`/posts/${post.id}`}>
          <TruncateEllipsisTypography
            variant="body2"
            color="text.secondary"
            numberOfLines={2}
          >
            {post.description}
          </TruncateEllipsisTypography>
        </StyledNavLink>

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

        {chipStyle !== undefined ? (
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
        ) : null}
      </CardActions>
    </Card>
  );
}
