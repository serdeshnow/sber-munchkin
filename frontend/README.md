# React + TypeScript + Vite

Импортируйте SVG правильно:
// Для React-компонента
// Используйте ?react для явного указания типа
import ViteLogo from '/vite.svg?react';

// Для URL (только public/svg)
// Используйте ?url для получения строкй
import viteLogo from '/vite.svg?url';

Для public/svg (статических файлов)
tsx
Copy
// Используйте напрямую путь без импорта
<img src="/vite.svg" className={s.logo} alt="Vite logo" />
