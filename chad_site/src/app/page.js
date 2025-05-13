import Header from "./header";
import Contact from "./contact";

export default function Home() {
  return (
    <div className="flex h-screen "   >
      
    <div className="flex-col w-screen  ">
      {/* Header Section */}
      <div className="h-16 flex items-center px-4 ">
        <Header />
      </div>

      {/* Main Content Section */}
      <div className="h-[calc(100vh-4rem)] w-screen  flex flex-col  ">
        <Contact />
      </div>
    </div>
    </div>
  );
}
