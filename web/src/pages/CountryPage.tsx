import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCountryInfo } from "../services/api";
import { Link } from "react-router-dom";
import CountryInfo from "../components/CountryInfo";
import PopulationChart from "../components/PopulationChart";
import "./CountryPage.scss";
interface CountryInfo {
  name: string;
  population: { year: number; value: number }[];
  flag: string;
  borders: { countryCode: string; commonName: string }[];
}

export default function CountryPage() {
  const { code } = useParams();
  const [country, setCountry] = useState<CountryInfo | null>(null);

  useEffect(() => {
    if (code) {
      getCountryInfo(code)
        .then((data) => {
          console.log("Country data:", data);
          setCountry(data);
        })
        .catch(console.error);
    }
  }, [code]);

  if (!country) return <p>Loading...</p>;
  return (
    <div className="chart-container">
      <Link to="/" className="home-button">
        Home page
      </Link>
      <div className="separator-line"></div>
      <CountryInfo country={country} />
      <h3>Population dynamics:</h3>
      <div className="chart">
        <PopulationChart populationData={country.population || []} />
      </div>
    </div>
  );
}
