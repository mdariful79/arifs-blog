import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = 'Welcome to new blog';
  const likes = 50;
  // const obj = {name: 'Arif', age: 23};
  // we can't output object and boolean values
  const googleLink = 'http://www.google.com';

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home/>
      </div>
    
    </div>
  );
}

export default App;
