import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './styles/Tiago.css';
import Head from './components/Head';
import MenuCard from './components/MenuCard';
import CardDetail from './components/CardDetail';

function App() {
  return (
    <Router
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}
    >
      <Routes>
        <Route path='/' element={<Head />} />
        <Route
          path='/all'
          element={
            <>
              <Head />
              <MenuCard />
            </>
          }
        />
        <Route
          path='/:id'
          element={
            <>
              <Head />
              <CardDetail />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
