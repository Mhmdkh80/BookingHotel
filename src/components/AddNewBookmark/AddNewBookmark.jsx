import { useNavigate } from "react-router-dom";
import useUrlLocation from "../../hooks/useUrlLocation";
import { useEffect, useState } from "react";
import axios from "axios";

const BASE_GEOCODING_URL =
  "https://us1.api-bdc.net/data/reverse-geocode-client";

function AddNewBookmark() {
  const navigate = useNavigate();
  const [lat, lng] = useUrlLocation();
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");

  useEffect(() => {
    async function fetchLocationData() {
      try {
        const { data } = await axios.get(
          `${BASE_GEOCODING_URL}?latitude=${lat}&longitude=${lng}`
        );
        setCityName(data.city || data.locality || "");
        setCountry(data.countryName);
      } catch (error) {}
    }
    fetchLocationData();
  }, [lat, lng]);

  return (
    <div>
      <h2>Bookmark new location</h2>
      <form className="form">
        <div className="formControl">
          <label htmlFor="CityName">CityName</label>
          <input
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            type="text"
            name="CityName"
            id="CityName"
          />
          <label htmlFor="Country">Country</label>
          <input
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            type="text"
            name="Country"
            id="Country"
          />
        </div>
        <div className="buttons">
          <button
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
            className="btn btn--back"
          >
            {" "}
            &larr; Back
          </button>
          <button className="btn btn--primary"> Add</button>
        </div>
      </form>
    </div>
  );
}

export default AddNewBookmark;
