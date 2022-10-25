import { DashboardHeader } from "@/commons/components/DashboardHeader/DashboardHeader";
import { Stats } from "../components/Stats";
import { FaUserAlt, FaUserShield, FaSchool, FaBuilding } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getDepartmentsCount, getMajorsCount, getMembersCount, getVerifiedMembersCount } from "../api/stats";
import { useEffect } from "react";
import { Modals } from "@/commons/components/Modals/Modals";
import { useRef } from "react";

export const AnalyticsPage = () => {
  const [membersCount, setMembersCount] = useState<string | number>(0);
  const [verifiedCount, setVerifiedCount] = useState<string | number>(0);
  const [majorsCount, setMajorsCount] = useState<string | number>(0);
  const [departmentsCount, setDepartmentsCount] = useState<string | number>(0);
  const modals: any = useRef();

  const members = useQuery(["members"], getMembersCount, {
    enabled: false,
    select: (data: any) => data.data,
    retry: 1,
    onSuccess: (data: any) => {
      setMembersCount(data[0].members_count);
    }
  })

  const verified = useQuery(["verified"], getVerifiedMembersCount, {
    enabled: false,
    select: (data: any) => data.data,
    retry: 1,
    onSuccess: (data: any) => {
      setVerifiedCount(data[0].verified_count);
    }
  })

  const majors = useQuery(["majors"], getMajorsCount, {
    enabled: false,
    select: (data: any) => data.data,
    retry: 1,
    onSuccess: (data: any) => {
      setMajorsCount(data[0].count);
    }
  })

  const departments = useQuery(["departments"], getDepartmentsCount, {
    enabled: false,
    select: (data: any) => data.data,
    retry: 1,
    onSuccess: (data: any) => {
      setDepartmentsCount(data[0].count);
    }
  })

  const showModal = () => {
    const session = sessionStorage.getItem("ACK");
    console.log(session);
    if (!session) {
      modals.current?.click();
      sessionStorage.setItem("ACK","CLICK");
    }
  }

  useEffect(() => {
    showModal();
    members.refetch();
    verified.refetch();
    majors.refetch();
    departments.refetch();
  },[])

  return (
    <>
      <Modals/>
      <DashboardHeader title="Statistik" />
      <div 
        ref={modals}
        className="hidden"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gray-700 shadow-sm rounded-lg lg:my-8 sm:my-4 my-2">
          <div className="flex flex-row">
            <div className="w-1 bg-blue-400 rounded-tl-lg rounded-bl-lg"/>
            <Stats value={membersCount} title="Jumlah Pendaftar" >
              <FaUserAlt color="#64b5f6" size="1.2em" />
            </Stats>
          </div>
        </div>
        <div className="bg-gray-700 shadow-sm rounded-lg lg:my-8 sm:my-4 my-2">
          <div className="flex flex-row">
            <div className="w-1 bg-blue-400 rounded-tl-lg rounded-bl-lg"/>
            <Stats value={verifiedCount} title="Pendaftar Terverifikasi" >
              <FaUserShield color="#64b5f6" size="1.5em" />
            </Stats>
          </div>
        </div>
        <div className="bg-gray-700 shadow-sm rounded-lg lg:my-8 sm:my-4 my-2">
          <div className="flex flex-row">
            <div className="w-1 bg-blue-400 rounded-tl-lg rounded-bl-lg"/>
            <Stats value={majorsCount} title="Jumlah Program Studi" >
              <FaSchool color="#64b5f6" size="1.5em" />
            </Stats>
          </div>
        </div>
        <div className="bg-gray-700 shadow-sm rounded-lg lg:my-8 sm:my-4 my-2">
          <div className="flex flex-row">
            <div className="w-1 bg-blue-400 rounded-tl-lg rounded-bl-lg"/>
            <Stats value={departmentsCount} title="Jumlah Fakultas" >
              <FaBuilding color="#64b5f6" size="1.25em" />
            </Stats>
          </div>
        </div>
      </div>
    </>
  );
}