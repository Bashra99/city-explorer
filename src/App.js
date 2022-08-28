import React from "react";

import Header from "./component/header";
import Main from "./component/main";
import Footer from "./component/Footer";

class App extends React.Component{
  render (){
    return (
      <body>
      <Header/>
      <Main/>
      <Footer/>
      </body>
    )
  }
}

export default App