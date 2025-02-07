import { Request, Response } from "express";
import {
  fetchAvailableCountries,
  fetchCountryInfo,
} from "../services/countryService";

export const getAvailableCountries = async (req: Request, res: Response) => {
  try {
    const countries = await fetchAvailableCountries();
    res.json(countries);
  } catch (error) {
    res.status(500).json({ message: "Error fetching countries", error });
  }
};

export const getCountryInfo = async (req: Request, res: Response) => {
  const { code } = req.params;
  try {
    const countryInfo = await fetchCountryInfo(code);
    res.json(countryInfo);
  } catch (error) {
    res.status(500).json({ message: "Error fetching country info", error });
  }
};
