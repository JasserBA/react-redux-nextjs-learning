/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import styles from "./Form.module.css";
import { Button } from "./Button";
import { BackButton } from "./BackButton";
import { useUrlPosition } from "../hooks/useUrlPosition";
import { convertToEmoji } from "../utils/convertToEmoji";
import Message from "./Message";

function Form() {
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [lat, lng] = useUrlPosition();
  const [isLoadingPosition, setIsLoadingPosition] = useState(false);

  const URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";
  const [geoCodingError, setGeoCodingError] = useState(null);
  const [emoji, setEmoji] = convertToEmoji(country);
  useEffect(() => {
    async function fetchCityData() {
      try {
        setGeoCodingError("");
        setIsLoadingPosition(true);
        const res = await fetch(`${URL}?latitude=${lat}&longitude=${lng}`);
        const data = await res.json();
        if (!data.countryCode)
          throw new Error(
            "No country data found! Click somewhere on the map to get your position."
          );
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
  }, [lat, lng, setEmoji]);

  if (geoCodingError) {
    return <Message type="error" message={geoCodingError} />;
  }
  return (
    <form className={styles.form}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        {/* <span className={styles.flag}>{emoji}</span> */}
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        <input
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
        <Button type="primary">Add</Button>
        <BackButton />
      </div>
    </form>
  );
}

export default Form;
