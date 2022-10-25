import { MainContent } from "@/commons/layouts/MainContent/MainContent";
import { Navbar } from "../../components/Navbar/Navbar";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Drawer } from "../../components/Drawer/Drawer";
import Logo from "../../assets/logo-ktg.svg";

interface ContentProps {
  children: JSX.Element
}

export const DashboardWrapper = (props: ContentProps) => {
  return (
    <div className="grid md:grid-cols-4 lg:grid-cols-5">
      <Drawer/>
      <Sidebar>
        <div className="px-8 py-3">
          <img src={Logo} alt="logo-kompetegram" />
        </div>
      </Sidebar>
      <div className="md:col-span-3 lg:col-span-4 overflow-x-auto md:overflow-x-visible">
        <Navbar/>
        <MainContent>
          {props.children}
        </MainContent>
      </div>
    </div>
  );
}