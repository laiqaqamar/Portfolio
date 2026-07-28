import Navbar from "./Navbar";
import Footer from "./Footer";

export default function MainLayout({ children }) {
  return (
    <div className="app">
      <Navbar />

      <main>
        {children}
      </main>

      <Footer />
    </div>
  );
}