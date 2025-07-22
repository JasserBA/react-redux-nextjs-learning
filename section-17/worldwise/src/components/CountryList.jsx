import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import Message from "./Message";

export const CountryList = ({ cities, isLoading }) => {
  if (isLoading) return <Spinner />;

  if (!cities.length) return <Message message="Add your first city" />;

  const countries = cities.reduce((arr, city) => {
    if (arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);
  return (
    <ul className={styles.countryList}>
      {countries.map((currentCountry) => (
        <CountryItem key={currentCountry.id} currentCountry={currentCountry} />
      ))}
    </ul>
  );
};
