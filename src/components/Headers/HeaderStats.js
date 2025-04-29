import React from "react";

// components
import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="TERRITORIES OBSERVED"
                  statTitle="163"
                  statArrow="up"
                  statPercent="12%"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="far fa-map"
                  statIconColor="bg-green-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="SPECIES MONITORED"
                  statTitle="1,482"
                  statArrow="down"
                  statPercent="1.5%"
                  statPercentColor="text-red-500"
                  statDescripiron="Since last quarter"
                  statIconName="fas fa-leaf"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="ALERTS GENERATED"
                  statTitle="213"
                  statArrow="up"
                  statPercent="9.8%"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-bell"
                  statIconColor="bg-yellow-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="IMPACT REPORTS GENERATED"
                  statTitle="78"
                  statArrow="up"
                  statPercent="6%"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last week"
                  statIconName="fas fa-file-alt"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
