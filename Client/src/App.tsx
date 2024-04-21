import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Routes from '../src/routes/Routes';
import './App.css';

const App = () => {
    const routes = Routes();
    const router = createBrowserRouter(routes);

    return <RouterProvider router={router} />;
};

export default App;
