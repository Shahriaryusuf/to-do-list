//jshint esversion:6
exports.getDate = getDate;



function getDate() {

    const today = new Date();
    
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleDateString("en-US", options);
    return day;
}

exports.getDay = function() {

    let today = new Date();
    
    let options = {
        weekday: "long",
       
    };

    let day = today.toLocaleDateString("en-US", options);
    return day;
}