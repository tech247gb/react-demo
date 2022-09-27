import moment from 'moment-timezone';

// Convert Timestamp to String to display in table

export const convertDateToString = (date) => {

    var n = new Date(date);
    var options = {
      month: "short",
      day: "numeric",    
      year: "numeric",
      timeZone: 'IST'
    }
    const finalDate = n.toLocaleString("en-EN", options)
    return finalDate;
}

// To convert date format to display date in datepicker when date selected

export const updatedStartDate = (date) => {

  if(date){
       const conDate = moment(date).format("DD/MM/YYYY")
       const finalDate = new Date(conDate.toString().split("/").reverse().join("/"))
       return finalDate
  }
}
