import React from "react";
import Header from "./components/layout/Header";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HomePage />
      </main>
    </div>
  );
}

export default App;
