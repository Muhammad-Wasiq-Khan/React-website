import { Routes, Route } from "react-router-dom"
import Home from "./components/home"
import About from "./components/About"
import Contact from "./components/Contact"
import Products from "./components/products"
import ProductDetails from "./components/productDetails"
import UserPage from "./components/UserPage"
import UserPageDetails from "./components/userPageDetail"
import SignIn from "./components/signin"
import LogIn from "./components/logIn"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/product" element={<Products />}></Route>
      <Route path="/product/:productId" element={<ProductDetails />}></Route>
      <Route path="/users" element={<UserPage />}></Route>
      <Route path="/users/:userIdDetails" element={<UserPageDetails />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
      <Route path="/logIn" element={<LogIn />}></Route>

      <Route path="*" element={<h1>404 page not found</h1>}></Route>
    </Routes>
  )
}
export default App