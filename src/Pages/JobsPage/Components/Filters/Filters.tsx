import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import "./Filters.styles.css";

interface FiltrosProps {
  setDate: React.Dispatch<React.SetStateAction<string>>;
}

const Filters = ({ setDate }: FiltrosProps) => {
  const [value, setValue] = useState<Dayjs | null>(dayjs(new Date()));

  function handleDateChange() {
    setDate(value?.toString() || "");
    console.log(value?.toISOString());
  }

  return (
    <div className="filters">
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
      <button className="button-filter" onClick={handleDateChange}>
        <p className="text">FILTER</p>
      </button>
    </div>
  );
};
export default Filters;
