import React from "react";
import { Box } from "./DropdownItem.styles";

const DropdownItem = ({ icon, title }) => {
  return (
    <Box>
      {icon && <img src={icon} alt={title} />}
      <p>{title}</p>
    </Box>
  );
};

export default DropdownItem;
