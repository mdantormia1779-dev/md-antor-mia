import Navbar from "../components/AdimDashboard/Navbar/Navbar";
import Sidebar from "../components/AdimDashboard/Sidebar/Sidebar";

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-950/50">
      
      {/* Sidebar: h-screen এবং sticky ব্যবহার করা হয়েছে */}
      <aside className="h-screen sticky top-0">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <div className="flex flex-col flex-1 h-screen overflow-hidden">
        
        {/* Navbar: sticky টপে থাকবে */}
        <header className="sticky top-0 z-10 bg-gray-950/80 backdrop-blur-md">
          <Navbar />
        </header>

        {/* Page Content: শুধু এই অংশটুকু স্ক্রল হবে */}
        <main className="flex-1 overflow-y-auto h-screen">
          {children}
        </main>

      </div>
    </div>
  );
}