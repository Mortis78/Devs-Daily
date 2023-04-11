
import './App.css';

export function App() {
  return (
    <div className="App">
      <Header/>
      <Footer/>
      <Route path="*"><ErrorPage /></Route>
    </div>
  );
}


