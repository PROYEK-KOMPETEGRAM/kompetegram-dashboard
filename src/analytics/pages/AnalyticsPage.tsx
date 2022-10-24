import { DashboardHeader } from "@/commons/components/DashboardHeader/DashboardHeader";
import { CardWrapper } from "@/commons/layouts/CardWrapper/CardWrapper";
import { Stats } from "../components/Stats";
import { FaUserAlt, FaUserShield, FaSchool, FaBuilding } from "react-icons/fa";

export const AnalyticsPage = () => {
  return (
    <>
      <DashboardHeader title="Statistik" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <CardWrapper >
          <div className="flex flex-row">
            <div className="w-1 bg-blue-400 rounded-tl-lg rounded-bl-lg"/>
            <Stats value={134} title="Jumlah Pendaftar" >
              <FaUserAlt color="#64b5f6" size="1.2em" />
            </Stats>
          </div>
        </CardWrapper>
        <CardWrapper>
          <div className="flex flex-row">
            <div className="w-1 bg-blue-400 rounded-tl-lg rounded-bl-lg"/>
            <Stats value={128} title="Pendaftar Terverifikasi" >
              <FaUserShield color="#64b5f6" size="1.5em" />
            </Stats>
          </div>
        </CardWrapper>
        <CardWrapper>
          <div className="flex flex-row">
            <div className="w-1 bg-blue-400 rounded-tl-lg rounded-bl-lg"/>
            <Stats value={15} title="Jumlah Program Studi" >
              <FaSchool color="#64b5f6" size="1.5em" />
            </Stats>
          </div>
        </CardWrapper>
        <CardWrapper>
          <div className="flex flex-row">
            <div className="w-1 bg-blue-400 rounded-tl-lg rounded-bl-lg"/>
            <Stats value={7} title="Jumlah Fakultas" >
              <FaBuilding color="#64b5f6" size="1.25em" />
            </Stats>
          </div>
        </CardWrapper>
      </div>
    </>
  );
}