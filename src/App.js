import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      ></Row>
      <Row title="Trending Now" fetchURL={requests.fetchTrending}></Row>
      <Row title="Top Rated" fetchURL={requests.fetchTopRated}></Row>
      <Row title="Action" fetchURL={requests.fetchActionMovies}></Row>
      <Row title="Comedy" fetchURL={requests.fetchComedyMovies}></Row>
      <Row title="Horror" fetchURL={requests.fetchHorrorMovies}></Row>
      <Row title="Romance" fetchURL={requests.fetchRomanceMovies}></Row>
      <Row title="Documentaries" fetchURL={requests.fetchDocumantaries}></Row>
    </div>
  );
}

export default App;
