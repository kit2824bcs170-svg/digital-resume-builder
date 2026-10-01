import React from 'react';

/**
 * SkeletonLoader
 * Reusable shimmer placeholder for stats, cards, and previews
 */
export const SkeletonBox = ({ width = '100%', height = '1rem', borderRadius = 'var(--radius-md)', style = {} }) => (
  <div
    className="skeleton-shimmer"
    style={{
      width,
      height,
      borderRadius,
      backgroundColor: '#e2e8f0',
      ...style,
    }}
  />
);

export const SkeletonStatCard = () => (
  <div
    style={{
      backgroundColor: '#ffffff',
      borderRadius: 'var(--radius-lg)',
      padding: '1.25rem',
      border: '1px solid var(--border-subtle)',
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
    }}
  >
    <SkeletonBox width="3rem" height="3rem" borderRadius="var(--radius-md)" />
    <div style={{ flex: 1 }}>
      <SkeletonBox width="50%" height="0.85rem" style={{ marginBottom: '0.5rem' }} />
      <SkeletonBox width="30%" height="1.5rem" />
    </div>
  </div>
);

export const SkeletonResumeCard = () => (
  <div
    style={{
      backgroundColor: '#ffffff',
      borderRadius: 'var(--radius-xl)',
      border: '1px solid var(--border-subtle)',
      overflow: 'hidden',
      padding: '1.25rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    }}
  >
    <SkeletonBox width="100%" height="180px" borderRadius="var(--radius-lg)" />
    <div>
      <SkeletonBox width="70%" height="1.25rem" style={{ marginBottom: '0.5rem' }} />
      <SkeletonBox width="45%" height="0.85rem" />
    </div>
    <div style={{ display: 'flex', gap: '0.5rem', marginTop: 'auto' }}>
      <SkeletonBox width="50%" height="2.25rem" borderRadius="var(--radius-md)" />
      <SkeletonBox width="50%" height="2.25rem" borderRadius="var(--radius-md)" />
    </div>
  </div>
);

export default SkeletonBox;
