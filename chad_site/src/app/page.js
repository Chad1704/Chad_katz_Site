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
      <div className="absolute top-20 left-40 w-96 h-96  rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>


      {/* Main Content Section */}
      <div className="h-[calc(100vh-4rem)] w-screen  flex flex-col overflow-y-hidden  ">
        
        <Contact />
        
      </div>
    </div>
    </div>
  );
}
