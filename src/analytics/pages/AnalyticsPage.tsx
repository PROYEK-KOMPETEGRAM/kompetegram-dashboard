import { DashboardHeader } from "@/commons/components/DashboardHeader/DashboardHeader";
import { Stats } from "../components/Stats";
import { FaUserAlt, FaUserShield, FaSchool, FaBuilding } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { getDepartmentsCount, getMajorsCount, getMembersCount, getTopDepartments, getTopMajors, getVerifiedMembersCount } from "../api/stats";
import { useEffect } from "react";
import { Modals } from "@/commons/components/Modals/Modals";
import { useRef } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { chartOptions, legendMargin } from "../helpers/charts";

ChartJS.register(ArcElement, Tooltip, Legend);

export const AnalyticsPage = () => {
  const [membersCount, setMembersCount] = useState<string | number>(0);
  const [verifiedCount, setVerifiedCount] = useState<string | number>(0);
  const [majorsCount, setMajorsCount] = useState<string | number>(0);
  const [departmentsCount, setDepartmentsCount] = useState<string | number>(0);
  const [topDepartmentsLabel, setTopDepartmentsLabel] = useState<any[]>([]);
  const [topDepartmentsCount, setTopDepartmentsCount] = useState<any[]>([]);
  const [topMajorsLabel, setTopMajorsLabel] = useState<any[]>([]);
  const [topMajorsCount, setTopMajorsCount] = useState<any[]>([]);
  const modals: any = useRef();

  const majorsChart = useMemo(
    () => [{
      labels: topMajorsLabel,
      datasets: [
        {
          label: 'Program Studi',
          data: topMajorsCount,
          backgroundColor: ['#1E40AF','#1D4ED8','#2563EB','#3B82F6','#60A5FA'],
          borderColor: ['#60A5FA','#60A5FA','#60A5FA','#60A5FA','#60A5FA'],
          borderWidth: 1,
        },
      ],
    }], [topMajorsLabel,topMajorsCount]
  )

  const departmentsChart = useMemo(
    () => [{
      labels: topDepartmentsLabel,
      datasets: [
        {
          label: 'Fakultas',
          data: topDepartmentsCount,
          backgroundColor: ['#1E40AF','#1D4ED8','#2563EB','#3B82F6','#60A5FA'],
          borderColor: ['#60A5FA','#60A5FA','#60A5FA','#60A5FA','#60A5FA'],
          borderWidth: 1,
        },
      ],
    }], [topDepartmentsLabel,topDepartmentsCount]
  )

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

  const topDepartments = useQuery(["topdepartments"], getTopDepartments, {
    enabled:false,
    select: (data: any) => data.data,
    retry: 1,
    onSuccess: (data: any) => {
      let labels = [];
      let counts = [];

      for (const items of data) {
        labels.push(items._id);
        counts.push(items.count);
      }

      setTopDepartmentsLabel(labels);
      setTopDepartmentsCount(counts);
    }
  })

  const topMajors = useQuery(["topmajors"], getTopMajors, {
    enabled:false,
    select: (data: any) => data.data,
    retry: 1,
    onSuccess: (data: any) => {
      let labels = [];
      let counts = [];

      for (const items of data) {
        labels.push(items._id);
        counts.push(items.count);
      }

      setTopMajorsLabel(labels);
      setTopMajorsCount(counts);
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
    topDepartments.refetch();
    topMajors.refetch();
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-gray-700 shadow-sm rounded-lg lg:my-8 sm:my-4 my-2">
          <h3 
            className="p-4 font-open-sans text-gray-100 font-medium text-sm sm:text-base my-1 uppercase"
          >
            Program Studi Terbanyak - Top 5
          </h3>
          <div 
            className="lg:px-16 lg:pb-16 lg:pt-6 sm:px-8 sm:pb-8 sm:pt-4 px-6 pb-8 pt-2"
          >
            <Doughnut data={majorsChart[0]} options={chartOptions} plugins={[legendMargin]} />
          </div>
        </div>
        <div className="bg-gray-700 shadow-sm rounded-lg lg:my-8 sm:my-4 my-2">
          <h3 
            className="p-4 font-open-sans text-gray-100 font-medium text-sm sm:text-base my-1 uppercase"
          >
            Fakultas Terbanyak - Top 5
          </h3>
          <div 
            className="lg:px-16 lg:pb-16 lg:pt-6 sm:px-8 sm:pb-8 sm:pt-4 px-6 pb-8 pt-2"
          >
            <Doughnut data={departmentsChart[0]} options={chartOptions} plugins={[legendMargin]} />
          </div>
        </div>
      </div>
    </>
  );
}