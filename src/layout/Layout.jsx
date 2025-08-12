import AppSidebar from "../component/layout/AppSidebar";
import AppHeader from "../component/layout/AppHeader";
import AppContent from "../component/layout/AppContent";
import { useState } from "react";
import RightSideBar from "../component/layout/RightSideBar";
import SubHeader from "../component/header/SubHeader";
import {
  useLocation,
  useNavigate,
} from "react-router-dom";


const Layout = () => {
  const location = useLocation();

  const isAddCashPage = [
    "/addcash",
    "/addbank",
    "/personalinfo",
    "/login",
    "/signup",
    "/history",
    "/download",
    "/paymentcollectionhistory",
  ].includes(location.pathname);
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
    <div className="flex flex-col  h-screen justify-center items-center bg-[#181F2F]">
    <div
  className="w-full min-h-screen flex flex-col sm:max-w-[500px] mx-auto"
  style={{
    backgroundImage: "url('/dashboard/dashboard-bg.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
        {!isAddCashPage && (
          <div className="h-[69px] shrink-0">
            <AppHeader
              toggleSidebar={toggleSidebar}
              toggleSubHeader={toggleSubHeader}
            />
          </div>
        )}

        <div className="flex-1 overflow-hidden relative">
          {sidebarOpen.mainSidebarOpen && !isAddCashPage && (
            <div className="absolute inset-0 z-50 bg-black bg-opacity-50 flex">
              <div className="w-[250px] bg-[#161111] h-full">
                <AppSidebar toggleSidebar={toggleSidebar} />
              </div>
              <div className="flex-1" onClick={toggleSidebar} />
            </div>
          )}

          {sidebarOpen.subHeaderOpen && !isAddCashPage && (
            <>
              <div
                className="absolute inset-0 z-40 bg-black bg-opacity-50"
                onClick={toggleSubHeader}
              />
              <div className="absolute top-0 right-0 z-50 h-full w-[220px] bg-[#161111]">
                <RightSideBar toggleSidebar={toggleSubHeader} />
              </div>
            </>
          )}

          <div className="flex-1 overflow-y-auto">
            <AppContent />
          </div>
          {!isAddCashPage && (
            <div className="absolute bottom-0 left-0 right-0 bg-black/75 backdrop-blur-md h-[70px]">
              <SubHeader />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Layout;
