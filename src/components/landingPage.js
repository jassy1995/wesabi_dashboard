import React from "react";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon, BellIcon } from "@heroicons/react/outline";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";

const user = {
  name: "Admin",
  email: "admin@gmail.com",
  imageUrl:
    "https://image.shutterstock.com/image-vector/male-avatar-profile-picture-vector-260nw-221431012.jpg",
};

function LandingPage() {
  const logout = () => {
    console.log("logout");
  };
  return (
    <>
      <div className="fixed top-0 left-0 w-full">
        <Disclosure as="nav" className="bg-[#F25F3A] h-16">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <div className="">
                      <div className="font-thin text-xl text-white bg-myColor-transparent rounded-full md:capitalize md:first-letter:font-medium first-letter:text-3xl first-letter:font-bold">
                        wesabi
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-3 flex items-baseline space-x-4">
                        <Link to="/">
                          <button className="bg-myColor text-white px-3 py-2 rounded-md text-sm font-medium  ring-1 ring-white hover:bg-myColor hover:text-slate-200">
                            home
                          </button>
                        </Link>

                        <Link to="/">
                          <button className="bg-myColor text-white px-3 py-2 rounded-md text-sm font-medium  ring-1 ring-white hover:bg-white hover:text-slate-200">
                            list 1
                          </button>
                        </Link>
                        <Link to="/">
                          <button className="bg-myColor text-white px-3 py-2 rounded-md text-sm font-medium  ring-1 ring-white hover:bg-white hover:text-slate-200">
                            list 2
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <button
                        type="button"
                        className="bg-myColor p-1 rounded-full hover:text-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>

                      <Menu as="div" className="ml-3 relative">
                        <div className="flex">
                          <Menu.Button className="max-w-md mr-2 bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-10 w-10 rounded-full"
                              src={user.imageUrl}
                              alt="not exist"
                            />
                          </Menu.Button>

                          <Menu.Button
                            className="font-bold text-red-500 bg-white rounded-full ml-2  p-3 px-6 pt-2 py-2"
                            onClick={logout}
                          >
                            logout
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                              <div>Dashboard</div>
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    <Disclosure.Button className="bg-myColor inline-flex  text-white items-center justify-center p-2 rounded-md text-white-400 hover:text-white hover:bg-myColor focus:outline-none focus:ring-1 focus:p-1 focus:ring-offset-1 focus:ring-offset-gray-200 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden bg-[#F25F3A]">
                <div className="flex px-2 pt-2  pb-3 justify-between sm:px-3">
                  <Link to="/">
                    <button className="bg-myColor text-white px-3 py-2 rounded-md text-sm font-medium  ring-1 ring-white hover:bg-myColor hover:text-slate-200">
                      home
                    </button>
                  </Link>

                  <Link to="/">
                    <button className="bg-myColor text-white px-3 py-2 rounded-md text-sm font-medium  ring-1 ring-white hover:bg-myColor hover:text-slate-200">
                      home
                    </button>
                  </Link>
                  <Link to="/">
                    <button className="bg-myColor text-white px-3 py-2 rounded-md text-sm font-medium  ring-1 ring-white hover:bg-myColor hover:text-slate-200">
                      home
                    </button>
                  </Link>
                </div>
                <div className="pt-4 pb-3 border-t border-white">
                  <div className="flex justify-between items-center px-2">
                    <div className="flex space-x-3">
                      <div className="flex-shrink-0">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={user.imageUrl}
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <div className="text-base font-medium leading-none text-white">
                          {user.name}
                        </div>
                        <div className="text-sm font-thin leading-none text-white">
                          {user.email}
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      <button
                        type="button"
                        className="ml-auto bg-white flex-shrink-0 p-1 rounded-full text-red-500 hover:text-red-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-white"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>

                      <button
                        type="button"
                        onClick={logout}
                        className="ml-auto  bg-white flex-shrink-0 p-1 rounded-full text-red-500 hover:text-red-300 text-sm focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-offset-white focus:ring-white"
                      >
                        <span className="sr-only">View notifications</span>
                        logout
                      </button>
                    </div>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
      <section id="hero" className="mt-20">
        <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
          <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
            <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
              Bring everyone together to build better products
            </h1>
            <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
              Manage makes it simple for software team to plan day-to-day tasks
              while keeping the large team goals in view
            </p>
            <div className="flex justify-center md:justify-start">
              <Link to="/">
                <button className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full hover:bg-brightRedLight">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src="assets/img/illustration-intro.svg" alt="not exist" />
          </div>
        </div>
      </section>
      <section id="features">
        <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
          <div className="flex flex-col space-y-12 md:w-1/2">
            <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
              What's different about Manage?
            </h2>
            <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
              Manage provides all the functionality your team needs, without the
              complexity. Our software is tailor-made for modern digital
              products teams
            </p>
          </div>
          <div className="flex flex-col space-y-8 md:w-1/2">
            {/* list item 1 */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                    01
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Track company-wide progress
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Track company-wide progress
                </h3>
                <p className="text-darkGrayishBlue">
                  See how your day-to-day tasks fit into the wider vision. Go
                  from tracking progress at the milestone level all the way done
                  to the smallest of details. Never loose sight of the bigger
                  picture again
                </p>
              </div>
            </div>
            {/* list item 2 */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                    02
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Advance built-in reports
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Advance built-in reports
                </h3>
                <p className="text-darkGrayishBlue">
                  Set internal delivery estimates and track progress toward
                  company goals. Our customizable dashboard helps you build out
                  the reports you need to keep key stakeholder informed
                </p>
              </div>
            </div>
            {/* list item 3 */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                    03
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Everything you need in one place
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Every thing
                </h3>
                <p className="text-darkGrayishBlue">
                  Stop jumping from one service to another to communicate, store
                  files, track tasks and share document. Manage offers and
                  all-in-one team productivity solution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="testimonials">
        <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
          <h2 className="text-4xl font-bold text-center">
            What's Different About Manage
          </h2>
          <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
              <img
                src="assets/img/avatar-anisha.png"
                alt="not exist"
                className="w-16 -mt-14"
              />
              <h5 className="text-lg font-bold">Anisha Li</h5>
              <p className="text-sm text-darkGrayishBlue">
                "Manage has superchange our team's workflow. The ability to
                maintain visibility on larger milestone at all times keeps
                everyone motivated
              </p>
            </div>

            <div className="hidden md:flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
              <img
                src="assets/img/avatar-ali.png"
                alt="not exist"
                className="w-16 -mt-14"
              />
              <h5 className="text-lg font-bold">Ali Bravo</h5>
              <p className="text-sm text-darkGrayishBlue">
                "Manage has superchange our team's workflow. The ability to
                maintain visibility on larger milestone at all times keeps
                everyone motivated
              </p>
            </div>

            <div className="hidden md:flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
              <img
                src="assets/img/avatar-richard.png"
                alt="not exist"
                className="w-16 -mt-14"
              />
              <h5 className="text-lg font-bold">Richard Watts</h5>
              <p className="text-sm text-darkGrayishBlue">
                "Manage has superchange our team's workflow. The ability to
                maintain visibility on larger milestone at all times keeps
                everyone motivated
              </p>
            </div>
          </div>
          <div className="my-16">
            <Link to="/">
              <button className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section id="cta" className="bg-brightRed">
        <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
          <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
            Simplify how your team works today
          </h2>
          <div className="my-16">
            <Link to="/">
              <button className="p-3 px-6 pt-2 text-brightRed bg-white rounded-full baseline hover:bg-gray-200 shadow-2xl">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </section>
      <footer className="bg-veryDarkBlue">
        <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
          <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
            <div className="mx-auto my-6 text-center text-white md:hidden">
              Copyright &copy; 2022 Manage. All rights reserved.
            </div>
            <div>
              <img
                src="assets/img/logo-white.svg"
                alt="not exist"
                className="h-8"
              />
            </div>
            <div className="flex justify-center space-x-4">
              <Link to="/">
                <span>
                  <img
                    src="assets/img/icon-facebook.svg"
                    alt="not exist"
                    className="h-8"
                  />
                </span>
              </Link>
              <Link to="/">
                <span>
                  <img
                    src="assets/img/icon-youtube.svg"
                    alt="not exist"
                    className="h-8"
                  />
                </span>
              </Link>
              <Link to="/">
                <span>
                  <img
                    src="assets/img/icon-twitter.svg"
                    alt="not exist"
                    className="h-8"
                  />
                </span>
              </Link>
              <Link to="/">
                <span>
                  <img
                    src="assets/img/icon-pinterest.svg"
                    alt="not exist"
                    className="h-8"
                  />
                </span>
              </Link>
              <Link to="/">
                <span>
                  <img
                    src="assets/img/icon-instagram.svg"
                    alt="not exist"
                    className="h-8"
                  />
                </span>
              </Link>
            </div>
          </div>

          <div className="flex justify-around space-x-32 ">
            <div className="flex flex-col space-y-3 text-white ">
              <Link to="/">
                <span className="hover:text-brightRed">Home</span>
              </Link>
              <Link to="/">
                <span className="hover:text-brightRed">Pricing</span>
              </Link>
              <Link to="/">
                <span className="hover:text-brightRed">Product</span>
              </Link>
              <Link to="/">
                <span className="hover:text-brightRed">About</span>
              </Link>
            </div>
            <div className="flex flex-col space-y-3 text-white">
              <Link to="/">
                <span className="hover:text-brightRed">Careers</span>
              </Link>
              <Link to="/">
                <span className="hover:text-brightRed">Community</span>
              </Link>
              <Link to="/">
                <span className="hover:text-brightRed">Privacy Policy</span>
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-around">
            <form>
              <div className="flex space-x-3">
                <input
                  type="text"
                  className="flex-1 px-4 rounded-full focus:outline-none p-1"
                  placeholder="updated in your email"
                />
                <button className="px-4 text-sm  md:text-lg   md:px-6 md:py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">
                  Go
                </button>
              </div>
            </form>
            <div className="hidden text-white md:block">
              Copyright &copy; 2022 Manage. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default LandingPage;
