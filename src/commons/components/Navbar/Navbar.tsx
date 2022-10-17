import { useStateContext } from "@/commons/context/provider";
import { removeAccessToken, removeRefreshToken } from "@/commons/helpers/utils";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const stateContext = useStateContext();
  const navigate = useNavigate();

  const logoutHandler = () => {
    removeAccessToken();
    removeRefreshToken();
    stateContext.dispatch({
      type: "REMOVE_USER",
      payload: null,
    });
    navigate("/login");
    console.log('CLicked');
  }

  return (
    <nav className="w-full flex flex-wrap items-center
      justify-between py-4 shadow-sm bg-gray-800 text-gray-500 
      hover:text-gray-700 focus:text-gray-700 navbar 
      navbar-expand-lg navbar-light fixed md:sticky top-0"
    >
      <div className="container-fluid w-full flex flex-wrap 
        items-center justify-between px-6 md:px-16"
      >
        <button 
          className="navbar-toggler text-gray-500 border-0
            hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent
            focus:outline-none focus:ring-0 focus:shadow-none 
            focus:no-underline" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
            className="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="currentColor"
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
            </path>
          </svg>
        </button>
        <div className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
        <a className="
              flex
              items-center
              text-gray-900
              hover:text-gray-900
              focus:text-gray-900
              mt-2
              lg:mt-0
              mr-1
            " href="#">
        </a>
        </div>
        <div className="flex items-center relative">
        <div className="dropdown relative">
          <ul className="
            dropdown-menu
            min-w-max
            absolute
            bg-white
            text-base
            z-50
            float-left
            py-2
            list-none
            text-left
            rounded-lg
            shadow-lg
            mt-1
            hidden
            m-0
            bg-clip-padding
            border-none
            left-auto
            right-0
          " aria-labelledby="dropdownMenuButton1">
            <li>
              <a 
                className="dropdown-item text-sm py-2
                  px-4 font-normal font-open-sans block
                  w-full whitespace-nowrap bg-transparent
                  text-gray-700 hover:bg-gray-100" 
                href="#"
                onClick={logoutHandler}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"/>
                </svg>
                Keluar Akun
              </a>
            </li>
          </ul>
        </div>
        <div className="dropdown relative">
          <a className="dropdown-toggle text-gray-50 flex items-center hidden-arrow" href="#" id="dropdownMenuButton2" role="button"
            data-bs-toggle="dropdown" aria-expanded="false">
            Admin Kompetegram &nbsp;
            <img src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortRound&accessoriesType=Wayfarers&hairColor=Brown&facialHairType=Blank&facialHairColor=Platinum&clotheType=BlazerSweater&clotheColor=PastelRed&eyeType=EyeRoll&eyebrowType=Angry&mouthType=Serious&skinColor=Light" className="rounded-full"
              style={{ height: '35px', width: '35px' }} alt="" loading="lazy" />
          </a>
          <ul className="
          dropdown-menu
          min-w-max
          absolute
          bg-white
          text-base
          z-50
          float-left
          py-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          hidden
          m-0
          bg-clip-padding
          border-none
          left-auto
          right-0
        " aria-labelledby="dropdownMenuButton2">
            <li>
              <a className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              font-open-sans
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100" 
              href="#"
              onClick={logoutHandler}
            >
              Keluar Akun
              </a>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </nav>
  );
}