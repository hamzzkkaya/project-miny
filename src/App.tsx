import { BrowserRouter, Routes, Route } from "react-router"
import { Layout } from "./components/layout/Layout"
import { Home } from "./pages/Home"
import { Download } from "./pages/Download"
import { Mods } from "./pages/Mods"
import { About } from "./pages/About"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"
import { ModDetail } from "./pages/ModDetail"
import { Privacy } from "./pages/Privacy"
import { Terms } from "./pages/Terms"
import { Contact } from "./pages/Contact"
import { Profile } from "./pages/Profile"

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/download" element={<Download />} />
          <Route path="/mods" element={<Mods />} />
          <Route path="/mods/:modId" element={<ModDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
