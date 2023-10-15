export const formatDateToReadable = (dateString: string, 
    year: boolean = false, 
    day: boolean = true, 
    time: boolean = true, 
    seconds: boolean = false, 
    milliseconds: boolean = false) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const dateObj = new Date(dateString);

    const month = months[dateObj.getUTCMonth()];
    const _day = dateObj.getUTCDate();
    const _year = dateObj.getUTCFullYear();
    const hour = String(dateObj.getUTCHours()).padStart(2, '0');
    const minutes = String(dateObj.getUTCMinutes()).padStart(2, '0');
    const _seconds = String(dateObj.getUTCSeconds()).padStart(2, '0');
    const _milliseconds = String(dateObj.getUTCMilliseconds()).padStart(3, '0');

    return `${day? month + " " + _day:""}\
            ${year? (day?", ":"") + _year: ""}\
            ${time? (day || year? " ": "") + hour + ":" + minutes: ""}\
            ${seconds || milliseconds? (day || year? " ": "") + (!time? minutes + ":":":")+ _seconds: ""}\
            ${milliseconds? "." + _milliseconds: ""}`;
}