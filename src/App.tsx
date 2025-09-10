import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/app-sidebar'
import { Week1 } from '@/pages/Week1'
import { Landing } from './pages/Landing'
import './App.css'

function App() {
  return (
    <Router>
      <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger className="fixed top-4 left-4 z-40 transition-all duration-200 peer-data-[state=expanded]:left-[calc(16rem+1rem)]" />
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/landing" replace />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/week1" element={<Week1 />} />
          </Routes>
        </main>
      </SidebarProvider>
    </Router>
  )
}

export default App
