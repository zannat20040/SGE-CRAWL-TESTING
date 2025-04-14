// components/VideoPlayer.tsx
'use client';

import dynamic from 'next/dynamic';

// Disable SSR for this component
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

export default ReactPlayer;
