import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import Message from "./Message";

export const CountryList = ({ data, isLoading }) => {
  if (isLoading) return <Spinner />;
  if (!data.length) return <Message message="Add your first country" />;
  return (
    <ul className={styles.countryList}>
      {data.map((currentCountry, index) => (
        <CountryItem key={index} currentCountry={currentCountry} />
      ))}
    </ul>
  );
};
