import React, { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import "./Styled/FiltrosStyle.css";

export default function DateCalendarValue() {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs(new Date()));

  return (
    <div className="filtros">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DateCalendar", "DateCalendar"]}>
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
        <p className="text">FILTRAR</p>
      </button>
    </div>
  );
}
