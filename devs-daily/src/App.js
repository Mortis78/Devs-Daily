
import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer'
import { ErrorPage } from './components/ErrorPage/ErrorPage';

export function App() {
  return (
    <div className="App">
      <Header/>
      <Footer/>
      <Route path="*"><ErrorPage /></Route>
    </div>
  );
}


