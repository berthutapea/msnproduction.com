import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import React, { Suspense } from "react";
import { NotFound, Loader, ScrollToTop, Navbar, Footer, BlogDetail, BlogIndex } from "./components";
import Blog from "./pages/Blog";
import Kontak from "./pages/Kontak";
import Tentang from "./pages/Tentang";
const Home = React.lazy(() => import("./pages/Home"));
const Paket = React.lazy(() => import("./pages/Paket"));

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
