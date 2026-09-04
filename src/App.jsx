import React, { useState, useEffect } from 'react';
import { Home } from './pages/Home';
import { CertificateGallery } from './pages/CertificateGallery';
import { CertificateEditor } from './pages/CertificateEditor';
import { CvGallery } from './pages/CvGallery';
import { CvEditor } from './pages/CvEditor';
import { GuidesHub } from './pages/GuidesHub';
import { GuideDetail } from './pages/GuideDetail';
import { About } from './pages/About';
import { Privacy } from './pages/Privacy';
import { NotFound } from './pages/NotFound';
import { AdPopups } from './components/AdPopups';

export function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPopState = () => {
      setCurrentPath(window.location.pathname);
    };

    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a');
      if (anchor && anchor.href && anchor.href.startsWith(window.location.origin)) {
        const url = new URL(anchor.href);
        // Only intercept internal same-domain links
        e.preventDefault();
        window.history.pushState({}, '', url.pathname);
        setCurrentPath(url.pathname);
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('popstate', onPopState);
    document.addEventListener('click', handleAnchorClick);

    return () => {
      window.removeEventListener('popstate', onPopState);
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  // Route matching logic
  const renderRoute = () => {
    const path = currentPath.replace(/\/$/, '') || '/';

    if (path === '/') {
      return <Home />;
    }

    if (path === '/certificate') {
      return <CertificateGallery />;
    }

    if (path.startsWith('/certificate/')) {
      const templateId = path.split('/certificate/')[1];
      return <CertificateEditor templateId={templateId} />;
    }

    if (path === '/cv') {
      return <CvGallery />;
    }

    if (path.startsWith('/cv/')) {
      const templateId = path.split('/cv/')[1];
      return <CvEditor templateId={templateId} />;
    }

    if (path === '/guides') {
      return <GuidesHub />;
    }

    if (path.startsWith('/guides/')) {
      const slug = path.split('/guides/')[1];
      return <GuideDetail slug={slug} />;
    }

    if (path === '/about') {
      return <About />;
    }

    if (path === '/privacy') {
      return <Privacy />;
    }

    return <NotFound />;
  };

  return (
    <>
      <AdPopups />
      {renderRoute()}
    </>
  );
}

export default App;
