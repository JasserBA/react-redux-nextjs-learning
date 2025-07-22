import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import { CityItem } from "./CityItem";
import Message from "./Message";

export const CityList = ({ data, isLoading }) => {
  if (isLoading) return <Spinner />;
  if (!data.length) return <Message message="Add your first city" />;
  return (
    <ul className={styles.cityList}>
      {data.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
};
