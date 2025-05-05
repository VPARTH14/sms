import React, { useEffect, useState } from "react";
import Sidebar from "../../layout/Sidebar";
import Header from "../../layout/Header";
import Activity from "./Activity";
import Notes from "./Notes";
import useSidbarTogal from "../../../../layout/useSidbarTogal";
import { GetAnnouncement } from "../../../../services/Api/api";

const Events_Participation = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [data, setdata] = useState(280);
  const [getData, setget] = useState(280);
  const [activeTab, setActiveTab] = useState("Events");
  const [EventData, setEventData] = useState([]);
  const [Loding, setLoding] = useState(true);

  const toggleNav = () => {
    setIsOpen((prevState) => !prevState);
  };

  useSidbarTogal({ setdata, setget, isOpen });

  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = async () => {
    GetAnnouncement(setEventData, setLoding);
  };

  return (
    <div className="bg-[#f0f5fb] min-h-screen">
      <Sidebar toggleNav={toggleNav} data={data} />
      <div id="main" className={`ml-[${getData}px] max-[426px]:ml-0`}>
        <div className="open_he">
          <Header toggleNav={toggleNav} />
        </div>

        <div className="p-6 bg-gray-100">
          {/* Tabs */}
          <div className="flex flex-wrap">
            <button
              className={`py-2 px-8 max-[426px]:px-4 font-semibold text-center rounded-t-lg border-b-2 border-b-blue-500 ${
                activeTab === "Events"
                  ? "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white"
                  : "bg-white text-gray-700"
              }`}
              onClick={() => setActiveTab("Events")}
            >
              General Updates
            </button>

            <button
              className={`py-2 px-8 max-[426px]:px-4 font-semibold text-center rounded-t-lg border-b-2 border-b-blue-500 ${
                activeTab === "Activity"
                  ? "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white"
                  : "bg-white text-gray-700"
              }`}
              onClick={() => setActiveTab("Activity")}
            >
              Amenities
            </button>

            <button
              className={`py-2 px-8 max-[426px]:px-4 font-semibold text-center rounded-t-lg border-b-2 border-b-blue-500 ${
                activeTab === "Notes"
                  ? "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white"
                  : "bg-white text-gray-700"
              }`}
              onClick={() => setActiveTab("Notes")}
            >
              Notes
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === "Events" && (
            <div className="overflow-x-auto bg-white p-6 rounded-xl shadow-lg">
  <h2 className="text-2xl font-semibold text-gray-800 mb-6">General Updates</h2>

  {Loding ? (
    <div className="flex justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500" />
    </div>
  ) : (
    <div className="space-y-6">
      {EventData.map((item, index) => (
        <div key={index} className="bg-gray-50 p-6 rounded-md shadow-sm hover:shadow-md transition-shadow">
          {/* Event Title */}
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>

          {/* Event Description */}
          <p className="text-sm text-gray-600 mb-3">{item.description}</p>

          {/* Event Date and Time */}
          <div className="flex flex-wrap justify-between items-center text-sm text-gray-500">
            {/* Event Date */}
            <div className="flex items-center space-x-2 mb-3">
              <span className="font-semibold text-gray-600">Event Date:</span>
              <span>{new Date(item.date).toLocaleDateString()}</span>
            </div>

            {/* Event Time */}
            <div className="flex items-center space-x-2 mb-3">
              <span className="font-semibold text-gray-600">Event Time:</span>
              <span>{item.time}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )}
</div>






          )}

          {activeTab === "Activity" && <Activity />}

          {activeTab === "Notes" && <Notes />}
        </div>
      </div>
    </div>
  );
};

export default Events_Participation;
