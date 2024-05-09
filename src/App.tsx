import AboutPage from '@/pages/About/About';
import BugsPage from '@/pages/Bugs/Bugs';
import PalaAnimationPage from '@/pages/PalaAnimation/PalaAnimation';
import PaladiumClickerPage from '@/pages/PaladiumClicker/PaladiumClicker';
import Profil from '@/pages/Profil/Profil';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/paladium-clicker" />,
  },
  {
    path: '/paladium-clicker',
    element: <PaladiumClickerPage />,
  },
  {
    path: '/profil',
    element: <Profil />,
  },
  /* {
    path: '/pala-animation',
    element: <PalaAnimationPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: 'bugs',
    element: <BugsPage />
  } */
]);

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
