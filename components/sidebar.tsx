type SidebarProps = {
  collapsed: boolean;
  onCollapse: () => void;
};

export function Sidebar({ collapsed, onCollapse }: SidebarProps) {
  if (collapsed) {
    return null;
  }

  return (
    <>
      <button
        aria-label="Collapse sidebar backdrop"
        className="absolute inset-0 z-30 bg-black/20"
        onClick={onCollapse}
        type="button"
      />
      <aside className="absolute bottom-0 right-0 top-0 z-40 min-h-0 w-[85vw] max-w-sm shrink-0 border-l bg-sidebar text-sidebar-foreground shadow-lg transition-all duration-300 md:w-[30vw] md:min-w-80 md:max-w-md">
        <div className="flex h-full min-h-0 flex-col">
          <div className="flex h-12 items-center border-b px-3">
            <h2 className="font-medium">Sidebarrr</h2>
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto p-4 font-medium">
            Sidebar
          </div>
        </div>
      </aside>
    </>
  );
}
