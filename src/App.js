import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import React, { Suspense } from "react";
import NotFound from "./pages/shared/NotFound";
import Loader from "./pages/shared/Loader";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Navbar from "./pages/shared/Navbar";
import Footer from "./pages/shared/Footer";
import Blog from "./pages/Blog/Blog";
import BlogDetail from "./pages/Blog/BlogDetail";
import BlogIndex from "./pages/Blog/BlogIndex";
import Kontak from "./pages/Kontak/Kontak";
import Tentang from "./pages/Tentang/Tentang";
const Home = React.lazy(() => import("./pages/Home/Home"));
const Paket = React.lazy(() => import("./pages/Paket/Paket"));

function App() {
  const location = useLocation();
  const isFalse = location.pathname.includes("404");
  return (
    <>
      <ScrollToTop />
      {isFalse || <Navbar />}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/paket" element={<Paket />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/blog" element={<Blog />}>
            <Route index element={<BlogIndex />} />
            <Route path=":blog_path" element={<BlogDetail />} />
          </Route>
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate replace to="/404" />}></Route>
        </Routes>
      </Suspense>
      {isFalse || <Footer />}
    </>
  );
}

export default App;
