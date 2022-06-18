import React, { useContext } from "react";
import { Store } from "../store";
import DisplayInfo from "./empty";
let num = "0";

function CustomerList() {
  const {
    state: { customers, loading },
  } = useContext(Store);

  return (
    <>
      {loading ? (
        <DisplayInfo children="Loading..." />
      ) : customers.length === 0 && !loading ? (
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
                        name
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-3 py-4 text-left border  border-slate-300"
                      >
                        phone
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-3 py-4 text-left border  border-slate-300"
                      >
                        service
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-3 py-4 text-left border  border-slate-300"
                      >
                        state
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-3 py-4 text-left border  border-slate-300"
                      >
                        lga
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-3 py-4 text-left border  border-slate-300"
                      >
                        email
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-3 py-4 text-left border  border-slate-300"
                      >
                        address
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-3 py-4 text-left  border border-slate-300"
                      >
                        task desc
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
                    {customers.map((customer, index) => (
                      <tr key={index} className="border-b">
                        <td className="px-3 py-3 whitespace-nowrap text-sm font-medium text-gray-900 border border-slate-300">
                          {index + 1}
                        </td>
                        <td className="px-3 py-3 whitespace-normal text-sm font-medium text-gray-900 border border-slate-300">
                          {customer?.full_name}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-3 py-3 whitespace-nowrap border border-slate-300">
                          {num.concat(customer?.user_id?.slice(3))}
                        </td>

                        <td className="text-sm text-gray-900 font-light px-3 py-3 whitespace-nowrap border border-slate-300">
                          {customer?.service}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-3 py-3 whitespace-nowrap border border-slate-300">
                          {customer?.state}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-3 py-3 whitespace-nowrap border border-slate-300">
                          {customer?.lga}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-3 py-3 whitespace-normal border border-slate-300">
                          {customer?.email}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-3 py-3 whitespace-normal text-left border border-slate-300">
                          {customer?.address}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-3 py-3 whitespace-normal border border-slate-300 text-left">
                          {customer?.task_description}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-3 py-3 whitespace-nowrap border border-slate-300">
                          {customer?.createdAt?.split("T")[0]}
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

export default CustomerList;
