import { RouteObject } from 'react-router';
import LoginButton from '../components/auth0/LoginButton';
import SearchView from '../view/SearchView';

const Routes = () => {
    const routes: Array<RouteObject> = [
        {
            path: '/',
            element: <LoginButton />
        },
        { path: '/search', element: <SearchView /> },
        { path: '/dashboard', element: <LoginButton /> }
    ];

    return routes;
};

export default Routes;
