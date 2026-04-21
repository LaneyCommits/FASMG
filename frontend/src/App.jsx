import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import GalleryPage from './pages/GalleryPage'
import EventsPage from './pages/EventsPage'
import ClassesPage from './pages/ClassesPage'
import AboutPage from './pages/AboutPage'
import BoardMembersPage from './pages/BoardMembersPage'
import JoinPage from './pages/JoinPage'
import DonatePage from './pages/DonatePage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/classes" element={<ClassesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/boardmembers" element={<BoardMembersPage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/donate" element={<DonatePage />} />
      </Route>
    </Routes>
  )
}
