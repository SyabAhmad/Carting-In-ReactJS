import React from "react";
import Navbar from "./components/Navbar.jsx";
import Itemlist from "./components/Itemlist.jsx";
function App() {
  return (
    <>
      <div>
        <header>
          <Navbar />
        </header>
      </div>
      <div>
        <div className="cart">cart</div>
        <main>
          <Itemlist />
        </main>
      </div>
    </>
  );
}

export default App;
