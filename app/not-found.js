import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = { title: "Page not found | Vana Kanaka Yoga Bali" };

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main" className="section">
        <div className="container" style={{ display: "grid", gap: "1.25rem", justifyItems: "start" }}>
          <h1 style={{ fontSize: "var(--fs-h2)", color: "var(--green)" }}>Page not found</h1>
          <p>This page doesn’t exist. Everything about the studio is on the home page.</p>
          <a className="btn btn-primary" href="/">
            Back to the home page
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
