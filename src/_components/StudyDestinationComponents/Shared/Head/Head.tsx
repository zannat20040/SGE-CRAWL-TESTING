import React from 'react';
import Head from 'next/head';

interface MetaProps {
    title: string;
    description: string;
    keywords?: string[];
    ogTitle?: string;
    ogDescription?: string;
    ogUrl?: string;
    ogImage?: string;
    twitterCard?: 'summary' | 'summary_large_image';
    twitterImage?: string;
}

const Meta: React.FC<MetaProps> = ({
    title,
    description,
    keywords = [],
    ogTitle,
    ogDescription,
    ogUrl,
    ogImage,
    twitterCard = 'summary_large_image',
    twitterImage,
}) => {
    return (
        <div>
            <title>{title}</title>
            <meta name="description" content={description} />
            {ogTitle && <meta property="og:title" content={ogTitle} />}
            {ogDescription && <meta property="og:description" content={ogDescription} />}
            <Head>
                {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}

                {/* Open Graph Meta Tags */}
                {ogUrl && <meta property="og:url" content={ogUrl} />}
                {ogImage && <meta property="og:image" content={ogImage} />}

                {/* Twitter Card Meta Tags */}
                <meta name="twitter:card" content={twitterCard} />
                {ogTitle && <meta name="twitter:title" content={ogTitle} />}
                {ogDescription && <meta name="twitter:description" content={ogDescription} />}
                {twitterImage && <meta name="twitter:image" content={twitterImage} />}
            </Head>
        </div>
    );
};

export default Meta;
