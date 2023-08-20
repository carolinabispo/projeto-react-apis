import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from '../pages/home/Home'
import Pokedex from "../pages/pokedex/Pokedex"
import DetailPage from "../pages/details/DetailPage"
const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokedex" element={<Pokedex />} />
            <Route path="/details/:id" element={<DetailPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router
