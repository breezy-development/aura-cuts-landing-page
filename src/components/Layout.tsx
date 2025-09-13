import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="w-full" style={{ position: "sticky", top: 0, zIndex: 50 }}>
      <Header />
      </div>
      <div className="w-full min-h-screen pt-20">
      {children}
      </div>
      <div className="w-full" style={{ position: "sticky", bottom: 0, zIndex: 50 }}>
      <Footer />
      </div>
    </>
  );
}