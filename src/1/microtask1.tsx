import React from 'react';
import {Header} from "./site/header";
import {Footer} from "./site/footer";
import {Body} from "./site/body";

function Microtask1() {
  return (
    <div className="App">
      <Header title='HEADER'/>
      <Body title='BODY'/>
      <Footer title='FOOTER'/>
    </div>
  );
}

export default Microtask1;
