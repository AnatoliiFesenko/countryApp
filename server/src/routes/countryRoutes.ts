import express from "express";
import {
  getAvailableCountries,
  getCountryInfo,
} from "../controllers/countryControllers";

const router = express.Router();

router.get("/countries", getAvailableCountries);
router.get("/country/:code", getCountryInfo);

export default router;
