import './app.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import SubContent from './components/SubContent';
import Advertisement from './components/Advertisement';


function App() {
  return (
    <div className="app">
      <Header />
      <div className="inlineIt">
        <Navigation />
        <Main>
          <div className="main-div">
            <SubContent />
            <SubContent />
            <SubContent />
          </div>
          <Advertisement />
        </Main>
      </div>
    </div>
  );
}

export default App;
