import AppSidebar from "../component/layout/AppSidebar";
import AppHeader from "../component/layout/AppHeader";
import AppContent from "../component/layout/AppContent";
import { useState } from "react";
import RightSideBar from "../component/layout/RightSideBar";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState({
    mainSidebarOpen: false,
    subHeaderOpen: false,
  });

  const toggleSidebar = () =>
    setSidebarOpen({
      mainSidebarOpen: !sidebarOpen.mainSidebarOpen,
      subHeaderOpen: false,
    });

  const toggleSubHeader = () =>
    setSidebarOpen({
      mainSidebarOpen: false,
      subHeaderOpen: !sidebarOpen.subHeaderOpen,
    });

  return (
    <div className="flex flex-col h-screen justify-center items-center overflow-hidden bg-[#181F2F]">
      <div
        className="w-[500px] flex flex-col h-full"
        style={{
          backgroundImage: "url('/dashboard/dashboard-bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Header */}
        <div className="h-[69px] shrink-0">
          <AppHeader
            toggleSidebar={toggleSidebar}
            toggleSubHeader={toggleSubHeader}
          />
        </div>

        <div className="flex-1 overflow-hidden relative">
          {sidebarOpen?.mainSidebarOpen && (
            <div className="absolute inset-0 z-50 bg-black bg-opacity-50 flex">
              <div className="w-[250px] bg-[#161111] h-full transform transition-transform duration-300 ease-in-out translate-x-0">
                <AppSidebar />
              </div>
              <div className="flex-1" onClick={toggleSidebar} />
            </div>
          )}

          {sidebarOpen?.subHeaderOpen && (
            <>
              <div
                className="absolute inset-0 z-40 bg-black bg-opacity-50"
                onClick={toggleSubHeader}
              />

              <div className="absolute top-0 right-0 z-50 h-full w-[220px] bg-[#161111] transform transition-transform duration-300 ease-in-out translate-x-0">
                <RightSideBar />
              </div>
            </>
          )}

          <div className="flex-1 overflow-y-auto">
            <AppContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
