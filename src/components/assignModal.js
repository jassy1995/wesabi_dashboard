import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import axios from "axios";
import { toast } from "react-toastify";

export default function FeedbackModal({ open, setOpen, setClose, requestId }) {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("male");
  const [date_of_birth, setDateOfBirth] = useState("");
  const [location, setLocation] = useState("");
  const [msg, setMsg] = useState("");

  const handleSelectedChange = (event) => {
    setGender(event.target.value);
  };

  const handleSubmit = () => {
    setLoading(true);
    setMsg("submitting...");
    const data = { id: requestId, name, gender, date_of_birth, location };
    console.log(data);
    axios
      .post("https://wema.creditclan.com/api/v3/wesabi/assign_unskilled", data)
      .then((response) => {
        setLoading(false);
        if (response.data) {
          setMsg("submitted successfully");
          toast.success("submitted successfully");
          setName("");
          setGender("");
          setDateOfBirth("");
          setLocation("");
          setTimeout(() => {
            setMsg("");
            setClose();
          }, 2000);
        } else {
          setMsg("unable to submit");
          toast.error("unable to submit, retry");
        }
      })
      .catch((error) => {
        setMsg("");
        setLoading(false);
        let msg = error?.message ? error.message : "Internal Server Error";
        toast.error(msg);
        console.log(error);
      });
  };
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-thin text-gray-900">
                          {" "}
                          Assign Form{" "}
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={setClose}
                          >
                            <span className="sr-only">Close panel</span>
                            <XIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                              onClick={setClose}
                            />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <div className="-my-6 divide-y divide-gray-200">
                            <div className="border-t divide-y divide-gray-200"></div>
                            <div className="flex py-6 flex-wrap">
                              <div className="ml-4 flex flex-1 flex-col">
                                <div className="mt-4 flex flex-col space-y-6">
                                  <div className="flex flex-col space-y-1">
                                    {msg && (
                                      <div className="text-green-500 font-bold text-center">
                                        {msg}
                                      </div>
                                    )}

                                    <div className="text-md ml-1 font-mono font-bold text-slate-700">
                                      Name
                                    </div>
                                    <input
                                      type="text"
                                      value={name}
                                      onChange={(e) => setName(e.target.value)}
                                      className="w-full mb-3 appearance-none block  px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border  border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder:text-slate-400 placeholder:text-sm"
                                      aria-label=".form-select-lg example"
                                      placeholder="Enter name"
                                    ></input>
                                  </div>
                                  <div className="flex flex-col space-y-1">
                                    <div className="text-md ml-1 font-mono font-bold text-slate-700">
                                      gender
                                    </div>
                                    <select
                                      onChange={handleSelectedChange}
                                      className="w-full form-select form-select-sm mb-3 appearance-none block  px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                      aria-label=".form-select-lg example"
                                    >
                                      <option defaultValue>select...</option>
                                      <option value="male">male</option>
                                      <option value="female">female</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="flex flex-col-reverse space-y-3 mt-4">
                                  <div className="mt-4">
                                    <div className="text-md ml-1 font-mono font-bold text-slate-700">
                                      date of birth
                                    </div>
                                    <input
                                      type="date"
                                      value={date_of_birth}
                                      onChange={(e) =>
                                        setDateOfBirth(e.target.value)
                                      }
                                      className="w-full mb-3 appearance-none block  px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    ></input>
                                  </div>
                                  <div>
                                    <div className="text-md ml-1 font-mono font-bold text-slate-700">
                                      Location
                                    </div>
                                    <input
                                      type="text"
                                      onChange={(e) =>
                                        setLocation(e.target.value)
                                      }
                                      className="w-full mb-3 appearance-none block  px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border  border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder:text-slate-400 placeholder:text-sm"
                                      placeholder="Enter address"
                                    ></input>
                                  </div>
                                </div>

                                <button
                                  type="button"
                                  className="font-medium text-white hover:text-slate-200 bg-blue-500 rounded-md mt-5 p-2 disabled:opacity-75 disabled:cursor-not-allowed"
                                  disabled={
                                    !date_of_birth ||
                                    !location ||
                                    !name ||
                                    !gender ||
                                    loading
                                  }
                                  onClick={handleSubmit}
                                >
                                  {loading ? "submitting..." : "submit"}
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
