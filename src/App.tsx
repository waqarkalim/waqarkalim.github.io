import './App.scss'
import Content from './pages/Content'
import Sidebar from './pages/Sidebar'

function App() {
  return (
    <main className="flex flex-col justify-center gap-8 align-middle sm:gap-0 lg:flex-row lg:gap-8 xl:px-20 2xl:px-40">
      <Sidebar />
      <Content />
    </main>
  )
}

export default App
