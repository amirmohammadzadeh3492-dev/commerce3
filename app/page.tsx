import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className="container">
        <h1>Commerce AI</h1>
        <p>فروشگاه + اتوماسیون اینستاگرام</p>

        <Button onClick={() => alert("شروع")}>
          شروع رایگان
        </Button>
      </div>

      <Footer />
    </div>
  );
}
