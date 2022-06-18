import React, { useContext } from "react";
import { Store } from "../store";
import DisplayInfo from "./empty";
let num = "0";

function UnSkillList() {
  const {
    state: { skills, loading },
  } = useContext(Store);

  return (
    <>
      {loading ? (
        <DisplayInfo children="Loading..." />
      ) : skills.length === 0 && !loading ? (
        <DisplayInfo children="No Data Available" />
      ) : (
        <div className="flex flex-col mt-10">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-2 lg:px-2">
              <div className="overflow-auto">
                <table className="min-w-full table-fixed">
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
                        className="text-sm font-medium text-gray-900 px-3 py-4 text-left border  border-slate-300"
                      >
                        description
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
                        date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {skills.map((skill, index) => (
                      <tr key={index} className="border-b">
                        <td className="px-3 py-3 whitespace-nowrap text-sm font-medium text-gray-900 border border-slate-300">
                          {index + 1}
                        </td>
                        <td className="px-3 py-3 whitespace-nowrap text-sm font-medium text-gray-900 border border-slate-300">
                          {skill?.service_type ? skill.service_type : "pending"}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-3 py-3  whitespace-nowrap border border-slate-300">
                          {skill?.service_description
                            ? skill.service_description
                            : "pending"}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-3 py-3 whitespace-nowrap border border-slate-300">
                          {skill?.number_of_people
                            ? skill.number_of_people
                            : "pending"}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-3 py-3 whitespace-nowrap border border-slate-300">
                          {skill?.request_status
                            ? skill.request_status
                            : "pending"}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-3 py-3 whitespace-normal border border-slate-300">
                          {skill?.link ? skill.link : "pending"}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-3 py-3 whitespace-nowrap text-left border border-slate-300">
                          {skill?.job_title ? skill.job_title : "pending"}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-3 py-3 whitespace-nowrap border border-slate-300 text-left">
                          {skill?.name ? skill.name : "pending"}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-3 py-3 whitespace-nowrap border border-slate-300">
                          {skill?.email ? skill.email : "pending"}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-3 py-3 whitespace-nowrap border border-slate-300">
                          {skill?.phone
                            ? num.concat(skill?.phone?.slice(4))
                            : "pending"}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-3 py-3 whitespace-nowrap border border-slate-300 cursor-pointer">
                          {skill?.service_date_time}
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
