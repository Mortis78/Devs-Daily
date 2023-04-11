
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Footer/>
      <Route path="*"><ErrorPage /></Route>
    </div>
  );
}

export default App;
