'use client'

import { useEffect } from 'react';

const BadgeComponent = () => {
  useEffect(() => {
    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://www-cdn.icef.com/scripts/iasbadgeid.js';
    scriptElement.async = true;
    scriptElement.defer = true;
    scriptElement.crossOrigin = 'anonymous';

    const badgeElement = document.getElementById('iasBadge');
    
    if (badgeElement) {
      badgeElement.appendChild(scriptElement);
    }

    return () => {
      if (badgeElement && badgeElement.contains(scriptElement)) {
        badgeElement.removeChild(scriptElement);
      }
    };
  }, []); 

  return <span id="iasBadge" data-account-id="6238"></span>;
};

export default BadgeComponent;
