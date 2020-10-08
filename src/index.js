import React from "react";


import Logo from './components/logo';
import Photo from './components/photo';

const Main = () => {

    return (
      <>
      <Logo />
      <Photo count={0} file={require("./assets/images/cat.png")} />
      <Photo count={10} file={require("./assets/images/cat2.png")} />
      </>
  );
}



export default Main;