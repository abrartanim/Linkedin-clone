import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOptions from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationImportantIcon from "@material-ui/icons/NotificationImportant";

function Header() {
  return (
    <div className="header">
      {/* <h1>This is the header</h1> */}
      <div className="header__left">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
          alt=""
        />

        <div className="header__search">
          {/* Search Icon */}
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOptions Icon={HomeIcon} title="Home" />
        <HeaderOptions Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOptions Icon={ChatIcon} title="Messaging" />
        <HeaderOptions Icon={NotificationImportantIcon} title="Notification" />
        <HeaderOptions
          avatar="https://lh3.googleusercontent.com/qFpGZKCoJt44dK0Q143IZGwyrqfb2ziGw7tp8AzEO18HCazVTM-pnBvQQ6XFK27pbAz8KP-KIQVOONQK3Dio4PGemqnQsS--iNbahmfZ8GuJLZMlWDJGmhucaEOO-z08Oa_DOT_erSXyr6ka-e4qOvdSzWhoPW9t-Kuo_wYBraciN9z7Sn9Zre0mowYgnoq4QhyfWpeCG936BP5IPNMAC_TDHpDfC6GK5kIxSNl2Dvc4GR-_Ee_PWqfLpiWhbCTD_cII-jYTLrenVC3P6JM_2SRPfjNafQ23L2Ydqa_Z4imN2BpOpZZGUowZYWPL6d9Y-zMfclbIoM4k0-584RfXM0vim7GrlMwV18Xi-n28QChMG6gXUs4MN5j5fv4pk0rpKSqwO0l7zuH8HpSIyiH87jcIhq4ebxXqmDo3So-a_lw4rOLW9wexX_EGwXwYk03KiNDX6SCj3NIPqGpzwRhjwdbuqQ2nKbMwpdKqSe8I0oDnT-IMBO931voPiYKRUFnwnGFixn2aIIJPDdkKotzEWRISl26un3SWC3WA-quatV-6Qmvt63UVNVwbiPEHD8GpQOe8rcuo_U18CjRi3zK4fydbtd4h_50vZ3nKS3BKtSrQBlyvEFvrx1WPu2LsCkTvUYPxJr4MuglO1dTIMLaosHNPMlvFAY3c7Mxo0WKu1kFZ_NUb98O_RgdSGFUmvd7zWYIASeGiUWzHJH3_PGm1XvB7=w577-h769-no?authuser=0"
          title="Me"
        />
      </div>
    </div>
  );
}

export default Header;
