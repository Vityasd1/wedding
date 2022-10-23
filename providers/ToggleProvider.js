import React, { createContext, useContext, useState } from 'react'

function ToggleProvider  (props) {
  const [toggle, setToggle] = useState(false);

  return (
    <ToggleContext.Provider value={{toggle,setToggle}} {...props} />
  );
}

const ToggleContext = createContext({});
const useToggle = () => useContext(ToggleContext);

export { ToggleProvider, useToggle };


