import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className="w-full min-h-screen pt-24 md:pt-24">
        {children}
      </div>
      <Footer />
    </>
  );
}