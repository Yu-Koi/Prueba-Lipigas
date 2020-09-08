import React, { Fragment, useState } from "react";
// import DatePicker, {registerLocale} from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";
import { Button } from "@material-ui/core";
import DatePicker from "react-horizontal-datepicker";
import { registerLocale } from "react-datepicker";

registerLocale("es", es);

const Header = () => {
  const selectedDay = (val) => {
    console.log(val);
  };

  const [selectDate, setSelectDate] = useState(null);

  const saveVisit = () => {
    console.log("SAVING VISIT");
    const options = { weekday: "long", month: "short", day: "numeric" };
    alert(selectDate.toLocaleDateString("es-ES", options));
  };

  //    const saveVisit = () => {
  //         console.log('SAVING VISIT');
  //         const options = {weekday:'long', month:'short', day: 'numeric'};
  //         alert(selectDate.toLocaleDateString('es-ES', options));

  //     }

  return (
    <Fragment>
      {/* <DatePicker 
       selected={selectDate}  
       onChange={date => setSelectDate(date)}
       locale="es"
       dateFormat=" dd  'de' MMMM "
       endDate={100}
      
       

    //    dateFormatCalendar='yyyy/MM/dd'
       minDate={new Date()}
       
       />

       <Button onClick={()=>{saveVisit()}}>continuar</Button> */}

      <div className="App">
        <DatePicker
          selectDate={new Date()}
          getSelectedDay={selectedDay}
          onChange={date => setSelectDate(date)}
          labelFormat={"MMMM yyyy"}
          color={"#374e8c"}
          endDate={365}
        />
      </div>
    </Fragment>
  );
};

export default Header;
