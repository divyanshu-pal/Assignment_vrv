import { Outlet } from "react-router-dom";



import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function Layout() {
  return (
      <div className="flex min-h-screen bg-gray-100 w-full">
      <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 overflow-x-hidden overflow-y-auto">
        <SidebarTrigger />
        <div className=" w-full p-4 md:p-6 lg:p-8">
         <Outlet />
         </div>
      </main>
    </SidebarProvider>
      </div>
  );
}
