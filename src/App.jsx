import { createContext, useContext } from 'react';

const App = () => {
  const AppContext = createContext(useContext);
  return (
    <main>
      <h1>App</h1>
    </main>
  );
};

export default App;
