import axios from "axios";
import { useState, useEffect, createContext } from "react";

const NewsContext = createContext({});

const NewsProvider = ({ children }: any) => {
  const [category, setCategory] = useState("general");
  const [newsDB, setNewsDB] = useState([{}]);
  const [pagination, setPagination] = useState(1);
  const [quantityNews, setQuantityNews] = useState(0);

  useEffect(() => {
    const queryAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&page=${pagination}&category=${category}&apiKey=${
        import.meta.env.VITE_API_KEY
      }`;
      const { data } = await axios(url);
      setNewsDB(data.articles);
      setQuantityNews(data.totalResults);
    };
    queryAPI();
  }, [category, pagination]);

  const handleChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
    setPagination(1);
  };

  const handleChangePage = (e: any, value: number) => {
    setPagination(value);
  };

  return (
    <NewsContext.Provider
      value={{
        category,
        newsDB,
        quantityNews,
        pagination,
        handleChangeCategory,
        handleChangePage,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export { NewsProvider };

export default NewsContext;
