import './App.scss'
import Content from './pages/Content'
import Sidebar from './pages/Sidebar'

function App() {
  return (
    <main className="flex flex-col justify-center align-middle gap-8">
      <Sidebar />
      <Content />
      <footer className="flex justify-center gap-1 p-2 align-middle text-gray-500">
        Developed by
        <a href="https://github.com/waqarkalim" className="text-gray-300">
          Waqar Bin Kalim
        </a>
      </footer>
    </main>
  )
}

export default App
