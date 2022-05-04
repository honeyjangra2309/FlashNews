import React,{useState} from 'react'
import './App.css';
import Navbar from './components/Navbar'
import News from './components/News';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
function App() {
  const [pageSize, setpageSize] = useState(5);
  const getpageSize =(data) => {
    setpageSize(data);
  }
  console.log(pageSize);
  return (
    <div className="App">
      <Router>
         <Navbar pageSize={pageSize} getData={getpageSize} />
        <Routes>
        <Route exact path="/" element={<News  key="general" pageSize={pageSize} category="general"/> }/>
        <Route exact path="/sports" element={<News  key="sports" pageSize={pageSize} category="sports"/> }/>
        <Route exact path="/technology" element={<News  key="technology" pageSize={pageSize} category="technology"/> }/>
        <Route exact path="/business" element={<News  key="business" pageSize={pageSize} category="business"/> }/>
        <Route exact path="/entertainment" element={<News  key="entertainment" pageSize={pageSize} category="entertainment"/> }/>
        <Route exact path="/health" element={<News  key="health" pageSize={pageSize} category="health"/> }/>
        <Route exact path="/science" element={<News  key="science" pageSize={pageSize} category="science"/> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
