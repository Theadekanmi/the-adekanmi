import dynamic from 'next/dynamic';

const Overview = dynamic(() => import('./overview'));
const WebDevelopment = dynamic(() => import('./webdevelopment'));
const Performance = dynamic(() => import('./performance'));
const SEO = dynamic(() => import('./seo'));
const Maintenance = dynamic(() => import('./maintenance'));

export default function ServicePage({ params }) {
  const slug = params.slug?.[0] || 'overview';

  const components = {
    overview: <Overview />,
    'web-development': <WebDevelopment />,
    performance: <Performance />,
    seo: <SEO />,
    maintenance: <Maintenance />,
  };

  return components[slug] || <div>Page not found</div>;
}
