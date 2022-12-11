import React from "react";
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

const Header = () => {
  return (
    <div className="w-full h-20  flex flex-row justify-between pt-3 pl-11 pr-6">
      <div className="h-full flex flex-row justify-center items-center pt-6 pr-12 pb-4">
        <img className="h-full" src={IconLogo} alt="" />
      </div>
      <div className="flex md:hidden flex-col justify-center items-center h-full">
        <img src={IconMenu} alt="" />
      </div>
      <div className="w-full hidden md:block">
        <div className="w-full h-full flex flex-row justify-between p-4">
          <div className="flex flex-row items-center gap-5 lg:gap-9">
            <Dropdown name="Features" className="right-0">
              <DropdownItem name="Todo List" iconSource={IconTodoList} />
              <DropdownItem name="Calendar" iconSource={IconCalendar} />
              <DropdownItem name="Reminders" iconSource={IconReminders} />
              <DropdownItem name="Planning" iconSource={IconPlanning} />
            </Dropdown>
            <Dropdown name="Features" className="left-0">
              <DropdownItem name="History" />
              <DropdownItem name="Our team" />
              <DropdownItem name="Blog" />
            </Dropdown>
            <HeaderButton name="Careers" />
            <HeaderButton name="About" />
          </div>
          <div className="flex flex-row items-center gap-5 lg:gap-10">
            <HeaderButton name="Login" />
            <RegisterButton name="Register" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
