import React from "react";

const Jsx1 = () => {
  const message =
    " Class isimleri className icinde verilirve attribute ler camel case olarak yazilir";
  return (
    <>
      <br />
      <li> Tum elementler tek bir root element icinde olmali</li>
      <li className="title">{message}</li>
      <br />
    </>
  );
};

export default Jsx1;
