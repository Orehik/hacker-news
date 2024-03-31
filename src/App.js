import {NewsItem} from "./NewsItem/NewsItem";
import {useEffect, useState} from "react";

function App() {
  const [news, setNews] = useState(JSON.parse(window.localStorage.getItem("keyNews")) || [])
  let newsCounter = news.length;

  const increment = () => {
    newsCounter++;
    const newNews = {
      title: `Новость № ${newsCounter}`,
      url: "www.example.com",
      username: `Пользователь ${newsCounter}`,
      data: `${newsCounter}.03.24`,
      score: `${newsCounter}`,
      id: `${newsCounter}`
    };
    setNews((prevNews) => [...prevNews, newNews]);
  };

  const decrement = () => {
    setNews((prevNews) => {
      if (prevNews.length > 0) {
        const updatedNews = [...prevNews];
        updatedNews.pop();
        return updatedNews;
      }
      return prevNews;
    });
  };

  useEffect(() => {
      window.localStorage.setItem("keyNews", JSON.stringify(news))
  }, [news]);

  return (
    <>
      <div>Колличество новостей {news.length}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      {news.map((item) => {
        return (
          <NewsItem
            key={item.id}
            title={item.title}
            url={item.url}
            username={item.username}
            data={item.data}
            score={item.score}
          />
        )
      })}
    </>
  );
}

export default App;
