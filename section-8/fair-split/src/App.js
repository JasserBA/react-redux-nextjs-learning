import { useState } from "react";
import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import FormSplit from "./components/FormSplit";
import FriendList from "./components/FriendList";

function App() {
  const [AddOption, setAddOption] = useState(false)
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
  function handleClick(e) {
    setAddOption(!AddOption);
  }
  return (
    <div className="App">
      <FriendList data={initialFriends} />
      {AddOption && <FormAddFriend />}
      <Button onAddOption={handleClick}>
        {AddOption ? "Close" : "Add Friend"}
      </Button>
      <FormSplit/>
    </div>
  );
}

export default App;
