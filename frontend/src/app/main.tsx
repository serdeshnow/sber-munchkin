import { createRoot } from 'react-dom/client';
import '@styles/index.css';
import { Assistant } from '@shared/lib/voiceAssistant.tsx';

createRoot(document.getElementById('root')!).render(<Assistant />);
