import AdminNavbar from "@/_components/AdminPanel/AdminNavbar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-100">
        <AdminNavbar />
        <main className="flex-grow container mx-auto">{children}</main>
      </div>
    );
  }
  