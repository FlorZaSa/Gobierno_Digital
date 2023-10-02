import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./paginas/inicio/Inicio.js";
import Details from "./paginas/detalles/Detalles.js";


const AppRoutes = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:name?" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRoutes;