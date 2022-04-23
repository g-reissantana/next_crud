import { useRoutes } from 'react-router-dom';
import { Home } from '../pages/Home';

export const MainRoutes = () => useRoutes([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '*',
        element: 'Não encontrado'
    }
]);