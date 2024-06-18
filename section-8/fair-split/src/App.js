import FriendList from "./components/FriendList";
import RightForm from "./components/RightForm";

function App() {
  const initialFriends = [
    {
      id: 118836,
      name: "Karim",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sana",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Amine",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
  ];

  return (
    <div className="App">
      <FriendList data={initialFriends}/>
      <RightForm />
    </div>
  );
}

export default App;