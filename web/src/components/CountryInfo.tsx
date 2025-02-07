import { Link } from "react-router-dom";
import "./CountryInfo.scss";
interface PopulationData {
  year: number;
  value: number;
}

interface Border {
  countryCode: string;
  commonName: string;
}

interface Country {
  name: string;
  flag: string;
  borders: Border[];
  population: PopulationData[];
}

interface CountryInfoProps {
  country: Country;
}

export default function CountryInfo({ country }: CountryInfoProps) {
  return (
    <div className="country-info">
      <h1>
        {country.name}
        <img src={country.flag} alt={`Flag ${country.name}`} />
      </h1>

      <h3>Neighborhood countries:</h3>

      {Array.isArray(country.borders) && country.borders.length > 0 ? (
        <ul>
          {country.borders.map((border: any, index: number) => (
            <li key={index}>
              <Link to={`/country/${border.countryCode}`}>
                {`${border.commonName} (${border.countryCode})` ||
                  "Unknown country"}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>There are no common borders</p>
      )}
    </div>
  );
}
