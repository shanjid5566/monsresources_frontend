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
import FindJobs from '../pages/public/find_jobs/FindJobs';
import JobDetails from '../components/common/JobDetails';
import ResetPassword from '../pages/authentication/ResetPassword';

const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  OTP: '/otp',
  RESET_PASSWORD: '/reset-password',
  ADMIN: '/admin',
  ADMIN_DASHBOARD: '/admin/dashboard',
  FIND_JOBS: '/find-jobs',
  APPLICANT_DETAILS: '/applicant/:applicantId',
  APPLIED_JOB: '/user/applications',
};

const Login = lazy(() => import('../pages/authentication/Login'));
const Register = lazy(() => import('../pages/authentication/Register'));
const ForgotPassword = lazy(() => import('../pages/authentication/ForgotPassword'));
const Otp = lazy(() => import('../pages/authentication/Otp'));
const Dashboard = lazy(() => import('../pages/admin/Dashboard'));
const JobListing = lazy(() => import('../pages/admin/job_listing/JobListing'));
const AddJobListing = lazy(() => import('../components/common/AddJobListing'));
const UserJobListing = lazy(() => import('../pages/user/job_listing/JobListing'));
const ApplicantDetails = lazy(() => import('../pages/public/ApplicantDetails'));
const AppliedJob = lazy(() => import('../pages/user/applied_job/AppliedJob'));

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
        <Route path={'/find-jobs'} element={<FindJobs />} />
        <Route path={'/jobs/:id'} element={<JobDetails />} />
      </Route>
        <Route path={'/login'} element={<Login />} />
        <Route path={'/register'} element={<Register />} />
        <Route path={'/forgot-password'} element={<ForgotPassword />} />
        <Route path={'/otp'} element={<Otp />} />
        <Route path={'/reset-password'} element={<ResetPassword />} />

      {/* Protected Applicant Details Route */}
      <Route
        path={'/applicant/:applicantId'}
        element={
          <Suspense fallback={<PageLoader />}>
            <ProtectedRoute>
              <ApplicantDetails />
            </ProtectedRoute>
          </Suspense>
        }
      />

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
        <Route path={'/admin/jobs'} element={<JobListing />} />
        <Route path={'/admin/jobs/add'} element={<AddJobListing />} />
      </Route>

      <Route
        path={'/user'}
        element={
          <Suspense fallback={<PageLoader />}>
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          </Suspense>
        }
      >
        <Route path={'/user/jobs-listing'} element={<UserJobListing />} />
        <Route path={'/user/jobs-listing/add'} element={<AddJobListing />} />
        <Route path={'/user/applications'} element={<AppliedJob />} />
      </Route>

      <Route path='*' element={<NotFound />} />
    </>,
  ),
);

export default router;
export { ROUTES };
