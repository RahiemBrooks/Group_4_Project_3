import React from "react";
import { AiOutlineAlignRight, AiOutlineAlignLeft } from "react-icons/ai";
// import { useNavigate } from "react-router-dom";
// import LinksPopover from "../components/common/LinksPopover";
const Header = ({ setSideBar, sidebar }) => {
  // const navigate = useNavigate();

  // const [year, setYear] = useState([]);
  // useEffect(() => {
  //   const years = JSON.parse(localStorage.getItem("financial_year"));
  //   setYear(years);
  // }, [navigate]);
  return (
    <div className="sticky top-0 z-10">
      <div className="pt-0 pr-0 pb-0 pl-0 mt-0 mr-0 mb-0 ml-0 "></div>
      <div className="bg-white dark:bg-gray-800 !z-50">
        <div className="flex-col flex">
          <div className="w-full border-b-2 border-gray-200">
            <div className="bg-white dark:bg-gray-800 h-16 flex !justify-between items-center mx-auto px-4 ">
              <div>
                {sidebar ? (
                  <AiOutlineAlignRight
                    onClick={() => setSideBar(!sidebar)}
                    className="cursor-pointer h-10 w-6 dark:text-white"
                  />
                ) : (
                  <AiOutlineAlignLeft
                    onClick={() => setSideBar(!sidebar)}
                    className="cursor-pointer h-10 w-6 dark:text-white"
                  />
                )}
              </div>
              <div>
                <h1 className="font-bold dark:text-white text-lg px-10 text-center">
                  Dashboard
                </h1>
              </div>
              <div className=" justify-end items-center flex">
                <div className={""}>
                  <div className="right-nav hidden sm:flex items-center">
                    <button
                      // onClick={() => navigate("/select-year")}
                      className=" block px-3 py-1 rounded-full hover:bg-gray-600 dark:text-white text-sm font-medium cursor-pointer whitespace-nowrap "
                    >
                      {/* {year?.map((item, index) => item.year)} */}
                    </button>
                    {/* <LinksPopover
                      primaryLinks={[
                        {
                          name: "Select Financial Year",
                          href: "select-year",
                        },
                        {
                          name: "Log Out",
                        },
                      ]}
                    /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
