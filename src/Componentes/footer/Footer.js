import React, { Component } from 'react';
export default function PPagina() {
  return (
    <div className="App-footer">
              <footer className="container">
            <p>&copy; {(new Date().getFullYear())} Prueba Gobierno-Digital &middot; <a href="#" rel="noopener noreferrer">Política de Privacidad</a> &middot; <a href="#" rel="noopener noreferrer">Términos</a></p>
        </footer>
    </div>
  );
}