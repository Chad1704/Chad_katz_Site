import Header from "./header";
import Contact from "./contact";

export default function Home() {
  return (
    <div>
      {/* Header Section */}
      <div className="h-16 flex items-center px-4">
        <Header />
      </div>

      {/* Main Content Section */}
      <div className="h-[calc(100vh-4rem)] border">
        <Contact />
      </div>
    </div>
  );
}
