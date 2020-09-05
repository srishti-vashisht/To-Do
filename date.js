    // jshint esversion:6
    // console.log(module)
    /*can require and use this date module anywhere */
    module.exports.getDate= function (){                     /*by exporting ,this module can easily be used in other files */                               /*Function expression */

    let today = new Date();                                

    let options= {                                             /*option is javascript object */
       weekday:"long",
       day:"numeric",
       month:"long"
    }                    
    
    day = today.toLocaleDateString("en-us",options);          /*tolocaleDateString() method for javascript date format */
    return day;


}
exports.getDay=getDay;                                                /*module.exports or simple exports will work same */
function getDay(){

    let today = new Date();                                

    let options= {                                             /*option is javascript object */
       weekday:"long",
    }                    
    
    day = today.toLocaleDateString("en-us",options);          /*tolocaleDateString() method for javascript date format */
    return day;


}