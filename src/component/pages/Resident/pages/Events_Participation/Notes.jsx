import React, { useEffect, useState } from "react";
import { GetNotes } from "../../../../services/Api/api";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    GetNotes(setNotes, setLoading);
  };

  return (
    <div className="overflow-x-auto bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">Notes</h2>

      {loading ? (
        <div className="flex justify-center items-center h-32">
          <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-blue-500" />
        </div>
      ) : (
        <div className="space-y-6 max-h-[28rem] overflow-y-auto pr-1.5">
          {notes.map((note) => (
            <div
              key={note._id}
              className="border border-gray-200 rounded-xl p-4 shadow-sm bg-white hover:shadow-lg transition duration-200"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{note.Title}</h3>
              <p className="text-base text-gray-700">{note.Description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Notes;
