import React from 'react';
import Search from './components/Search';


function App() {
  return (
            <div>

              <h1 style={{ textAlign: 'center' }}>GitHub User Search</h1>
              
              <p>Start typing a username to search GitHub profiles.</p>
              
              <Search />
              
            </div>
        );
}

export default App;
