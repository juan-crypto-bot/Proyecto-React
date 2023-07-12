// import * as React from 'react';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import dayjs, { Dayjs } from 'dayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DateField } from '@mui/x-date-pickers/DateField';
// import "./Styled/FiltrosStyle.css"

// export default function CustomDateFormat() {
//     const [value, setValue] = React.useState<Dayjs | null>(dayjs(new Date()));

//     return (
//       <div className='filtros'>
//       <LocalizationProvider dateAdapter={AdapterDayjs}>
//         <DemoContainer components={['DateField']}>
//           <DateField
//             color="primary"
//             label="Select Date"
//             value={value}
//             disableFuture={true}
//             onChange={(newValue) => setValue(newValue)}
//             format="DD-MM-YYYY"
//           />
//         </DemoContainer>
//       </LocalizationProvider>
//       </div>
//     );
//   };

import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import "./Styled/FiltrosStyle.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { IconButton } from "@mui/material";

export default function DateCalendarValue() {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs(new Date()));

  return (
    <div className="filtros">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer  components={["DateCalendar", "DateCalendar"]}>
          <DemoItem>
            <DateCalendar
              value={value}
              disableFuture={true}
              disableHighlightToday={false}
              onChange={(newValue) => setValue(newValue)}
            />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>
      <button className="filtrar">
        {/* <CalendarMonthIcon color="primary"></CalendarMonthIcon> */}
        <p className="text">FILTRAR</p>
      </button>
    </div>
  );
}
