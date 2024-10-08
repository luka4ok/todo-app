import { createRoot } from 'react-dom/client';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './styles/index.scss';

import { App } from './App';
import { GlobalStateProvider } from './store/TodoContext';

const container = document.getElementById('root') as HTMLDivElement;

createRoot(container).render(
  <GlobalStateProvider>
    <App />
  </GlobalStateProvider>,
);
