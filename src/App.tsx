import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'

function App() {
  const [count, setCount] = useState(0)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    // Apply theme class to document
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  const createText = () => {
    parent.postMessage({ pluginMessage: { type: 'create-text' } }, '*')
  }

  const closePlugin = () => {
    parent.postMessage({ pluginMessage: { type: 'close' } }, '*')
  }

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div className="h-screen overflow-auto p-6 flex flex-col items-center bg-warm-50 dark:bg-grey-900 text-grey-900 dark:text-grey-50 transition-colors duration-200">
      {/* Theme Toggle */}
      <div className="absolute top-4 right-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-warm-100 dark:bg-grey-800 hover:bg-warm-200 dark:hover:bg-grey-700 transition-colors"
          title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {isDark ? (
            <svg className="w-5 h-5 text-warm-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-grey-700" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </button>
      </div>

      <div className="mb-4">
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react h-20 w-20" alt="React logo" />
        </a>
      </div>
      <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">UX Copywriter</h1>

      <div className="card mb-4 flex flex-col gap-3">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-lg transition-colors shadow-md hover:shadow-lg"
        >
          count is {count}
        </button>
        <p className="text-sm text-grey-500 dark:text-grey-400">
          Edit <code className="bg-warm-100 dark:bg-grey-800 px-2 py-1 rounded text-brand-500">src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <div className="card mb-4 flex flex-col gap-3 w-full max-w-sm">
        <button
          onClick={createText}
          className="px-4 py-2 bg-brand-500 hover:bg-brand-600 text-white rounded-lg transition-colors shadow-md hover:shadow-lg font-medium"
        >
          Create "Hello World" Text
        </button>
        <button
          onClick={closePlugin}
          className="px-4 py-2 bg-grey-500 hover:bg-grey-600 dark:bg-grey-700 dark:hover:bg-grey-600 text-white rounded-lg transition-colors shadow-md hover:shadow-lg"
        >
          Close Plugin
        </button>
      </div>

      <p className="text-xs text-grey-500 dark:text-grey-400 mt-auto text-center">
        Theme: {isDark ? 'Dark' : 'Light'} Mode
      </p>
    </div>
  )
}

export default App
