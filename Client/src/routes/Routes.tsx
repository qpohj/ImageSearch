import { RouteObject } from 'react-router';
import HomeView from '../view/HomeView';
import ProfileView from '../view/ProfileView';
import SearchView from '../view/SearchView';

const routes: Array<RouteObject> = [
    {
        path: '/',
        element: <HomeView />
    },
    { path: '/search', element: <SearchView /> },
    { path: '/dashboard', element: <ProfileView /> }
];

export default routes;
