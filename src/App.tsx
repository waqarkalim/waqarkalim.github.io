import './App.scss'
import Content from './pages/Content'
import Sidebar from './pages/Sidebar'

function App() {
  return (
    <main className="flex flex-col justify-center gap-8 align-middle">
      <Sidebar />
      <Content />
      <footer className="flex justify-center gap-1 p-2 text-gray-500 align-middle">
        Developed by
        <a href="https://github.com/waqarkalim" className="text-gray-300">
          Waqar Bin Kalim
        </a>
      </footer>
    </main>
  )
}

export default App
