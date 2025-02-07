import axios from "axios";

// Типы данных для каждого API
interface BorderData {
  commonName: string;
  borders: string[];
}

interface PopulationItem {
  country: string;
  populationCounts: number[];
}

interface PopulationData {
  data: PopulationItem[]; // Теперь data является массивом PopulationItem
}

interface FlagItem {
  name: string;
  flag: string;
}

interface FlagData {
  data: FlagItem[]; // Теперь data является массивом FlagItem
}

// Функция для получения доступных стран
export const fetchAvailableCountries = async (): Promise<any> => {
  const { data }: { data: string[] } = await axios.get(
    "https://date.nager.at/api/v3/AvailableCountries"
  );
  return data;
};

// Функция для получения информации о стране по её коду
export const fetchCountryInfo = async (
  countryCode: string
): Promise<{
  name: string;
  borders: string[];
  population: number[];
  flag: string;
}> => {
  const [borderData, populationData, flagData] = await Promise.all([
    axios.get<BorderData>(
      `https://date.nager.at/api/v3/CountryInfo/${countryCode}`
    ),
    axios.get<PopulationData>(
      "https://countriesnow.space/api/v0.1/countries/population"
    ),
    axios.get<FlagData>(
      "https://countriesnow.space/api/v0.1/countries/flag/images"
    ),
  ]);

  const borders: string[] = borderData.data.borders || [];

  // Извлекаем данные о населении из массива
  const population: number[] =
    populationData.data.data.find(
      (c: PopulationItem) => c.country === borderData.data.commonName
    )?.populationCounts || [];

  const flag: string =
    flagData.data.data.find(
      (c: FlagItem) => c.name === borderData.data.commonName
    )?.flag || "";

  return { name: borderData.data.commonName, borders, population, flag };
};
