import React from "react";

const NavItem = ({ link, title }) => {
  return (
    <div className="hover:text-gray-500">
      <a href={link}>{title}</a>
    </div>
  );
};

export default NavItem;
