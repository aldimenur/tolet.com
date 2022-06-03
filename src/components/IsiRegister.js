import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function IsiRegister() {
  const [img, setImg] = useState("https://picsum.photos/450");
  const [age, setAge] = useState((inAge) => 0);
  const [user, setUser] = useState((inSetUser) => "");

  function handleImg(e) {
    setImg(e.target.value);
  }

  function minusAge() {
    setAge((prevAge) => prevAge - 1);
  }

  function addAge() {
    setAge((prevAge) => prevAge + 1);
  }

  function handleUser(f) {
    setUser(f.target.value);
    if (user === " ") {
      alert(" ANJENG GABISA PAKAI SPASI");
      console.log("ERROR");
    }
  }

  return (
    <>
      <div className="m-auto w-72 shadow-xl rounded-xl border bg-white">
        <div className="text-gray-700 tittle-registration font-bold h-10 border-b pb-3 mt-3 mb-3 w-full rounded-t-xl flex items-center justify-center">
          BUAT AKUN
        </div>
        <div className="h-fit w-full flex flex-col justify-center items-center">
          <input
            type={"text"}
            className="w-3/4 px-4 my-1 rounded-2xl h-8 border"
            onChange={handleUser}
            placeholder="Nama"
          ></input>
          <input
            type={"email"}
            className="w-3/4 px-4 my-1 rounded-2xl h-8 border"
            placeholder="Email"
          ></input>
          <input
            type={"password"}
            className="w-3/4 px-4 my-1 rounded-2xl h-8 border"
            placeholder="Password"
          ></input>
          <div>
            <button
              className="py px-2 border-black border rounded-full mx-4 active:border-blue-900 active:px-4 active:duration-50"
              onClick={minusAge}
            >
              -
            </button>
            <span className="px-5">
              Umur{" "}
              <span className="border px-2 border-black rounded-xl">{age}</span>
            </span>
            <button
              className="py px-2 border-black border rounded-full mx-4 active:border-blue-900 active:px-4 active:duration-50"
              onClick={addAge}
            >
              +
            </button>
          </div>
        </div>
        <div className="h-20 w-full justify-center items-center flex rounded-b-xl">
          <button className="hover:bg-white hover:border-blue-500 hover:text-blue-600 ease-in-out duration-500 font-bold border py-3 px-5 rounded-full text-gray-700 text-sm">
            <Link to="/"> Lanjutkan </Link>
          </button>
        </div>
      </div>
      <div className="w-full m-auto">
        <div>
          <img
            src={img}
            alt="..."
            className="w-52 h-52 object-center my-5 mx-auto rounded-full drop-shadow-2xl"
          ></img>
          <div className="justify-center flex my-3">
            <input
              type={"text"}
              onChange={handleImg}
              className="rounded-full px-4 border"
              placeholder="Link Gambar Profilmu"
            ></input>
          </div>
        </div>
      </div>
    </>
  );
}

export default IsiRegister;
