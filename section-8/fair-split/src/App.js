import { useState } from "react";
import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import FormSplit from "./components/FormSplit";
import FriendList from "./components/FriendList";
import data from "./db.json";
function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const initialFriends = data.friends;
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(false);

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  function handleSelection(friend) {
    // setSelectedFriend(friend);

    // '?.' to avoid null error
    setSelectedFriend((curr) => (curr?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((f) =>
        f.id === selectedFriend.id ? { ...f, balance: f.balance + value } : f
      )
    );
    setSelectedFriend(null);
  }
  return (
    <div className="App">
      <div className="sidebar">
        <FriendList
          data={friends}
          selectedFriend={selectedFriend}
          onSeletion={handleSelection}
        />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplit
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

export default App;
