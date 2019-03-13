import React, { useRef, createContext, useMemo } from 'react';
import Toggle from './Toggle';
import { useTitleInput } from './hooks/useTitleInput';
import Counter from './Counter';

export const UserContext = createContext('');

const App = () => {
  const [name, setName] = useTitleInput('');
  const ref = useRef();

  const reverseWord = word => {
    console.log('function called');
    return word
      .split('')
      .reverse()
      .join('');
  };

  const title = 'Off Da Hook Dishes!';
  const TitleReversed = useMemo(() => reverseWord(title), [title]);

  return (
    <UserContext.Provider
      value={{
        user: true
      }}
    >
      <div className="main-wrapper" ref={ref}>
        <h1 onClick={() => ref.current.classList.add('new-h1-class')}>
          {title}
          <br />
          {TitleReversed && TitleReversed}
        </h1>
        <Toggle />
        <Counter />
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
