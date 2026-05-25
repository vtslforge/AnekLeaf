"use client";

import { useState } from "react";
import { Content } from "@/components/content";
import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";

const Page = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);

  return (
    <div className="flex h-screen min-h-0 flex-col overflow-hidden">
      <Navbar
        isSidebarCollapsed={sidebarCollapsed}
        onToggleSidebar={() => setSidebarCollapsed((value) => !value)}
      />
      <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden">
        <div className="flex min-h-0 flex-1 flex-col">
          <Content />
        </div>
        <Sidebar
          collapsed={sidebarCollapsed}
          onCollapse={() => setSidebarCollapsed(true)}
        />
      </div>
    </div>
  );
};

export default Page;
