import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

/**
 * Toast notification component
 * Shows modern floating feedback
 */
const Toast = ({ show, message, type = 'success', onClose, duration = 3000 }) => {
  useEffect(() => {
    if (!show) return;
    const timer = setTimeout(() => {
      if (onClose) onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [show, duration, onClose]);

  if (!show) return null;

  const icons = {
    success: <CheckCircle2 size={18} color="#10b981" />,
    error: <AlertCircle size={18} color="#ef4444" />,
    info: <Info size={18} color="#3b82f6" />,
  };

  const borderColors = {
    success: '#10b981',
    error: '#ef4444',
    info: '#3b82f6',
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 9999,
        backgroundColor: '#ffffff',
        borderRadius: 'var(--radius-lg)',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
        border: '1px solid rgba(226, 232, 240, 0.8)',
        borderLeft: `4px solid ${borderColors[type] || '#10b981'}`,
        padding: '0.85rem 1.25rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        minWidth: '280px',
        maxWidth: '420px',
        animation: 'slideUpFade 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <div style={{ flexShrink: 0 }}>{icons[type] || icons.success}</div>
      <div style={{ flex: 1, fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)' }}>
        {message}
      </div>
      {onClose && (
        <button
          onClick={onClose}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--text-muted)',
            padding: '2px',
            display: 'flex',
            alignItems: 'center',
            borderRadius: '4px',
          }}
          aria-label="Close notification"
        >
          <X size={15} />
        </button>
      )}
    </div>
  );
};

export default Toast;
