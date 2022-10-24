import { DashboardHeader } from "@/commons/components/DashboardHeader/DashboardHeader";
import { CardWrapper } from "@/commons/layouts/CardWrapper/CardWrapper";

export const AnalyticsPage = () => {
  return (
    <>
      <DashboardHeader title="Statistik" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <CardWrapper >
          <h1>Helo</h1>
        </CardWrapper>
        <CardWrapper>
          <h1>Helo</h1>
        </CardWrapper>
        <CardWrapper>
          <h1>Helo</h1>
        </CardWrapper>
        <CardWrapper>
          <h1>Helo</h1>
        </CardWrapper>
      </div>
    </>
  );
}