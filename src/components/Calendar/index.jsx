import { useState } from "react";
import { Button } from "../Button";
import "./style.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
export function Calendar() {
  const today = new Date();
  const thisMonth = today.getMonth() + 1;
  const thisYear = today.getFullYear();
  const daysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };
  const [dateSelected, setDateSelected] = useState(today);
  const [monthSelected, setMonthSelected] = useState(thisMonth);
  const [yearSelected, setYearSelected] = useState(thisYear);
  //6 é domingo

  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  function getMonthArray(year, month) {
    const currentMonthFirstDay = new Date(year, month - 1, 1);
    const prevMonthLastDay = new Date(year, month - 1, 0).getDate();
    const currentMonthLastDay = new Date(year, month, 0).getDate();

    const monthArray = [];

    // Days from the previous month
    const startDayIndex = currentMonthFirstDay.getDay() - 1;
    for (let i = prevMonthLastDay - startDayIndex; i <= prevMonthLastDay; i++) {
      if (i > 0) {
        monthArray.push({ date: i, month: month - 1 });
      } else {
        monthArray.push({ date: null, month: null });
      }
    }

    // Days from the current month
    for (let i = 1; i <= currentMonthLastDay; i++) {
      monthArray.push({ date: i, month });
    }

    // Days from the next month
    for (let i = 1; monthArray.length % 7 !== 0; i++) {
      monthArray.push({ date: i, month: month + 1 });
    }

    return monthArray.map((day, index) => ({
      date: day.date,
      month: day.month,
      dayOfWeek: weekDays[index % 7],
    }));
  }

  const monthArray = getMonthArray(yearSelected, monthSelected);
  const previousMonth = () => {
    if (monthSelected == 1) {
      setMonthSelected(12);
      setYearSelected((prev) => prev - 1);
    } else {
      setMonthSelected((prev) => prev - 1);
    }
  };
  const nextMonth = () => {
    if (monthSelected == 12) {
      setMonthSelected(1);
      setYearSelected((prev) => prev + 1);
    } else {
      setMonthSelected((prev) => prev + 1);
    }
  };
  return (
    <div className="calendar">
      <div className="header">
        <Button
          onClick={() => {
            previousMonth();
          }}
        >
          <IoIosArrowBack className="icon" />
        </Button>
        <div className="title">{months[monthSelected - 1]}</div>
        <Button onClick={() => nextMonth()}>
          <IoIosArrowForward className="icon" />
        </Button>
      </div>
      <div className="body">
        <div className="calendar-days">
          {weekDays.map((dateName, index) => (
            <div className="tag-name" key={"daytag-" + index}>
              {dateName}
            </div>
          ))}
          {monthArray.map((item, index) => (
            <div
              key={"datetag-" + index}
              onClick={() => {
                setDateSelected(item.date);
                setMonthSelected(item.month);
              }}
              className={`tag ${
                item.month == monthSelected && item.date === dateSelected
                  ? "selected"
                  : null
              }`}
            >
              {item.date}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
