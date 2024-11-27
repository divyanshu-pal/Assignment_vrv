import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import { LuLayoutDashboard, LuUsers, LuMenu, LuX } from "react-icons/lu";
import { GoPasskeyFill } from "react-icons/go";
import { useState } from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";

// Menu items.
const items = [
  { title: "Dashboard", icon: <LuLayoutDashboard className="w-7 h-7" />, path: "/" },
  { title: "Users", icon: <LuUsers className="w-7 h-7" />, path: "/users" },
  { title: "Roles", icon: <GoPasskeyFill className="w-7 h-7" />, path: "/roles" },
 
];

export function AppSidebar() {


 

  return (
    <>

     
      <div >

      <Sidebar >
        <SidebarContent className="bg-[#002850]">
          <SidebarGroup>
            <SidebarGroupLabel className='font-bold text-2xl mb-4 text-blue-500'>VRV Security</SidebarGroupLabel>
            <SidebarGroupContent >
              <SidebarMenu >
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild className='hover:bg-[#cde9f6] '>
                    <Link  to={item.path} className="text-gray-400">
                      {item.icon}
                      <span className="text-gray-400 text-md">{item.title}</span>
                    </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      </div>
    </>
  );
}
