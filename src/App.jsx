import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Question1 from './Question1';
import Question2 from './Question2';
import Question3 from './Question3';
import Question4 from './Question4';
import Question5 from './Question5';
import Results from './Results';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/question1" element={<Question1 />} />
        <Route path="/question2" element={<Question2 />} />
        <Route path='/question3' element={<Question3 />} />
        <Route path='/question4' element={<Question4 />} />
        <Route path='/question5' element={<Question5 />} />
        <Route path='/results' element={<Results />} />
      </Routes>
    </Router>
  )
}

export default App
