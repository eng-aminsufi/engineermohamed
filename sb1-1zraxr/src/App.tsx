import { useThemeStore } from './store/theme';
import { Moon, Sun } from 'lucide-react';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';

export function App() {
  const { isDark, toggleTheme } = useThemeStore();

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-black text-gray-900 dark:text-white">
        <div className="fixed inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
        <button
          onClick={toggleTheme}
          className="fixed top-4 right-4 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm z-50 shadow-lg"
        >
          {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button>
        
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Blog />
        <Contact />
      </div>
    </div>
  );
}