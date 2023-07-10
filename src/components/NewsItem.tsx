import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
  Grid,
  Button,
} from "@mui/material";

type News = {
  author: string;
  content: string | null;
  description: string | null;
  publishedAt: string;
  source: { id: string; name: string };
  title: string;
  url: string;
  urlToImage: string | undefined;
};

type Props = {
  item: News;
};

const NewsItem = ({ item }: Props) => {
  return (
    <Grid item md={6} lg={4}>
      <Card>
        {item.urlToImage && (
          <CardMedia
            component="img"
            alt={`Image of the news ${item.title}`}
            image={item.urlToImage}
            height={"250"}
            sx={{
              background: "#cfcfcf",
            }}
          />
        )}
        <CardContent>
          {item.source?.name && (
            <Typography variant="body1" color="error">
              {item.source?.name}
            </Typography>
          )}
          {item.title && (
            <Typography variant="h5" component={"div"}>
              {item.title}
            </Typography>
          )}
          {item.description && (
            <Typography variant="body2">{item.description}</Typography>
          )}
        </CardContent>
        <CardActions>
          <Link
            href={item.url}
            target="_blank"
            variant="button"
            color="primary"
            width={"100%"}
            textAlign={"center"}
            sx={{
              textDecoration: "none",
            }}
          >
            <Button fullWidth variant="contained" color="secondary">
              Read
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};
export default NewsItem;
