import logo from './logo.svg';
import { Index } from './components/groups/Index';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import NavBar from './components/groups/Menu/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar />
      <Container>
        <Routes>
          <Route exact path='/' element={<Index />} />
          {/* <Route exact path='/' element={< />} /> */}
        </Routes>
      </Container>
      </header>
    </div>
  );
}

export default App;
