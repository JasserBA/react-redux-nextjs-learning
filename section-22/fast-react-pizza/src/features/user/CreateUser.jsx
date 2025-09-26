import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/Button";

function CreateUser() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (username.trim() !== "") {
      console.log("Username submitted:", username);
      navigate("/");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-4 border p-4 rounded-lg text-center md:text-base"
    >
      <p>👋 Welcome! Please start by telling us your name:</p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input border p-2 rounded-lg text-center md:w-1/2 mx-auto"
      />

      {username !== "" && (
        <div>
          <Button type="submit">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
