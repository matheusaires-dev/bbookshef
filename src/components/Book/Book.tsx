import {
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useLibary } from "../../hooks/useLibary";
import { Bookmark, BookmarkBorder } from "@mui/icons-material";
import { useUser } from "../../hooks/userUser";

const Book = ({ data }: { data: IDataBook }) => {
  const navigate = useNavigate();
  const { setBookSelected } = useLibary();
  const { user, setUser } = useUser();

  const favorites = new Set(user?.favorites);

  const isFavorite = favorites.has(data._id);

  const handleCardClick = () => {
    setBookSelected(data);

    navigate(`/prereading`);
  };
  const handleFavoriteClick = (event: React.MouseEvent) => {
    event.stopPropagation();

    if (user?.favorites) {
      if (isFavorite) {
        const othesFavoriteIds = user?.favorites.filter(
          (id) => id !== data._id
        );

        setUser({
          ...(user as IUser),
          favorites: [...(othesFavoriteIds as string[])],
        });
      } else {
        setUser({
          ...(user as IUser),
          favorites: [...(user?.favorites as string[]), data._id],
        });
      }

    } else {
      setUser({
        ...(user as IUser),
        favorites: [data._id],
      });
    }
  };

  return (
    <Card
      onClick={handleCardClick}
      sx={{
        maxWidth: 256,
        minHeight: 570,
        position: "relative",
        cursor: "pointer",
      }}
    >
      <CardMedia
        component="img"
        alt={data.name}
        image={data.urlImage}
        loading="eager"
        sx={{ minHeight: 400 }}
      ></CardMedia>
      <CardContent>
        <Typography variant="body1" color="secondary" fontWeight="bolder">
          {data.name.length > 25
            ? `${data.name.substring(0, 25)}...`
            : data.name}
        </Typography>
        <Typography variant="body2" color="primary">
          {data.description.length > 50
            ? `${data.description.substring(0, 50)}...`
            : data.description}
        </Typography>
      </CardContent>

      <IconButton
        sx={{
          position: "absolute",
          bottom: "8px",
          right: "8px",
        }}
        onClick={handleFavoriteClick}
      >
        {isFavorite ? (
          <Bookmark color="secondary" />
        ) : (
          <BookmarkBorder color="primary" />
        )}
      </IconButton>
    </Card>
  );
};

export default Book;
