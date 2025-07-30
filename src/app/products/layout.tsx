import Header from '@/app/ui/landingpage/Header';

export const experimental_ppr = true;
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <Header />
      <div className="w-full flex-none md:w-64">
        {/* Sidebar (future use) */}
      </div>

       {/* Main content area */}
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
       {/* Footer content area */}
    </div>
  );
}