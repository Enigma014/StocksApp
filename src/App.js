import React from 'react';
import Header from './header'; // Adjust the path if necessary
import MainContainer from './MainContainer'; // Adjust the path if necessary
import Stock from './Stock'; // Adjust the path if necessary
import StockContainer from './StockContainer'; // Adjust the path if necessary
import SearchBar from './SearchBar';
function App() {
  return (
    <div>
      <Header />
      <main>
        <h1>Welcome to My React App!</h1>
        <SearchBar />
        <MainContainer />
        <StockContainer />
        {/* Render the Stock component here */}
        <Stock />
      </main>
      <footer>
        <p>© 2024 My React App</p>
      </footer>
    </div>
  );
}

export default App;
