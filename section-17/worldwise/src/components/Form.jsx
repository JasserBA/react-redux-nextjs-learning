/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import styles from "./Form.module.css";
import { Button } from "./Button";
import { BackButton } from "./BackButton";
import { useUrlPosition } from "../hooks/useUrlPosition";
import { convertToEmoji } from "../utils/convertToEmoji";
import Message from "./Message";
import Spinner from "./Spinner";
import { useCities } from "../context/CitiesContext";
import { useNavigate } from "react-router-dom";

function Form() {
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10)); // format for input[type=date]
  const [notes, setNotes] = useState("");
  const [lat, lng] = useUrlPosition() || [];
  const [isLoadingPosition, setIsLoadingPosition] = useState(false);

  const URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";
  const [geoCodingError, setGeoCodingError] = useState(null);
  const [emoji, setEmoji] = useState("");

  const { createCity, isLoading } = useCities();
  const navigate = useNavigate();
  useEffect(() => {
    if (!lat || !lng) return;

    async function fetchCityData() {
      try {
        setGeoCodingError("");
        setIsLoadingPosition(true);
        const res = await fetch(`${URL}?latitude=${lat}&longitude=${lng}`);
        const data = await res.json();

        if (!data.countryCode) {
          throw new Error(
            "No country data found! Click somewhere on the map to get your position."
          );
        }

        setCityName(data.city || data.locality || "Unknown City");
        setCountry(data.countryName || "Unknown Country");
        setEmoji(convertToEmoji(data.countryCode));
      } catch (error) {
        setGeoCodingError(error.message);

        throw new Error("Failed to fetch city data");
      } finally {
        setIsLoadingPosition(false);
      }
    }

    fetchCityData();
  }, [lat, lng]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!cityName || !country || !date) {
      setGeoCodingError("Please fill in all fields before submitting.");
      return;
    }

    const newCity = {
      cityName,
      country,
      emoji,
      date,
      notes,
      position: { lat, lng },
    };
    await createCity(newCity);
    navigate("/app/cities");
    console.log(newCity);
  };

  if (isLoadingPosition) return <Spinner />;
  if (geoCodingError) {
    return <Message type="error" message={geoCodingError} />;
  }
  if (!lat && !lng) {
    return (
      <Message type="info" message="Click on the map to get your position." />
    );
  }

  return (
    <form className={`${styles.form} ${isLoading ? styles.loading : ""}`}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        <span className={styles.flag}>{emoji}</span>
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        <input
          type="date"
          id="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button type="primary" onClick={handleSubmit}>
          Add
        </Button>
        <BackButton />
      </div>
    </form>
  );
}

export default Form;
