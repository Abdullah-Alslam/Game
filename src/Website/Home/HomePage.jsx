import Footer from "../../Components/website/Footer";
import TopBar from "../../Components/website/TopBar";
import Body from "./Body";

export default function HomePage() {
  return (
    <section>
      <div className="home">
        <TopBar />
        <Body/>
        <Footer/>
      </div>
    </section>
  );
}
