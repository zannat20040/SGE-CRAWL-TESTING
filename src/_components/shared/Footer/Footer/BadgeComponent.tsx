import Script from 'next/script';

const BadgeComponent = () => {
  return (
    <>
      <Script
        src="https://www-cdn.icef.com/scripts/iasbadgeid.js"
        strategy="afterInteractive"
        crossOrigin="anonymous"
      />
      <span id="iasBadge" data-account-id="6238"></span>
    </>
  );
};

export default BadgeComponent;
