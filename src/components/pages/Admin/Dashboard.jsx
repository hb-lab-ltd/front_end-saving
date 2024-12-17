import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Admin/Sidebar";

function Dashboard() {
  return (
    <>
      <div className=" flex">
        <Sidebar />

        <div className=" w-full h-[100vh] bg-[#f5f7fa]">
          <div className=" bg-white w-full p-3 flex justify-between relative">
            <p className=" text-3xl p-3">Overview</p>
            <div className=" flex">
              <svg
                width="30px"
                height="30px"
                className=" absolute mt-3 ml-2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11 5C7.68629 5 5 7.68629 5 11C5 14.3137 7.68629 17 11 17C14.3137 17 17 14.3137 17 11C17 7.68629 14.3137 5 11 5ZM3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11C19 12.8487 18.3729 14.551 17.3199 15.9056L20.7071 19.2929C21.0976 19.6834 21.0976 20.3166 20.7071 20.7071C20.3166 21.0976 19.6834 21.0976 19.2929 20.7071L15.9056 17.3199C14.551 18.3729 12.8487 19 11 19C6.58172 19 3 15.4183 3 11Z"
                    fill="#8fa6cd"
                  />{" "}
                </g>
              </svg>
              <input
                type="text"
                className=" rounded-full bg-[#f5f7fa] p-3 w-72"
              />{" "}
              <br />
              <svg
                width="40px"
                className=" mt-3 ml-4 bg-[#f5f7fa] rounded-full p-1"
                height="40px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    opacity="0.4"
                    d="M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z"
                    fill="#aabbd9"
                  />{" "}
                  <path
                    d="M12 15.25C13.7949 15.25 15.25 13.7949 15.25 12C15.25 10.2051 13.7949 8.75 12 8.75C10.2051 8.75 8.75 10.2051 8.75 12C8.75 13.7949 10.2051 15.25 12 15.25Z"
                    fill="#aabbd9"
                  />{" "}
                </g>
              </svg>
              <svg
                width="40px"
                className=" mt-3 ml-4 bg-[#f5f7fa] rounded-full p-1"
                height="40px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M11.713 7.14977C12.1271 7.13953 12.4545 6.79555 12.4443 6.38146C12.434 5.96738 12.0901 5.63999 11.676 5.65023L11.713 7.14977ZM6.30665 12.193H7.05665C7.05665 12.1874 7.05659 12.1818 7.05646 12.1761L6.30665 12.193ZM6.30665 14.51L6.34575 15.259C6.74423 15.2382 7.05665 14.909 7.05665 14.51H6.30665ZM6.30665 17.6L6.26755 18.349C6.28057 18.3497 6.29361 18.35 6.30665 18.35L6.30665 17.6ZM9.41983 18.35C9.83404 18.35 10.1698 18.0142 10.1698 17.6C10.1698 17.1858 9.83404 16.85 9.41983 16.85V18.35ZM10.9445 6.4C10.9445 6.81421 11.2803 7.15 11.6945 7.15C12.1087 7.15 12.4445 6.81421 12.4445 6.4H10.9445ZM12.4445 4C12.4445 3.58579 12.1087 3.25 11.6945 3.25C11.2803 3.25 10.9445 3.58579 10.9445 4H12.4445ZM11.713 5.65023C11.299 5.63999 10.955 5.96738 10.9447 6.38146C10.9345 6.79555 11.2619 7.13953 11.676 7.14977L11.713 5.65023ZM17.0824 12.193L16.3325 12.1761C16.3324 12.1818 16.3324 12.1874 16.3324 12.193H17.0824ZM17.0824 14.51H16.3324C16.3324 14.909 16.6448 15.2382 17.0433 15.259L17.0824 14.51ZM17.0824 17.6V18.35C17.0954 18.35 17.1084 18.3497 17.1215 18.349L17.0824 17.6ZM13.9692 16.85C13.555 16.85 13.2192 17.1858 13.2192 17.6C13.2192 18.0142 13.555 18.35 13.9692 18.35V16.85ZM10.1688 17.6027C10.1703 17.1885 9.83574 16.8515 9.42153 16.85C9.00732 16.8485 8.67034 17.1831 8.66886 17.5973L10.1688 17.6027ZM10.0848 19.3L10.6322 18.7873L10.6309 18.786L10.0848 19.3ZM13.3023 19.3L12.7561 18.786L12.7549 18.7873L13.3023 19.3ZM14.7182 17.5973C14.7167 17.1831 14.3797 16.8485 13.9655 16.85C13.5513 16.8515 13.2167 17.1885 13.2182 17.6027L14.7182 17.5973ZM9.41788 16.85C9.00366 16.85 8.66788 17.1858 8.66788 17.6C8.66788 18.0142 9.00366 18.35 9.41788 18.35V16.85ZM13.9692 18.35C14.3834 18.35 14.7192 18.0142 14.7192 17.6C14.7192 17.1858 14.3834 16.85 13.9692 16.85V18.35ZM11.676 5.65023C8.198 5.73622 5.47765 8.68931 5.55684 12.2099L7.05646 12.1761C6.99506 9.44664 9.09735 7.21444 11.713 7.14977L11.676 5.65023ZM5.55665 12.193V14.51H7.05665V12.193H5.55665ZM6.26755 13.761C5.0505 13.8246 4.125 14.8488 4.125 16.055H5.625C5.625 15.6136 5.95844 15.2792 6.34575 15.259L6.26755 13.761ZM4.125 16.055C4.125 17.2612 5.0505 18.2854 6.26755 18.349L6.34575 16.851C5.95843 16.8308 5.625 16.4964 5.625 16.055H4.125ZM6.30665 18.35H9.41983V16.85H6.30665V18.35ZM12.4445 6.4V4H10.9445V6.4H12.4445ZM11.676 7.14977C14.2917 7.21444 16.3939 9.44664 16.3325 12.1761L17.8322 12.2099C17.9114 8.68931 15.191 5.73622 11.713 5.65023L11.676 7.14977ZM16.3324 12.193V14.51H17.8324V12.193H16.3324ZM17.0433 15.259C17.4306 15.2792 17.764 15.6136 17.764 16.055H19.264C19.264 14.8488 18.3385 13.8246 17.1215 13.761L17.0433 15.259ZM17.764 16.055C17.764 16.4964 17.4306 16.8308 17.0433 16.851L17.1215 18.349C18.3385 18.2854 19.264 17.2612 19.264 16.055H17.764ZM17.0824 16.85H13.9692V18.35H17.0824V16.85ZM8.66886 17.5973C8.66592 18.4207 8.976 19.2162 9.53861 19.814L10.6309 18.786C10.335 18.4715 10.1673 18.0473 10.1688 17.6027L8.66886 17.5973ZM9.53739 19.8127C10.0977 20.4109 10.8758 20.7529 11.6935 20.7529V19.2529C11.2969 19.2529 10.9132 19.0873 10.6322 18.7873L9.53739 19.8127ZM11.6935 20.7529C12.5113 20.7529 13.2894 20.4109 13.8497 19.8127L12.7549 18.7873C12.4739 19.0873 12.0901 19.2529 11.6935 19.2529V20.7529ZM13.8484 19.814C14.4111 19.2162 14.7211 18.4207 14.7182 17.5973L13.2182 17.6027C13.2198 18.0473 13.0521 18.4715 12.7561 18.786L13.8484 19.814ZM9.41788 18.35H13.9692V16.85H9.41788V18.35Z"
                    fill="#f9b0bd"
                  />{" "}
                </g>
              </svg>
              <svg
                width="40px"
                className=" mt-3 ml-4 bg-[#f5f7fa] rounded-full p-1"
                height="40px"
                viewBox="0 0 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>profile [#bdbcbc]</title>{" "}
                  <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                  <g
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    {" "}
                    <g
                      id="Dribbble-Light-Preview"
                      transform="translate(-180.000000, -2159.000000)"
                      fill="#8ba3cb"
                    >
                      {" "}
                      <g
                        id="icons"
                        transform="translate(56.000000, 160.000000)"
                      >
                        {" "}
                        <path
                          d="M134,2008.99998 C131.783496,2008.99998 129.980955,2007.20598 129.980955,2004.99998 C129.980955,2002.79398 131.783496,2000.99998 134,2000.99998 C136.216504,2000.99998 138.019045,2002.79398 138.019045,2004.99998 C138.019045,2007.20598 136.216504,2008.99998 134,2008.99998 M137.775893,2009.67298 C139.370449,2008.39598 140.299854,2006.33098 139.958235,2004.06998 C139.561354,2001.44698 137.368965,1999.34798 134.722423,1999.04198 C131.070116,1998.61898 127.971432,2001.44898 127.971432,2004.99998 C127.971432,2006.88998 128.851603,2008.57398 130.224107,2009.67298 C126.852128,2010.93398 124.390463,2013.89498 124.004634,2017.89098 C123.948368,2018.48198 124.411563,2018.99998 125.008391,2018.99998 C125.519814,2018.99998 125.955881,2018.61598 126.001095,2018.10898 C126.404004,2013.64598 129.837274,2010.99998 134,2010.99998 C138.162726,2010.99998 141.595996,2013.64598 141.998905,2018.10898 C142.044119,2018.61598 142.480186,2018.99998 142.991609,2018.99998 C143.588437,2018.99998 144.051632,2018.48198 143.995366,2017.89098 C143.609537,2013.89498 141.147872,2010.93398 137.775893,2009.67298"
                          id="profile-[#bdbcbc]"
                        >
                          {" "}
                        </path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>
          </div>

          <div className=" w-full flex flex-cal lg:flex-row justify-around mt-10 mb-10">
         
         
         {/* Statistic section */}
            <div className="w-3/5">
            <p className=" text-5xl">Statistic section</p>
            </div>

            <div className=" w-[30%]  bg-white rounded-2xl ">
              <div className=" p-2 bg-white rounded-2xl  w-72 flex text-center  ">
                <svg
                  fill="#396AFF"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="50px"
                  className=" mt-3 ml-4 bg-[#f5f7fa] rounded-full p-2"
                  height="50px"
                  viewBox="0 0 45.532 45.532"
                  xml:space="preserve"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0" />

                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />

                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <path d="M22.766,0.001C10.194,0.001,0,10.193,0,22.766s10.193,22.765,22.766,22.765c12.574,0,22.766-10.192,22.766-22.765 S35.34,0.001,22.766,0.001z M22.766,6.808c4.16,0,7.531,3.372,7.531,7.53c0,4.159-3.371,7.53-7.531,7.53 c-4.158,0-7.529-3.371-7.529-7.53C15.237,10.18,18.608,6.808,22.766,6.808z M22.761,39.579c-4.149,0-7.949-1.511-10.88-4.012 c-0.714-0.609-1.126-1.502-1.126-2.439c0-4.217,3.413-7.592,7.631-7.592h8.762c4.219,0,7.619,3.375,7.619,7.592 c0,0.938-0.41,1.829-1.125,2.438C30.712,38.068,26.911,39.579,22.761,39.579z" />{" "}
                    </g>{" "}
                  </g>
                </svg>
                <div className=" mt-2 text-lg ml-4">
                  <p className=" text-slate-600 text-lg text-center ">
                    Total customers{" "}
                  </p>
                  <p className=" text-2xl">21</p>
                </div>
              </div>
              <div className=" p-2 bg-white rounded-2xl  w-72 flex text-center  ">
                <svg
                  version="1.0"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="50px"
                  className=" mt-3 ml-4 bg-[#f5f7fa] rounded-full p-2"
                  height="50px"
                  viewBox="0 0 64 64"
                  enable-background="new 0 0 64 64"
                  xml:space="preserve"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0" />

                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />

                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <path
                        fill="#ffc800"
                        d="M60,58c0-2.209-1.791-4-4-4h-2V25h6c1.795,0,3.369-1.194,3.852-2.922c0.484-1.728-0.242-3.566-1.775-4.497 l-28-17C33.439,0.193,32.719,0,32,0s-1.438,0.193-2.076,0.581l-28,17c-1.533,0.931-2.26,2.77-1.775,4.497 C0.632,23.806,2.207,25,4,25h6v29H8c-2.209,0-4,1.791-4,4c-2.209,0-4,1.791-4,4v2h64v-2C64,59.791,62.209,58,60,58z M52,54h-4V25h4 V54z M18,25h4v29h-4V25z M24,25h4v29h-4V25z M30,25h4v29h-4V25z M36,25h4v29h-4V25z M42,25h4v29h-4V25z M4,23 c-0.893,0-1.685-0.601-1.926-1.462c-0.241-0.859,0.124-1.784,0.888-2.247l28-17.001C31.275,2.1,31.635,2,32,2 c0.367,0,0.725,0.1,1.039,0.291l28,17c0.764,0.463,1.129,1.388,0.887,2.248C61.686,22.399,60.893,23,60,23H4z M12,25h4v29h-4V25z M8,56h48c1.105,0,2,0.896,2,2H6C6,56.896,6.896,56,8,56z M2,62c0-1.104,0.896-2,2-2h56c1.105,0,2,0.896,2,2H2z"
                      />{" "}
                      <path
                        fill="#ffc800"
                        d="M32,9c-2.762,0-5,2.238-5,5s2.238,5,5,5s5-2.238,5-5S34.762,9,32,9z M32,17c-1.656,0-3-1.343-3-3 s1.344-3,3-3c1.658,0,3,1.343,3,3S33.658,17,32,17z"
                      />{" "}
                    </g>{" "}
                  </g>
                </svg>
                <div className=" mt-2 text-lg ml-4">
                  <p className=" text-slate-600 text-lg text-center ">
                    Total Transation{" "}
                  </p>
                  <p className=" text-2xl">210,000 Frw</p>
                </div>
              </div>
              <div className=" p-2 bg-white rounded-2xl  w-72 flex text-center  ">
                <svg
                  fill="#b77b7b"
                  width="50px"
                  className=" mt-3 ml-4 bg-[#f5f7fa] rounded-full p-2"
                  height="50px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0" />

                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />

                  <g id="SVGRepo_iconCarrier">
                    <path d="M4,23a1,1,0,0,1-1-1V19a1,1,0,0,1,2,0v3A1,1,0,0,1,4,23Zm9-1V15a1,1,0,0,0-2,0v7a1,1,0,0,0,2,0Zm7-11a1,1,0,0,0-1,1V22a1,1,0,0,0,2,0V12A1,1,0,0,0,20,11Zm.382-9.923A.991.991,0,0,0,20,1H16a1,1,0,0,0,0,2h1.586L12,8.586,8.707,5.293a1,1,0,0,0-1.414,0l-4,4a1,1,0,0,0,1.414,1.414L8,7.414l3.293,3.293a1,1,0,0,0,1.414,0L19,4.414V6a1,1,0,0,0,2,0V2a1,1,0,0,0-.618-.923Z" />
                  </g>
                </svg>
                <div className=" mt-2 text-lg ml-4">
                  <p className=" text-slate-600 text-lg text-center ">
                    Total Amount
                  </p>
                  <p className=" text-2xl">2,000,000 Frw</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
              <div className="p-1.5 min-w-full  align-middle flex justify-center items-center ">
                <div className="overflow-hidden bg-white lg:w-11/12 rounded-xl ">
                  <p className=" text-xl font-semibold ml-5 text-slate-500 mt-4">
                    Active Loans Overview
                  </p>
                  <table className="min-w-full divide-y  divide-gray-200 ">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-lg font-medium text-gray-500 uppercase "
                        >
Description
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-lg font-medium text-gray-500 uppercase "
                        >
Transaction ID                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-lg font-medium text-gray-500 uppercase "
                        >
                          Address
                        </th>
                        
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-lg font-medium text-gray-500 uppercase "
                        >
                          Amount
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-lg font-medium text-gray-500 uppercase "
                        >
                          Date
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-lg font-medium text-gray-500 uppercase "
                        >
                          Receipt
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                    
                      <tr className="hover:bg-gray-100  border border-l-0 border-r-0 border-t-0">
                        <td className="px-6 py-4 whitespace-nowrap text-xl font-medium text-gray-800 ">
                          Kenny Eddy
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-xl text-gray-800 ">
                        #12548796                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-xl text-gray-800 ">
                          Musanze
                        </td>
                        
                        <td className="px-6 py-4 whitespace-nowrap text-xl text-gray-800 ">
                          133,000 Frw
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-xl text-gray-800 ">
                          12/01/2024
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-xl text-gray-800 ">
                          <button className=" p-2 w-44 rounded-full border-blue-600 border-2"> Download</button>
                        </td>
                      </tr>
                      
                      <tr className="hover:bg-gray-100  border border-l-0 border-r-0 border-t-0">
                        <td className="px-6 py-4 whitespace-nowrap text-xl font-medium text-gray-800 ">
                          Kenny Eddy
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-xl text-gray-800 ">
                        #12548796                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-xl text-gray-800 ">
                          Musanze
                        </td>
                        
                        <td className="px-6 py-4 whitespace-nowrap text-xl text-gray-800 ">
                          133,000 Frw
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-xl text-gray-800 ">
                          12/01/2024
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-xl text-gray-800 ">
                          <button className=" p-2 w-44 rounded-full border-blue-600 border-2"> Download</button>
                        </td>
                      </tr>
                      
                      <tr className="hover:bg-gray-100  border border-l-0 border-r-0 border-t-0">
                        <td className="px-6 py-4 whitespace-nowrap text-xl font-medium text-gray-800 ">
                          Kenny Eddy
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-xl text-gray-800 ">
                        #12548796                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-xl text-gray-800 ">
                          Musanze
                        </td>
                        
                        <td className="px-6 py-4 whitespace-nowrap text-xl text-gray-800 ">
                          133,000 Frw
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-xl text-gray-800 ">
                          12/01/2024
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-xl text-gray-800 ">
                          <button className=" p-2 w-44 rounded-full border-blue-600 border-2"> Download</button>
                        </td>
                      </tr>
                      
                      <tr className="hover:bg-gray-100  border border-l-0 border-r-0 border-t-0">
                        <td className="px-6 py-4 whitespace-nowrap text-xl font-medium text-gray-800 ">
                          Kenny Eddy
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-xl text-gray-800 ">
                        #12548796                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-xl text-gray-800 ">
                          Musanze
                        </td>
                        
                        <td className="px-6 py-4 whitespace-nowrap text-xl text-gray-800 ">
                          133,000 Frw
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-xl text-gray-800 ">
                          12/01/2024
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-xl text-gray-800 ">
                          <button className=" p-2 w-44 rounded-full border-blue-600 border-2"> Download</button>
                        </td>
                      </tr>
                      
                      <tr className="hover:bg-gray-100  border border-l-0 border-r-0 border-t-0">
                        <td className="px-6 py-4 whitespace-nowrap text-xl font-medium text-gray-800 ">
                          Kenny Eddy
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-xl text-gray-800 ">
                        #12548796                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-xl text-gray-800 ">
                          Musanze
                        </td>
                        
                        <td className="px-6 py-4 whitespace-nowrap text-xl text-gray-800 ">
                          133,000 Frw
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-xl text-gray-800 ">
                          12/01/2024
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-xl text-gray-800 ">
                          <button className=" p-2 w-44 rounded-full border-blue-600 border-2"> Download</button>
                        </td>
                      </tr>
                      
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
