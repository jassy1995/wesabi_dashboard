import React, { useState, useContext } from "react";
import { Store } from "../store";
import DisplayInfo from "./empty";
import AssignModal from "./assignModal";
let num = "0";

function UnSkillList() {
  const {
    state: { unSkills, loading },
  } = useContext(Store);

  const [requestId, setRequestId] = useState(null);
  const [open, setOpen] = useState(false);

  const assignArtisan = (id) => {
    setRequestId(id);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      <AssignModal
        open={open}
        setOpen={setOpen}
        setClose={closeModal}
        requestId={requestId}
      />
      {loading ? (
        <DisplayInfo children="Loading..." />
      ) : unSkills.length === 0 && !loading ? (
        <DisplayInfo children="No Data Available" />
      ) : (
        <div className="flex flex-col mt-10">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-2 lg:px-2">
              <div className="overflow-auto">
                <table className="min-w-full table-auto">
                  <thead className="border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-3 py-4 text-left border  border-slate-300"
                      >
                        s/n
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-3 py-4 text-left border  border-slate-300"
                      >
                        service-type
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-3 py-4 text-left border  border-slate-300 w-52"
                      >
                        description
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-3 py-4 text-left border  border-slate-300"
                      >
                        assign artisan
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-3 py-4 text-left border  border-slate-300"
                      >
                        N0 of people
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-3 py-4 text-left border  border-slate-300"
                      >
                        request Status
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-3 py-4 text-left border  border-slate-300"
                      >
                        link
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-3 py-4 text-left border  border-slate-300"
                      >
                        title
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-3 py-4 text-left  border border-slate-300"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-3 py-4 text-left  border border-slate-300"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-3 py-4 text-left  border border-slate-300"
                      >
                        Phone
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-3 py-4 text-left  border border-slate-300"
                      >
                        agent_name
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-3 py-4 text-left  border border-slate-300"
                      >
                        agent_gender
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-3 py-4 text-left  border border-slate-300"
                      >
                        agent_location
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-3 py-4 text-left  border border-slate-300"
                      >
                        agent_Dob
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-3 py-4 text-left  border border-slate-300"
                      >
                        date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {unSkills.map((unSkill, index) => (
                      <tr key={index} className="border-b">
                        <td className="px-3 py-3 whitespace-nowrap text-sm font-medium text-gray-900 border border-slate-300">
                          {index + 1}
                        </td>
                        <td className="px-3 py-3 whitespace-nowrap text-sm font-medium text-gray-900 border border-slate-300">
                          {unSkill?.service_type
                            ? unSkill.service_type
                            : "pending"}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-3 py-3 border border-slate-300">
                          <div className="w-[400px]">
                            {unSkill?.service_description
                              ? unSkill.service_description
                              : "pending"}
                          </div>
                        </td>

                        <td className="text-sm text-gray-900 font-light px-3 py-3 whitespace-nowrap border border-slate-300 cursor-pointer">
                          <button
                            className="bg-green-100 px-2 py-1 text-green-700 text-sm font-medium rounded-lg cursor-pointer"
                            onClick={() => assignArtisan(unSkill.id)}
                          >
                            assign
                          </button>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-3 py-3 whitespace-nowrap border border-slate-300">
                          {unSkill?.number_of_people
                            ? unSkill.number_of_people
                            : "pending"}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-3 py-3 whitespace-nowrap border border-slate-300">
                          {unSkill?.request_status
                            ? unSkill.request_status
                            : "pending"}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-3 py-3 whitespace-normal border border-slate-300">
                          {unSkill?.link ? unSkill.link : "pending"}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-3 py-3 whitespace-nowrap text-left border border-slate-300">
                          {unSkill?.job_title ? unSkill.job_title : "pending"}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-3 py-3 whitespace-nowrap border border-slate-300 text-left">
                          {unSkill?.name ? unSkill.name : "pending"}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-3 py-3 whitespace-nowrap border border-slate-300">
                          {unSkill?.email ? unSkill.email : "pending"}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-3 py-3 whitespace-nowrap border border-slate-300">
                          {unSkill?.phone
                            ? num.concat(unSkill?.phone?.slice(4))
                            : "pending"}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-3 py-3 whitespace-nowrap border border-slate-300">
                          {unSkill?.agent_name ? unSkill.agent_name : "pending"}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-3 py-3 whitespace-nowrap border border-slate-300">
                          {unSkill?.agent_gender
                            ? unSkill.agent_gender
                            : "pending"}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-3 py-3 whitespace-nowrap border border-slate-300">
                          {unSkill?.agent_location
                            ? unSkill.agent_location
                            : "pending"}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-3 py-3 whitespace-nowrap border border-slate-300">
                          {unSkill?.agent_dob ? unSkill.agent_dob : "pending"}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-3 py-3 whitespace-nowrap border border-slate-300">
                          {unSkill?.service_date_time
                            ? unSkill.service_date_time
                            : "pending"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default UnSkillList;
