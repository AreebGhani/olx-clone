import { useEffect } from "react";

type Props = {};

const SearchInput = (props: Props) => {
  useEffect(() => {
    const input = document.querySelector<HTMLInputElement>(
      ".find-box-inner input"
    );
    const dropdown = document.getElementById("dropdown-find");
    const buttons = dropdown?.querySelectorAll<HTMLButtonElement>(
      "#dropdown-find button"
    );
    const firstButton = buttons?.[0];
    const lastButton = buttons?.[buttons.length - 1];
    let selectedIndex = -1;

    if (!input || !dropdown || !buttons || !firstButton || !lastButton) return;

    input.addEventListener("keydown", (event) => {
      if (event.key === "ArrowDown") {
        selectedIndex =
          selectedIndex < buttons.length - 1 ? selectedIndex + 1 : 0;
        updateSelection(buttons);
        scrollIntoView(buttons);
        event.preventDefault();
      } else if (event.key === "ArrowUp") {
        selectedIndex =
          selectedIndex > 0 ? selectedIndex - 1 : buttons.length - 1;
        updateSelection(buttons);
        scrollIntoView(buttons);
        event.preventDefault();
      } else if (event.key === "Enter") {
        if (selectedIndex >= 0 && selectedIndex < buttons.length) {
          buttons[selectedIndex].click();
        }
      }
    });

    dropdown.addEventListener("click", (event) => {
      const target = event.target as HTMLButtonElement;
      if (target.tagName === "BUTTON") {
        const index = Array.from(buttons).indexOf(target);
        selectedIndex = index;
        updateSelection(buttons);
        target.focus();
      }
    });

    dropdown.addEventListener("focusout", () => {
      selectedIndex = -1;
      updateSelection(buttons);
    });

    function updateSelection(buttons: NodeListOf<HTMLButtonElement>) {
      buttons.forEach((button, index) => {
        if (index === selectedIndex) {
          button.classList.add("selected");
        } else {
          button.classList.remove("selected");
        }
      });
    }

    function scrollIntoView(buttons: NodeListOf<HTMLButtonElement>) {
      const selectedButton = buttons[selectedIndex];
      if (selectedButton) {
        selectedButton.scrollIntoView({ block: "nearest" });
      }
    }
  }, []);

  return (
    <>
      <div className="flex-[1]">
        <div className="find-box relative">
          <div className="flex flex-[1]">
            <div className="w-[90%] find-box-inner bg-[#fff] rounded-l-[4px] border-[2px] border-solid border-[#012f34] h-[46px] flex">
              <input
                type="search"
                spellCheck="false"
                className="text-[##002f34] font-light text-[1rem] appearance-none bg-none border-none outline-none px-3 py-[0.8rem] w-full h-full flex-[1] overflow-hidden overflow-ellipsis resize-none placeholder:text-[#006772]"
                value=""
                placeholder="Find Cars, Mobile Phones and more..."
              />
            </div>
            <button
              type="button"
              className="bg-none border-none appearance-none m-0 p-0 cursor-pointer text-inherit flex items-center justify-center bg-[#002f34] rounded-r-[4px] h-[46px] w-[48px] active:outline-none focus:outline-none active:bg-[#002f34] focus:bg-[#002f34]"
              title="search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 1024 1024"
                className="fill-[#fff]"
              >
                <path d="M448 725.33c-152.92 0-277.33-124.41-277.33-277.33S295.08 170.67 448 170.67 725.33 295.08 725.33 448 600.92 725.33 448 725.33zm436.44 98.78v.02L732.52 672.19c48.77-61.78 78.15-139.54 78.15-224.19 0-199.98-162.7-362.67-362.67-362.67S85.33 248.03 85.33 448c0 199.98 162.69 362.67 362.67 362.67 84.63 0 162.41-29.38 224.17-78.15l206.14 206.15h60.36v-60.33l-54.23-54.23z"></path>
              </svg>
            </button>
          </div>
          <div className="flex justify-between mt-[.1rem]"></div>
          <div
            className="DropDown-Find absolute left-0 right-0 w-[90%] z-[1] max-h-[400px] overflow-y-auto bg-[#fff] border rounded-[4px]"
            tabIndex={0}
            id="dropdown-find"
          >
            {Array(10)
              .fill(" ")
              .map((_, i) => (
                <button
                  type="button"
                  title="search-item"
                  key={i}
                  className="bg-none border-none appearance-none m-0 cursor-pointer text-[.9rem] block w-full text-left px-[0.9rem] py-[0.8rem] hover:bg-[#c8f8f6] transition-colors ease-in-out outline-none active:outline-none focus:outline-none"
                  id={`item-${i}`}
                >
                  ABC
                </button>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchInput;
