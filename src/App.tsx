import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Routes/Home.tsx";
import Search from "./Routes/Search.tsx";
import Tv from "./Routes/Tv.tsx";
import Header from "./Routes/Components/Header.tsx";
import Footer from "./Routes/Components/Footer.tsx";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/tv">
          <Tv />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path={["/", "/movie/:find/:movieId"]}>
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
