import React, { useEffect, useContext } from "react";
import UnSkillList from "../components/unSkillTable";
import { Store } from "../store";
import axios from "axios";
import { toast } from "react-toastify";

function UnSkillPage() {
  const {
    state: { unSkills, start_unSkill, loading },
    dispatch,
  } = useContext(Store);

  useEffect(() => {
    async function getUnSkillList() {
      dispatch({ type: "START_FETCHING" });
      try {
        const startingPoint = start_unSkill >= 0 ? start_unSkill : 0;
        const { data } = await axios.get(
          `https://wema.creditclan.com/api/v3/wesabi/unskilled/${startingPoint}`
        );
        dispatch({ type: "END_FETCHING" });
        dispatch({ type: "SET_UNSKILL", payload: data.data });
      } catch (error) {
        dispatch({ type: "END_FETCHING" });
        let msg = error?.message
          ? error.message
          : "no or poor internet connection, try it again";
        toast.error(msg);
        console.log(error);
      }
    }
    getUnSkillList();
  }, [start_unSkill, dispatch]);

  const next_function = async () => {
    dispatch({
      type: "INCREASE_START_UNSKILL",
      payload: start_unSkill + 20,
    });
  };

  const pre_function = async () => {
    dispatch({ type: "REDUCE_START_UNSKILL", payload: start_unSkill - 20 });
  };
  return (
    <>
      <main className="overflow-y-auto mt-5 h-[580px] md:h-[694px]  md:pb-4">
        <div className="max-w-8xl mx-auto py-2 sm:px-6 lg:px-8 overflow-auto">
          <div className="px-4 py-2 sm:px-0">
            <UnSkillList />
            {!loading && unSkills?.length > 0 && (
              <div className="flex justify-end  mb-2 pr-5 ">
                <button
                  onClick={pre_function}
                  className="border text-blue-500 font-bold py-2 px-2 mr-3 disabled:opacity-75 disabled:cursor-not-allowed"
                  disabled={start_unSkill <= 0}
                >
                  Previous
                </button>
                <button
                  onClick={next_function}
                  className="border text-blue-500 font-bold  py-2 px-2 disabled:opacity-75 disabled:cursor-not-allowed"
                  disabled={unSkills.length < 20}
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

export default UnSkillPage;
