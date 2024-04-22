import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from '../src/routes/Routes';
import './App.css';

const App = () => {
    const router = createBrowserRouter(routes);

    return <RouterProvider router={router} />;
};

export default App;
