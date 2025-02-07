import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCountries } from "../services/api";

export default function HomePage() {
  const [countries, setCountries] = useState<Country[]>([]);

  interface Country {
    name: string;
    countryCode: string;
  }

  useEffect(() => {
    getCountries()
      .then((data) => {
        console.log("Country data:", data);
        setCountries(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>County list:</h1>
      <ul>
        {countries.map((country: Country, index: number) => (
          <li key={country.countryCode || index}>
            <Link to={`/country/${country.countryCode}`}>
              {country.name} ({country.countryCode})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
