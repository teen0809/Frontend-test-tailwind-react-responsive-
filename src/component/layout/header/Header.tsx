import React, { useState } from "react";
import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";
import HeaderButton from "./HeaderButton";
import RegisterButton from "./RegisterButton";
import IconLogo from "../../../assests/images/logo.svg";
import IconTodoList from "../../../assests/images/icon-todo.svg";
import IconCalendar from "../../../assests/images/icon-calendar.svg";
import IconReminders from "../../../assests/images/icon-reminders.svg";
import IconPlanning from "../../../assests/images/icon-planning.svg";
import IconMenu from "../../../assests/images/icon-menu.svg";
import IconCloseMenu from "../../../assests/images/icon-close-menu.svg";

const Header = () => {
  const [isMenuOpened, setMenuOpen] = useState(false);
  return (
    <div className="w-full h-20  flex flex-row justify-between pt-3 pl-11 pr-6">
      <div className="h-full flex flex-row justify-center items-center pt-6 pr-12 pb-4">
        <img className="h-full" src={IconLogo} alt="" />
      </div>
      <div
        onClick={() => setMenuOpen(true)}
        className="flex md:hidden flex-col justify-center items-center h-full"
      >
        <img src={IconMenu} alt="" />
      </div>
      <div
        onClick={() => setMenuOpen(false)}
        className={`md:hidden  ${
          isMenuOpened ? "block" : "hidden"
        } fixed top-0 left-0 w-screen h-screen bg-black opacity-40`}
      />
      <div
        className={`md:w-full w-72 h-screen md:block md:static ${
          isMenuOpened ? "block" : "hidden"
        } fixed top-0 right-0 md:bg-specialWhite bg-white md:h-full md:overflow-visible overflow-scroll`}
      >
        <div className="w-full h-full flex md:flex-row flex-col md:justify-between justify-start md:p-4 p-8">
          <div
            onClick={() => setMenuOpen(false)}
            className="md:hidden flex flex-row justify-end pb-8"
          >
            <img className="h-6" src={IconCloseMenu} alt="" />
          </div>
          <div className="flex md:flex-row flex-col md:items-center items-stretch gap-5 lg:gap-9">
            <Dropdown name="Features" className="right-0">
              <DropdownItem name="Todo List" iconSource={IconTodoList} />
              <DropdownItem name="Calendar" iconSource={IconCalendar} />
              <DropdownItem name="Reminders" iconSource={IconReminders} />
              <DropdownItem name="Planning" iconSource={IconPlanning} />
            </Dropdown>
            <Dropdown name="Company" className="left-0">
              <DropdownItem name="History" />
              <DropdownItem name="Our team" />
              <DropdownItem name="Blog" />
            </Dropdown>
            <HeaderButton name="Careers" />
            <HeaderButton name="About" />
          </div>
          <div className="flex md:flex-row flex-col items-center gap-5 lg:gap-10 md:pt-0 py-8">
            <HeaderButton name="Login" />
            <RegisterButton name="Register" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
