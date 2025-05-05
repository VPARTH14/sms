import React, { useEffect, useState } from 'react'
import { Facility_Management_Get } from '../../../../services/Api/api';

const Activity = () => {
  const [facility, setFacility] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFacility();
  }, []);

  const fetchFacility = async () => {
    Facility_Management_Get(setFacility, setLoading);
  };

  return (
    <div className="overflow-x-auto bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">Amenities</h2>

      <div className="mt-4">
        {loading ? (
          <div className="flex justify-center items-center h-32">
            <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-blue-500" />
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 max-h-[26rem] overflow-y-auto pr-1.5">
            {facility.map((item) => (
              <div
                key={item._id}
                className="border border-gray-200 rounded-xl p-4 shadow-sm bg-white hover:shadow-lg transition duration-200"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{item.Facility_Name}</h3>
                <p className="text-gray-500 text-sm mb-3">{item.Description}</p>
                <div className="text-sm text-gray-400 flex items-center gap-2">
                  📅 Scheduled: 
                  <span className="text-gray-700 font-medium">
                    {new Date(item.Schedule_Service_Date).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Activity;
