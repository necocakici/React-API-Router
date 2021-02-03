import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Country from "./components/Country";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((res) => setCountries(res.data));
  }, []);

  return (
    <Router>
      <div className="App">
        <h1>React Router & API çalışması</h1>
        <Route
          path="/"
          exact
          render={() =>
            countries.map((country, i) => (
              <div key={i}>
                <Link to={`country/${country.alpha3Code}`}>
                  <h3>{country.name}</h3>
                </Link>
              </div>
            ))
          }
        />
        <Route
          path="/country/:code"
          render={(renderProps) => {
            const country = countries.find(
              (country) => country.alpha3Code === renderProps.match.params.code
            );
            return <Country {...renderProps} country={country} />;
          }}
        />
      </div>
    </Router>
  );
}

export default App;
