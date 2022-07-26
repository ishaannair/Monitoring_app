import { useEffect, useRef } from "react";

const App = () => {
  const Ref = useRef(this);

  useEffect(() => {
    let cache = "";
    for (let i = 1800; i < 2022; i++) {
      cache += `<option>${i}</option>`;
    }
    Ref.current.innerHTML = cache;
  });

  return (
      <select ref={Ref}></select>
  );
};

export default App;