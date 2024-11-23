import { Route, Routes } from "react-router-dom"
import { Profile } from "../pages/Profile"
import { LayoutMain } from "../layouts/LayoutMain"
import { MovieDetails } from "../pages/MovieDetails"

export const RoutesApp = () => {
  return (
    <Routes>
      <Route element={<LayoutMain/>}>
        <Route path="/filmes/:id" element={<MovieDetails/>} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/favoritos" element={<div>Página de favoritos</div>} />
        <Route path="/" element={<div>Página home</div>} />
      </Route>
      <Route path="/*" element={<div>Página não encontrada</div>} />
    </Routes>
  )
}