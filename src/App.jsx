import Container from "./components/container/Container";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Shop from "./page/Shop";
import About from "./page/About";
import Error from "./components/error/Error";
import Cart from "./page/Cart";
import ProductDetails from "./page/ProductDetails";
import Search from "./page/Search";
import CategoryProduct from "./page/CategoryProduct";

function App() {
  return (
    <Container>
      <Header />
      <Hero>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/details/:id" element={<ProductDetails />} />
          <Route path="/category/:category" element={<CategoryProduct />} />
          <Route path="/search" element={<Search />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </Hero>
      <Footer />
    </Container>
  );
}

export default App;
