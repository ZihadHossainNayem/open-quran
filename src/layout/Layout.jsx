import { Content } from "./Content";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <Content />
      </div>
      <Footer />
    </div>
  );
};
