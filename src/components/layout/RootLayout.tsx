import { Outlet } from "react-router-dom";
import { SiteHeader } from "../SiteHeader";

export function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* <Navbar /> */}
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
