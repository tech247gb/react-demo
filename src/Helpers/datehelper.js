import moment from 'moment-timezone';

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

export const updatedStartDate = (date) => {

  if(date){
       const conDate = moment(date).format("DD/MM/YYYY")
       const finalDate = new Date(conDate.toString().split("/").reverse().join("/"))
       return finalDate
  }
}
