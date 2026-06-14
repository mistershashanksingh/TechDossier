import React from 'react';

// Friendly avatar that waves "hello" — skin-tone face + waving hand.
// The waving hand uses the global `.animate-wave` keyframes (globals.css).
const HelloAvatar: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    role="img"
    aria-label="Waving hello avatar"
  >
    {/* soft skin shadow */}
    <ellipse cx="27" cy="47" rx="14" ry="3" fill="#000" opacity="0.06" />

    {/* hair (back) */}
    <path d="M11 30 A16 16 0 0 1 43 30 C39 19 33 15 27 15 C21 15 15 19 11 30 Z" fill="#43342A" />

    {/* face */}
    <circle cx="27" cy="30" r="15" fill="#F2C088" />

    {/* ears */}
    <circle cx="12" cy="31" r="2.6" fill="#EDB877" />
    <circle cx="42" cy="31" r="2.6" fill="#EDB877" />

    {/* hair (fringe over forehead) */}
    <path d="M12 28 C14 19 21 15 27 15 C33 15 40 19 42 28 C38 23 33 22 27 22 C21 22 16 23 12 28 Z" fill="#3A2C22" />

    {/* eyes */}
    <circle cx="21" cy="30" r="2" fill="#33271F" />
    <circle cx="33" cy="30" r="2" fill="#33271F" />
    {/* eye shine */}
    <circle cx="21.7" cy="29.3" r="0.6" fill="#fff" />
    <circle cx="33.7" cy="29.3" r="0.6" fill="#fff" />

    {/* cheeks */}
    <circle cx="18" cy="35" r="2.3" fill="#EE9C7E" opacity="0.55" />
    <circle cx="36" cy="35" r="2.3" fill="#EE9C7E" opacity="0.55" />

    {/* smile */}
    <path d="M21 37 Q27 42 33 37" stroke="#33271F" strokeWidth="2" fill="none" strokeLinecap="round" />

    {/* waving hand (raised, top-right) */}
    <g
      className="animate-wave"
      style={{ transformBox: 'fill-box', transformOrigin: 'bottom center' }}
    >
      {/* palm */}
      <rect x="44" y="23" width="12" height="13" rx="5.5" fill="#F2C088" stroke="#E0A86B" strokeWidth="1" />
      {/* fingers */}
      <rect x="45.2" y="14" width="2.6" height="11" rx="1.3" fill="#F2C088" stroke="#E0A86B" strokeWidth="0.6" />
      <rect x="48.6" y="12" width="2.6" height="13" rx="1.3" fill="#F2C088" stroke="#E0A86B" strokeWidth="0.6" />
      <rect x="52" y="13" width="2.6" height="12" rx="1.3" fill="#F2C088" stroke="#E0A86B" strokeWidth="0.6" />
      <rect x="55.4" y="16" width="2.6" height="9" rx="1.3" fill="#F2C088" stroke="#E0A86B" strokeWidth="0.6" />
      {/* thumb */}
      <rect x="40" y="25" width="6.5" height="2.8" rx="1.4" fill="#F2C088" stroke="#E0A86B" strokeWidth="0.6" transform="rotate(-35 44 26)" />
    </g>
  </svg>
);

export default HelloAvatar;
