// import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import '@styles/index.css';
// import { RouterProvider } from 'react-router';
// import { router } from './providers/router.tsx';
import {Ass} from "@shared/lib/voiceAssistant.tsx";

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <Ass/>,
  {/*<RouterProvider router={router} />*/}
  // </StrictMode>,
);
