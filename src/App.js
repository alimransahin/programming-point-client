import { RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Pages/Layout/Main';
import { routers } from './Routers/Routers';

function App() {
  return (
    <div className="">
      <RouterProvider router={routers}></RouterProvider>
    </div>
  );
}

export default App;
