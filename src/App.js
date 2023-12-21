import React, { useState } from "react";
import Signup from "./signup";
import Login from "./login";

function App() {
  const [openForm, setOpenForm] = useState(false);
  const [loginOpen] = useState(true);

  let showForm = () => {
    setOpenForm(true);
  };

  let closeForm = () => {
    setOpenForm(false);
  };

  return (
    <div>
      {loginOpen && <Signup showform={showForm} />}
      {openForm && <Login closeform={closeForm} />}
    </div>
  );
}

export default App;
