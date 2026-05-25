import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

type NavbarProps = {
  isSidebarCollapsed: boolean;
  onToggleSidebar: () => void;
};

export function Navbar({ isSidebarCollapsed, onToggleSidebar }: NavbarProps) {
  return (
    <header className="flex h-[6vh] min-h-12 w-full items-center justify-between border-b bg-background px-4 font-medium">
      <Image
        className=" select-none"
        src={"/logo.png"}
        width={100}
        height={100}
        alt="Anekleaf logo"
        loading="eager"
        draggable={false}
      />
      <Button
        aria-label={isSidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        onClick={onToggleSidebar}
        size="icon-sm"
        variant="ghost"
      >
        {isSidebarCollapsed ? (
          <ChevronLeft className="size-4" aria-hidden="true" />
        ) : (
          <ChevronRight className="size-4" aria-hidden="true" />
        )}
      </Button>
    </header>
  );
}
