// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import Formdata from './components/Formdata';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/form-data" element={<Formdata />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// import React from 'react';
// import { Switch, Route } from 'react-router-dom';
// import Form from './Form';
// import Formdata from './Formdata';

// function App() {
//   return (
//     <div>
//       <Switch>
//         <Route exact path="/" component={Form} />
//         <Route path="/formdata" component={Formdata} />
//       </Switch>
//     </div>
//   );
// }

// export default App;

