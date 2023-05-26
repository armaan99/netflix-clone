import "./App.css";
import Row from "./Row";
import Banner from "./Banner";
import Nav from "./Nav";
import requests from "./requests";
import { useState } from "react";

function App() {
  const [trailerUrl, setTrailerUrl] = useState("");
  const [rowId, setRowId] = useState();

  const data = {
    rowId: rowId,
    setRowId: setRowId,
    trailerUrl: trailerUrl,
    setTrailerUrl: setTrailerUrl,
  };

  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title={"NETFLIX ORIGINALS"}
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow={true}
        data={data}
      />
      <Row
        title={"Trending Now"}
        fetchURL={requests.fetchTrending}
        data={data}
      />
      <Row title={"Top Rated"} fetchURL={requests.fetchTopRated} data={data} />
      <Row
        title={"Action Movies"}
        fetchURL={requests.fetchActionMovies}
        data={data}
      />
      <Row
        title={"Comedy Movies"}
        fetchURL={requests.fetchComedyMovies}
        data={data}
      />
      <Row
        title={"Horror Movies"}
        fetchURL={requests.fetchHorrorMovies}
        data={data}
      />
      <Row
        title={"Romance Movies"}
        fetchURL={requests.fetchRomanceMovies}
        data={data}
      />
      <Row
        title={"Documentaries"}
        fetchURL={requests.fetchDocumentaries}
        data={data}
      />
    </div>
  );
}

export default App;
