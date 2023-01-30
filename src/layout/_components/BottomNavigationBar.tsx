import React, { useState } from "react";
import { default as MuiBottomNavigation } from "@mui/material/BottomNavigation";
import { default as MuiBottomNavigationAction } from "@mui/material/BottomNavigationAction";
import {
  FormatListBulleted as FormatListBulletedIcon,
  BarChart as BarCharIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import Box from "@mui/material/Box";

const actions = [
  {
    label: "Browse",
    value: "browse",
    icon: <FormatListBulletedIcon />,
  },
  {
    label: "Statistics",
    value: "statistics",
    icon: <BarCharIcon />,
  },
  {
    label: "Search",
    value: "search",
    icon: <SearchIcon />,
  },
];

type Props = {
  onChange?: (event: React.SyntheticEvent<Element, Event>) => void;
};

const BottomNavigationBar = ({ onChange }: Props) => {
  const [value, setValue] = useState<"browse" | "statistics" | "search">(
    "browse",
  );

  const handleChange = (
    event: React.SyntheticEvent<Element, Event>,
    newValue: "browse" | "statistics" | "search",
  ) => {
    setValue(newValue);
    onChange?.(event);
  };

  return (
    <MuiBottomNavigation
      value={value}
      onChange={handleChange}
      showLabels
      sx={{
        pt: "12px",
        pb: "36px",
        width: "100%",
        position: "fixed",
        bottom: 0,
        left: 0,
        filter: "drop-shadow(0px 0px 16px rgba(0, 0, 0, 0.05));",
      }}
    >
      {actions.map((action, index) => (
        <MuiBottomNavigationAction
          {...action}
          key={index}
          disableTouchRipple
          icon={
            <Box
              bgcolor={action.value === value ? "primary.light" : undefined}
              px={"20px"}
              py={"4px"}
              borderRadius={"32px"}
            >
              {action.icon}
            </Box>
          }
          sx={{
            color: "primary.main",
            fontSize: "12px",
            "& .MuiBottomNavigationAction-label": {
              mt: 1,
            },
            "& .MuiBottomNavigationAction-label.Mui-selected": {
              fontSize: "12px",
            },
          }}
        />
      ))}
    </MuiBottomNavigation>
  );
};

export default BottomNavigationBar;
