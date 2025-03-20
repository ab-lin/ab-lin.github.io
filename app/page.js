import Intro from "./components/Intro";
import Footer from "./components/Footer";

export default function Home() {
  return (
      <main className="min-h-screen ">
        <div>
          <Intro />
          <Footer />
        </div>
      </main>
  );
}
