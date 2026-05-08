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
import ProtectedRouter from "./components/protectdRouter"
import AdminPage from "./components/admin"
function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />}></Route> */}
      <Route path="/" element={<LogIn />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>

      <Route element={<ProtectedRouter allowedRole={["user"]} />}>
      <Route path="/user/about" element={<About />}></Route>
      </Route>
      <Route element={<ProtectedRouter allowedRole={["user"]} />}>
      <Route path="/user/contact" element={<Contact />}></Route>
      </Route>
      <Route element={<ProtectedRouter allowedRole={["user"]} />}>
      <Route path="/user/product" element={<Products />}></Route>
      </Route>
      <Route element={<ProtectedRouter allowedRole={["user"]} />}>
      <Route path="/product/:productId" element={<ProductDetails />}></Route>
      </Route>
      <Route element={<ProtectedRouter allowedRole={["user"]} />}>
        <Route path="/user/home" element={<Home />}></Route>
      </Route>

      <Route element={<ProtectedRouter allowedRole={["admin"]} />}>
      <Route path="/admin/users" element={<UserPage />}></Route>
      </Route>
      <Route element={<ProtectedRouter allowedRole={["admin"]} />}>
      <Route path="/admin/users/:userIdDetails" element={<UserPageDetails />}></Route>
      </Route>
      <Route element={<ProtectedRouter allowedRole={["admin"]} />}>
        <Route path="/admin/dashoard" element={<AdminPage />} />
      </Route>

      <Route path="*" element={<h1>404 page not found</h1>}></Route>
    </Routes>
  )
}
export default App