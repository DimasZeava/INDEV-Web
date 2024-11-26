import Navbar from "./components/Navbar"
import Footer from "./components/Footer";

function App() {
  return (
    <section className="hero-section bg-cover bg-center bg-no-repeat h-screen pt-2" style={{ backgroundImage: "url('./assets/images/background-hero-section.png')" }}>
      <Navbar/>
      <Footer />
    </section>
  );
}

export default App;