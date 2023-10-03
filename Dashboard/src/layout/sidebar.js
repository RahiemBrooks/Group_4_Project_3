import React from "react";
// import { BsCashCoin } from "react-icons/bs";
// import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMdCash } from "react-icons/io";
// import { BsBank, BsJournalBookmark } from "react-icons/bs";
// import { MdOutlineAccountTree, MdOutlineDocumentScanner } from "react-icons/md";
// import {
//   SiGoogleoptimize,
//   SiGoogleanalytics,
//   SiCreativecommons,
// } from "react-icons/si";
// import { TbReportSearch, TbListDetails, TbBrandSentry } from "react-icons/tb";
// import { FaSquarePollHorizontal } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

const firstDrop = [
  {
    icon: <IoMdCash />,
    text: "Dashboard",
    link: "/",
  },
  {
    icon: <IoMdCash />,
    text: "Data by state",
    link: "/state-data",
  },
  {
    icon: <IoMdCash />,
    text: "Data by industry",
    link: "/industry-data",
  },
  {
    icon: <IoMdCash />,
    text: "Salary per state",
    link: "/salary-per-state",
  },
  // {
  //   icon: <BsBank />,
  //   text: "Bank Voucher",
  //   link: "/bank-voucher-entry",
  // },
  // {
  //   icon: <BsJournalBookmark />,
  //   text: "Journal Voucher",
  //   link: "/journal-voucher-entry",
  // },
];
// const secondDrop = [
//   {
//     icon: <SiGoogleoptimize />,
//     text: "Create Level 1",
//     link: "/level-one-create",
//   },
//   {
//     icon: <SiGoogleanalytics />,
//     text: "Create Level 2",
//     link: "/level-two-create",
//   },
//   {
//     icon: <SiCreativecommons />,
//     text: "Create Control Account",
//     link: "/create-control-account",
//   },
// ];
// const thirdDrop = [
//   {
//     icon: <MdOutlineDocumentScanner />,
//     text: "Chart of account",
//     link: "/chart-of-account",
//   },
//   {
//     icon: <TbListDetails />,
//     text: "Vouchers list",
//     link: "/voucher-list",
//   },
//   {
//     icon: <TbBrandSentry />,
//     text: "Trial",
//     link: "/trial-account",
//   },
//   {
//     icon: <FaSquarePollHorizontal />,
//     text: "Leger",
//     link: "/reports-ledger",
//   },
//   {
//     icon: <BsJournalBookmark />,
//     text: "All Ledgers",
//     link: "all-ledger",
//   },
//   {
//     icon: <BsJournalBookmark />,
//     text: "Balance sheet",
//     link: "balance-sheet",
//   },
//   {
//     icon: <BsJournalBookmark />,
//     text: "Income statement",
//     link: "income-statement",
//   },
// ];
const SideBar = ({ sidebar, setSideBar }) => {
  const location = useLocation();
  const firstDropdown  = true
  // const [firstDropdown, setFirstDropdown] = useState(true);
  // const [secondDropdown, setSecondDropdown] = useState(true);
  // const [thirdDropdown, setThirdDropdown] = useState(true);
  return (
    <aside
      // onMouseLeave={() => setSideBar(false)}
      // onMouseEnter={() => setSideBar(true)}
      id="logo-sidebar"
      className={`fixed top-0  z-40 ${
        sidebar
          ? "left-0 sticky top-0 w-[100%]"
          : "-left-[16.5rem] !transition-all duration-1000"
      }     h-[100vh] border-r  bg-gray-800 border-gray-700`}
      aria-label="Sidebar"
    >
      <div className="pt-8 pb-4 flex  justify-center">
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          className="object-contain btn- h-20 w-20 rounded-full mr-2 bg-gray-300"
          alt=""
        />
      </div>
      <div className="text-center pb-8 text-white font-semibold">
        <h1>DASHBOARD</h1>
      </div>
      <div className="px-3 py-4 overflow-y-auto h-[72vh]  bg-gray-800">
        <ul className="space-y-2 font-medium">
          {/* <li>
            <div
              onClick={() => setFirstDropdown(!firstDropdown)}
              className="flex justify-between items-center p-2 rounded-lg text-white  bg-gray-600 cursor-pointer hover:bg-gray-700 group"
            >
              <div className="flex items-center">
                <span className="basis-1">
                  <BsCashCoin />
                </span>
                <span className="ml-3">Vouchers</span>
              </div>
              <span>
                <RiArrowDropDownLine
                  className={`h-8 w-8 ${!firstDropdown && "rotate-180"} `}
                />
              </span>
            </div>
          </li> */}
          {firstDropdown &&
            firstDrop.map((d, i) => {
              return (
                <li key={i}>
                  <Link to={d.link}>
                    <div
                      className={`${
                        location.pathname === d.link
                          ? "bg-gray-700 hover:bg-opacity-75 !text-white"
                          : "hover:bg-gray-700"
                      }  flex items-center cursor-pointer p-2  rounded-lg text-white   group`}
                    >
                      {d.icon}
                      <span className="ml-3">{d.text}</span>
                    </div>
                  </Link>
                </li>
              );
            })}
          {/* <li>
            <div
              onClick={() => setSecondDropdown(!secondDropdown)}
              className="flex justify-between items-center p-2  rounded-lg text-white  bg-gray-600 cursor-pointer hover:bg-gray-700 group"
            >
              <div className="flex items-center">
                <span className="basis-1">
                  <MdOutlineAccountTree />
                </span>
                <span className="ml-3">Account</span>
              </div>
              <span>
                <RiArrowDropDownLine
                  className={`h-8 w-8 ${!secondDropdown && "rotate-180"} `}
                />
              </span>
            </div>
          </li> */}
          {/* {secondDropdown &&
            secondDrop.map((d, i) => {
              return (
                <li key={i}>
                  <Link to={d.link}>
                    <div
                      className={`${
                        location.pathname === d.link
                          ? "bg-gray-700 hover:bg-opacity-75"
                          : "hover:bg-gray-700"
                      }  flex items-center cursor-pointer p-2  rounded-lg text-white   group`}
                    >
                      {d.icon}
                      <span className="ml-3">{d.text}</span>
                    </div>
                  </Link>
                </li>
              );
            })} */}
          {/* <li>
            <div
              onClick={() => setThirdDropdown(!thirdDropdown)}
              className="flex justify-between items-center p-2  rounded-lg text-white bg-gray-600 cursor-pointer hover:bg-gray-700 group"
            >
              <div className="flex items-center">
                <span className="basis-1">
                  <TbReportSearch />
                </span>
                <span className="ml-3">Reports</span>
              </div>
              <span>
                <RiArrowDropDownLine
                  className={`h-8 w-8 ${!thirdDropdown && "rotate-180"} `}
                />
              </span>
            </div>
          </li>
          {thirdDropdown &&
            thirdDrop.map((d, i) => {
              return (
                <li key={i}>
                  <Link to={d.link}>
                    <div
                      className={`${
                        location.pathname === d.link
                          ? "bg-gray-700 hover:bg-opacity-75"
                          : "hover:bg-gray-700"
                      }  flex items-center cursor-pointer p-2  rounded-lg text-white   group`}
                    >
                      {d.icon}
                      <span className="ml-3">{d.text}</span>
                    </div>
                  </Link>
                </li>
              );
            })} */}
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
