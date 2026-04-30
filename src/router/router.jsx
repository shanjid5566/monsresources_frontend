import React, { lazy, Suspense } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import PublicLayout from '../components/layout/public/PublicLayout';
import AdminLayout from '../components/layout/admin/Layout';
import { selectIsAuthenticated } from '../store/slices/authSlice';
import Home from '../pages/public/home/Home';

const Login = lazy(() => import('../pages/Login'));
const Dashboard = lazy(() => import('../pages/admin/Dashboard'));

const PageLoader = () => (
  <div className='flex items-center justify-center min-h-screen'>
    <div className='w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin' />
  </div>
);

const NotFound = () => (
  <div className='flex flex-col items-center justify-center min-h-screen gap-4 text-center px-4'>
    <h1 className='text-6xl font-bold text-gray-800'>404</h1>
    <p className='text-xl text-gray-500'>Page not found</p>
    <a href={ROUTES.HOME} className='mt-2 text-blue-600 hover:underline text-sm font-medium'>
      Back to Home
    </a>
  </div>
);

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const location = useLocation();
  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />;
  }
  return children;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        element={
          <Suspense fallback={<PageLoader />}>
            <PublicLayout />
          </Suspense>
        }
      >
        <Route path={'/'} element={<Home />} />
        <Route path={'/login'} element={<Login />} />
      </Route>

      <Route
        path={'/admin'}
        element={
          <Suspense fallback={<PageLoader />}>
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          </Suspense>
        }
      >
        <Route path={'/admin/dashboard'} element={<Dashboard />} />
      </Route>

      <Route path='*' element={<NotFound />} />
    </>,
  ),
);

export default router;
