import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { FileText, LayoutDashboard, BookOpen, LogOut, User, Sparkles, Menu, X, Plus } from 'lucide-react';

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isCurrent = (path) => location.pathname === path;

  const handleLogout = () => {
    logout();
    setMobileMenuOpen(false);
    navigate('/');
  };

  const navLinks = [
    { to: '/templates', label: 'Templates', icon: Sparkles },
    { to: '/docs', label: 'Architecture & Specs', icon: BookOpen },
    ...(isAuthenticated ? [{ to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard }] : []),
  ];

  return (
    <nav
      className="no-print"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.88)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        transition: 'all 0.2s ease',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '4.25rem',
        }}
      >
        {/* Brand Logo */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none',
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            style={{
              background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
              color: '#ffffff',
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 14px rgba(37, 99, 235, 0.35)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
          >
            <FileText size={20} strokeWidth={2.5} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontWeight: 800,
                fontSize: '1.25rem',
                letterSpacing: '-0.025em',
                background: 'linear-gradient(135deg, #0f172a 0%, #1e40af 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: 1.2,
              }}
            >
              Digital Resume Builder
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div
          className="desktop-nav"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          {navLinks.map((item) => {
            const Icon = item.icon;
            const active = isCurrent(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontSize: '0.9rem',
                  fontWeight: active ? 700 : 500,
                  color: active ? '#2563eb' : '#475569',
                  padding: '0.45rem 0.85rem',
                  borderRadius: '9999px',
                  backgroundColor: active ? 'rgba(37, 99, 235, 0.08)' : 'transparent',
                  transition: 'all 0.15s ease',
                  textDecoration: 'none',
                }}
              >
                <Icon size={16} strokeWidth={active ? 2.5 : 2} />
                <span>{item.label}</span>
              </Link>
            );
          })}

          {isAuthenticated ? (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginLeft: '0.5rem',
                paddingLeft: '0.75rem',
                borderLeft: '1px solid var(--border-subtle)',
              }}
            >
              {/* User Avatar Pill */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: '#f1f5f9',
                  padding: '0.3rem 0.75rem 0.3rem 0.4rem',
                  borderRadius: '9999px',
                  border: '1px solid #e2e8f0',
                }}
              >
                <div
                  style={{
                    width: '1.75rem',
                    height: '1.75rem',
                    borderRadius: '50%',
                    backgroundColor: '#2563eb',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                  }}
                >
                  {(user?.name || 'U').charAt(0).toUpperCase()}
                </div>
                <span
                  style={{
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: '#1e293b',
                    maxWidth: '120px',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {user?.name?.split(' ')[0] || 'User'}
                </span>
              </div>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="btn btn-ghost btn-sm"
                title="Log out of account"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  color: '#64748b',
                  fontSize: '0.85rem',
                  padding: '0.4rem 0.65rem',
                }}
              >
                <LogOut size={15} />
                <span>Exit</span>
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginLeft: '0.5rem' }}>
              <Link to="/login" className="btn btn-ghost btn-sm">
                Login
              </Link>
              <Link
                to="/register"
                className="btn btn-primary btn-sm btn-glow"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                }}
              >
                <span>Get Started</span>
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="mobile-nav-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            padding: '0.5rem',
            color: '#1e293b',
            cursor: 'pointer',
            borderRadius: '8px',
          }}
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="mobile-nav-menu"
          style={{
            backgroundColor: '#ffffff',
            borderBottom: '1px solid #e2e8f0',
            padding: '1rem 1.25rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            animation: 'fadeIn 0.2s ease',
          }}
        >
          {navLinks.map((item) => {
            const Icon = item.icon;
            const active = isCurrent(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  padding: '0.65rem 0.85rem',
                  borderRadius: '8px',
                  fontSize: '0.95rem',
                  fontWeight: active ? 700 : 500,
                  color: active ? '#2563eb' : '#334155',
                  backgroundColor: active ? 'rgba(37, 99, 235, 0.08)' : 'transparent',
                  textDecoration: 'none',
                }}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </Link>
            );
          })}

          <div style={{ height: '1px', backgroundColor: '#e2e8f0', margin: '0.5rem 0' }} />

          {isAuthenticated ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', padding: '0.25rem 0.5rem' }}>
                <div
                  style={{
                    width: '2rem',
                    height: '2rem',
                    borderRadius: '50%',
                    backgroundColor: '#2563eb',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                  }}
                >
                  {(user?.name || 'U').charAt(0).toUpperCase()}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#0f172a' }}>{user?.name}</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{user?.email}</div>
                </div>
              </div>

              <button
                onClick={handleLogout}
                className="btn btn-outline"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  width: '100%',
                }}
              >
                <LogOut size={16} />
                <span>Log out</span>
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="btn btn-outline"
                style={{ textAlign: 'center' }}
              >
                Login
              </Link>
              <Link
                to="/register"
                onClick={() => setMobileMenuOpen(false)}
                className="btn btn-primary"
                style={{ textAlign: 'center' }}
              >
                Register
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
