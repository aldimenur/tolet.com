import React from "react";
import { useEffect, useState } from "react";

function CekOrderList() {
  const [album, getAlbum] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums").then((response) =>
      response.json()
    );
  }, []);

  function handleResponse(url) {}

  function cobaPrompt() {
    prompt("Please enter");
  }

  return (
    <div className="flex justify-center">
      <div className="border w-52 flex justify-center">
        {album} ini Nanti Album
      </div>
    </div>
  );
}

export default CekOrderList;
