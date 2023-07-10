import { Grid, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import useNews from "../hooks/useNews";
import NewsItem from "./NewsItem";

const ListNews = () => {
  const { newsDB, quantityNews, pagination, handleChangePage }: any = useNews();
  const totalPage = Math.ceil(quantityNews / 20);

  return (
    <>
      <Typography align="center" marginY={5} variant="h3" component="h2">
        Last News
      </Typography>
      <Grid container spacing={2}>
        {newsDB.length > 0 &&
          newsDB.map((news: any) => (
            <NewsItem
              key={`new-item-${news.source?.id}-${news.publishedAt}`}
              item={news}
            />
          ))}
      </Grid>
      <Stack
        spacing={2}
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        marginY={5}
      >
        <Pagination
          count={totalPage}
          color="secondary"
          onChange={handleChangePage}
          page={pagination}
        />
      </Stack>
    </>
  );
};

export default ListNews;
