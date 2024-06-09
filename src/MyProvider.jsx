import { useState } from "react";
import { MyContext } from "./useContext/context";

const MyProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <MyContext.Provider value={{ user, setUser }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
