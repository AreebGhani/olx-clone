import Image from "next/image";

type Props = {};

const SearchLocation = (props: Props) => {
  return (
    <>
      <div className="inline-block mt-0 ml-8 mb-0 mr-4 w-[21.5%]">
        <div className="location-box relative h-[50px] flex">
          <div className="flex-[1]">
            <div className="location-box-inner flex item-center border-[2px] border-solid border-[#012f34] rounded-[4px] bg-[#fff]">
              <div className="flex items-center fill-[#002f34] pl-2">
                <Image
                  src="/assets/svg/search.svg"
                  alt="search"
                  width={16}
                  height={16}
                />
              </div>
              <input
                spellCheck="false"
                className="text-[#002f34] font-light text-[1rem] appearance-none bg-none border-none outline-none pl-4 pr-2 py-[0.8rem] w-full h-full flex-[1] overflow-hidden overflow-ellipsis resize-none placeholder:text-[#006772]"
                value=""
                placeholder="Search city, area or locality"
              />
              <div className="flex items-center">
                <Image
                  src="/assets/svg/iconArrowDown_noinline.svg"
                  alt="Dropdown trigger"
                  className="mr-4 cursor-pointer ArrowDown"
                  width={12}
                  height={12}
                />
              </div>
            </div>
            <div className="flex justify-between mt-[.1rem]"></div>
            <div className="DropDown-Location absolute left-0 right-0 w-full z-[1] max-h-[320px] overflow-y-auto bg-[#fff] border rounded-[4px]">
              <div className="border-b-[0.1rem] border-b-[#ced6d7] py-[1.5rem] cursor-pointer px-[0.9rem] hover:bg-[#c8f8f6] transition-all ease-in-out">
                <div className="text-[#3a77ff] flex items-center">
                  <Image
                    src="/assets/svg/CurrentLocation.svg"
                    alt="current location"
                    width={26}
                    height={26}
                  />
                  <div className="flex flex-col justify-between ml-[0.5rem] overflow-hidden">
                    <span className="font-semibold text-[1rem]">
                      Use current location
                    </span>
                  </div>
                </div>
              </div>
              <div className="border-b-[0.1rem] border-b-[#ced6d7] px-[0.9rem] py-[0.8rem] flex items-center cursor-pointer hover:bg-[#c8f8f6] transition-all ease-in-out">
                <Image
                  src="/assets/svg/location.svg"
                  alt="location"
                  className="mr-[.6rem] min-w-[1.4rem]"
                  width={26}
                  height={26}
                />
                <div className="overflow-hidden text-ellipsis whitespace-nowrap">
                  <span className="text-[.9rem]">See ads in all Pakistan</span>
                </div>
              </div>
              <div className="px-[1rem] pt-1 pb-0 text-[rgba(0,47,52,0.57)]">
                <span className="uppercase text-[.7rem]">Choose region</span>
              </div>
              {Regions.map((region, i) => (
                <div
                  key={i}
                  className="cursor-pointer hover:bg-[#c8f8f6] py-0 px-[1rem] transition-all ease-in-out"
                >
                  <div className="py-[0.6rem] px-0 flex items-center">
                    <Image
                      src="/assets/svg/location.svg"
                      alt="location"
                      className="mr-[.6rem] min-w-[1.4rem]"
                      width={26}
                      height={26}
                    />
                    <div className="overflow-hidden text-ellipsis whitespace-nowrap">
                      <span className="text-[.9rem]">{region}, Pakistan</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchLocation;

const Regions = [
  "Azad Kahsmir",
  "Balochistan",
  "Islamabad",
  "Khyber Pakhtunkhwa",
  "Northern Areas",
  "Punjab",
  "Sindh",
];
