import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Employees from "./Employees";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GroupTeamMembers from "./GroupTeamMembers";
import Nav from "./Nav";
import NotFound from "./NotFound";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <DataProvider>
      <Router>
        <Nav />
        <Header />
        <Routes>
          <Route path="/" element={<Employees />} />
          <Route path="/GroupedTeamMembers" element={<GroupTeamMembers />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </DataProvider>
  );
}

export default App;
