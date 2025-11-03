import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/app-sidebar'
import { Week1 } from '@/pages/Week1'
import { Week2 } from '@/pages/Week2'
import { Week3 } from '@/pages/Week3'
import { Week4 } from '@/pages/Week4'
import { Week5 } from '@/pages/Week5'
import { Week6 } from '@/pages/Week6'
import { Home } from './pages/Home'
import './App.css'

function App() {
  return (
    <Router>
      <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger className="fixed top-4 left-4 z-40 transition-all duration-200 peer-data-[state=expanded]:left-[calc(16rem+1rem)]" />
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/week1" element={<Week1 />} />
            <Route path="/week2" element={<Week2 />} />
            <Route path="/week3" element={<Week3 />} />
            <Route path="/week4" element={<Week4 />} />
            <Route path="/week5" element={<Week5 />} />
            <Route path="/week6" element={<Week6 />} />
          </Routes>
        </main>
      </SidebarProvider>
    </Router>
  )
}

export default App
