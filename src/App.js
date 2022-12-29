// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src="https://dhanurakshe.netlify.app/static/media/Developer.3d6c085c62cfdcd4c235.png" className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React with Shiv
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';

const App = () => {
  const [Count, SetCount] = useState(0);
  const increament = () => SetCount (Count + 1);
  const decreament = () => SetCount (Count - 1);

  return(
    <center>      
    <div>
      <h1>Counter App</h1>
      <h2>Count {Count}</h2>
     <button onClick={increament}>increase</button>
     <button onClick={decreament}>decrease</button>
    </div>
    </center>
  )
}

export default App;