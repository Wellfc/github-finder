import { Routes, Route } from 'react-router-dom';
import User from './pages/User';
import Search from './pages/Search';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <AnimatePresence>
        <Routes>
          <Route path='/' element={<Search />} />
          <Route path='/user/:username' element={<User />} />
        </Routes>
    </AnimatePresence>
  );
}

export default App;
