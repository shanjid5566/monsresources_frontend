import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Briefcase,ClipboardCheck ,Bookmark , Users, Settings, LogOut } from 'lucide-react';
import { logout } from '../../../../store/slices/authSlice';

const MENU_ITEMS = {
  admin: [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/admin/dashboard' },
    { icon: Briefcase, label: 'Job Postings', href: '/admin/jobs' },
    { icon: Users, label: 'Users & Applicants', href: '/admin/users' },
    { icon: Settings, label: 'Settings', href: '/admin/settings' },
  ],
  hr: [
    { icon: LayoutDashboard, label: 'Dashboard Overview', href: '/hr/dashboard' },
    { icon: Briefcase, label: 'Job Postings', href: '/hr/jobs-listing' },
    { icon: Settings, label: 'Settings', href: '/hr/account' },
  ],
  user: [
    { icon: Briefcase, label: 'Job Listing', href: '/user/jobs-listing' },
    { icon: ClipboardCheck , label: 'Applied Job', href: '/user/applications' },
    { icon: Bookmark , label: 'Saved Job', href: '/user/saved' },
    { icon: Settings, label: 'Account', href: '/user/settings' },
  ],
};

const Sidebar = ({ onClose = () => {} }) => {
  const user = useSelector((state) => state.auth.user);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userRole = user?.role || 'user';
  const menuItems = MENU_ITEMS[userRole] || MENU_ITEMS.user;

  const isActive = (href) => {
    const pathName = location.pathname;
    // Check if current path matches or starts with the menu item href
    return pathName === href || pathName.startsWith(href + '/');
  };

  const handleMenuClick = () => {
    onClose();
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <aside className="w-64 bg-[#FDF9EE] text-gray-900 flex flex-col h-screen border-r border-gray-300">
      {/* Logo */}
      <div className="px-6 py-3 border-b border-gray-300">
        <Link to="/" onClick={handleMenuClick} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img src="/logo.png" alt="MonsJobs" className="h-12 w-auto" />
        </Link>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              to={item.href}
              onClick={handleMenuClick}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${
                active
                  ? 'bg-[#063D2E] text-white'
                  : 'text-gray-700 hover:bg-gray-300'
              }`}
            >
              <Icon size={20} />
              <span className="text-base font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-gray-300">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full px-4 py-2.5 rounded-lg text-gray-700 hover:bg-red-100 hover:text-red-600 transition-colors"
        >
          <LogOut size={20} />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
 