import React, { useRef, createContext } from 'react';
import Toggle from './Toggle';
import { useTitleInput } from './hooks/useTitleInput';

export const UserContext = createContext('');

const App = () => {
  const [name, setName] = useTitleInput('');
  const ref = useRef();

  return (
    <UserContext.Provider
      value={{
        user: true
      }}
    >
      <div className="main-wrapper" ref={ref}>
        <h1 onClick={() => ref.current.classList.add('new-h1-class')}>Off Da Hook Dishes!</h1>
        <Toggle />
        <form
          onSubmit={event => {
            event.preventDefault();
          }}
        >
          <input type="text" onChange={event => setName(event.target.value)} value={name} />
          <button>Submit</button>
        </form>
      </div>
    </UserContext.Provider>
  );
};

export default App;
