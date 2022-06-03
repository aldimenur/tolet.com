import React from "react";
import { useEffect } from "react";

function CekOrderList() {
  function Album(props) {
    return (
      <div className="border w-52 justify-center flex">
        {props.id}
        {props.name}
      </div>
    );
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums").then((response) =>
      response.json()
    );
  }, []);

  return (
    <div className="flex justify-center">
      <div className="border w-52 flex justify-center">
        ini Nanti Album
        <Album name="ALDIANSYAH" id="001" />
      </div>
    </div>
  );
}

export default CekOrderList;
