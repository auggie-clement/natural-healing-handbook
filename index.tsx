import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import PreSalesPage from './pages/PreSalesPage';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const params = new URLSearchParams(window.location.search);
const routeParam = (params.get('page') || params.get('view') || '').toLowerCase();
const currentPath = decodeURIComponent(window.location.pathname).toLowerCase();
const pathSegments = currentPath.split('/').map(seg => seg.trim().toLowerCase()).filter(Boolean);

const wantsSalesByParam = ['sales', 'landing', 'main', 'handbook'].includes(routeParam);
const wantsSalesByPath = pathSegments.some(seg => ['sales', 'landing', 'handbook', 'main'].includes(seg));

const wantsPreSalesByPath = pathSegments.some(seg => ['presales', 'pre-sales', 'pre', 'ancientremedies', 'ancient-remedies'].includes(seg));
const wantsPreSalesByParam = ['pre-sales', 'presales', 'pre', 'ancient-remedies', 'ancientremedies'].includes(routeParam);

const wantsSalesRoute = wantsSalesByParam || wantsSalesByPath;
const wantsPreSalesRoute = wantsPreSalesByPath || wantsPreSalesByParam;

const isPreSalesRoute = wantsPreSalesRoute && !wantsSalesRoute;

document.title = isPreSalesRoute
  ? 'Pre-Sales Page - The Natural Healing Handbook'
  : 'Sales Page - The Natural Healing Handbook';

const Page = isPreSalesRoute ? PreSalesPage : App;

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>
);
