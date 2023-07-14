import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import "./Filtros.styles.css";

interface FiltrosProps {
  setDate: React.Dispatch<React.SetStateAction<string>>;
}

const Filtros = ({ setDate }: FiltrosProps) => {
  const [value, setValue] = useState<Dayjs | null>(dayjs(new Date()));

  function handleDateChange() {
    setDate(value?.toString() || "");
    console.log(value?.toString());
  }

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
      <button className="filtrar" onClick={handleDateChange}>
        <p className="text">FILTRAR</p>
      </button>
    </div>
  );
};
export default Filtros;
