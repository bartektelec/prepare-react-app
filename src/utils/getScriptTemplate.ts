export const getInitialScript = (filext = 'js') => {
  return `
import * as React from 'react';
import ReactDOM from 'react-dom';
import App from './App.${filext}';
import './style.css';

ReactDOM.render(<App />, document.querySelector('.root'))
`;
};

export const getAppScript = (name: string) => {
  return `
import * as React from 'react';

export default function App () {
  const [counter, setCounter] = React.useState(0);
    return (
          <main>
              <h1>Welcome to ${name}</h1>
              <p>Edit src/App.js file to set up your app</p>
              <p>React counter: {counter}</p>
              <button onClick={() => setCounter(counter + 1)}>Add one</button>
          </main>
      )
}
  `;
};

export const getStyleTemplate = () => {
  return `
body {
  color: #333;
  font-family: sans-serif;
  text-align: center;
}
`;
};
