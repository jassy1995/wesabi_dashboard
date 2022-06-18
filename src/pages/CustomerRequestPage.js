import React, { useEffect, useContext } from "react";
import CustomerList from "../components/customerTable";
import { Store } from "../store";
import axios from "axios";
import { toast } from "react-toastify";

function CustomerRequestPage() {
  const {
    state: { customers, start_customer, loading },
    dispatch,
  } = useContext(Store);

  useEffect(() => {
    async function getCustomerList() {
      dispatch({ type: "START_FETCHING" });
      try {
        const sp = start_customer >= 0 ? start_customer : 0;
        const { data } = await axios.get(
          `https://artisanservice.herokuapp.com/api/customer/${sp}`
        );
        dispatch({ type: "END_FETCHING" });
        dispatch({ type: "SET_CUSTOMER", payload: data.customers });
      } catch (error) {
        dispatch({ type: "END_FETCHING" });
        let msg = error?.message
          ? error.message
          : "no or poor internet connection, try it again";
        toast.error(msg);
        console.log(error);
      }
    }
    getCustomerList();
  }, [start_customer, dispatch]);

  const next_function = async () => {
    dispatch({ type: "INCREASE_START_CUSTOMER", payload: start_customer + 20 });
  };

  const pre_function = async () => {
    dispatch({ type: "REDUCE_START_CUSTOMER", payload: start_customer - 20 });
  };
  return (
    <>
      <main className="overflow-y-auto mt-5 h-[580px] md:h-[694px]  md:pb-4">
        <div className="max-w-8xl mx-auto py-2 sm:px-6 lg:px-8 overflow-auto">
          <div className="px-4 py-2 sm:px-0">
            <CustomerList />

            {!loading && customers.length > 0 && (
              <div className="flex justify-end  mb-2 pr-5 ">
                <button
                  onClick={pre_function}
                  className="border text-blue-500 font-bold py-2 px-2 mr-3 disabled:opacity-75 disabled:cursor-not-allowed"
                  disabled={start_customer <= 0}
                >
                  Previous
                </button>
                <button
                  onClick={next_function}
                  className="border text-blue-500 font-bold  py-2 px-2 disabled:opacity-75 disabled:cursor-not-allowed"
                  disabled={customers.length < 20}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default CustomerRequestPage;
