import CompanyLogo from "@/components/CompanyLogo";
import TravelersCard from "@/components/TravelersCard";
import { Button } from "@/components/ui/button";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import axios from "axios";
import { set } from "date-fns";
import { GetServerSidePropsContext } from "next";
import Link from "next/link";
import { useState } from "react";

export default function Travellers({ data }: { data: any }) {
  const [search, setSearch] = useState("");
  const [searchedData, setSearchedData] = useState([]);

  const searchAPI = async () => {
    const response = await axios.post(
      process.env.NEXT_PUBLIC_API_URL + "/user/search/single",
      {
        name: search,
      }
    );
    const data = response.data;
    setSearchedData(data.dat);
    console.log(data);
  };
  return (
    <div>
      <nav className="flex justify-between items-center px-5 py-2 shadow-md">
        <CompanyLogo className="my-4 mx-2" />
        <Link href="/dashboard/profile">
          <Button className="bg-slate-700 text-white">Visit Dashboard</Button>
        </Link>
      </nav>
      <div className="w-full flex flex-col justify-center items-center gap-4 mb-11 bg-purple-200 p-7">
        <span className=" font-bold text-xl text-slate-700">
          Search for your travel guardian
        </span>
        <div className="flex items-center gap-4">
          <div className="max-w-[450px] lg:max-w-none lg:min-w-[500px] lg:w-[50%] flex items-center pl-3 bg-white border border-[#D2D2D2] rounded-md">
            <MagnifyingGlassIcon width={30} height={30} color="#8A8A8A" />
            <input
              className="px-5 py-3 w-full text-xl outline-none border-none rounded-md"
              type="text"
              placeholder="Search Location"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setSearchedData([]);
              }}
            />
          </div>
          <Button size={"lg"} className="py-6" onClick={searchAPI}>
            Search
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-6 p-5 gap-3">
        {searchedData.length > 0 &&
          search !== "" &&
          searchedData.map((data: any) => {
            return <TravelersCard key={data._id} data={data} />;
          })}
        {search === "" &&
          data.data.map((data: any) => {
            return <TravelersCard key={data._id} data={data} />;
          })}
      </div>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_API_URL + "/user/search/all/"
    );
    const data = response.data;
    return {
      props: { data },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      redirect: {
        permanent: false,
        destination: "/not-found",
      },
      props: {},
    };
  }
}
