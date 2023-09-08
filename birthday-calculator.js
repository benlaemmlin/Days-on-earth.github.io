function everything() {
    const birthYear = window.prompt("Pleas enter your Birthyear");
    const birthMonth = window.prompt("Please enter the month you were born");
    const birthDay = window.prompt("Please enter your birthdate");
    const birthHour = window.prompt("do you remember what houer you were born? no? no problem just press ok");
    //const birthMinute= window.prompt(" do you remember what minute you were born? no? no problem just press ok")
    //const birtsecond= window.prompt("do you remember what second you were born? no? no problem just press ok")


    const actualYear = new Date().getFullYear();
    const actualMonth = new Date().getMonth();
    const actualDay = new Date().getDate();
    const actualHour = new Date().getHours();
    //const actualMinute = new Date().getMinutes();
    // const actualSec0nd = new Date().getSeconds();

    //31557600 = seconds in 365.25 days = Year
    //2629800 = seconds in 30.4375 days = month
    //86400 = seconds in a day

    let actualtime = (Number(actualYear * 31557600) + Number(actualMonth * 2629800) + Number(actualDay * 86400) + Number(actualHour * 3600));
    var birthtime = (Number(birthYear * 31557600) + Number(birthMonth * 262980) + Number(birthDay * 86400) + Number(birthHour * 3600));
    const seconds = actualtime - birthtime;

    //document.write(Math.round(Number(seconds) / (31557600)) + " years old are you or <br>");
    //document.write(Number(seconds) / (86400) + " days old or <br>");
    //document.write(Number(seconds) / (60) + " minutes old or <br>");
    //document.write(Number(seconds) + " seconds old are you")

    var calculatedYear = (Number(seconds) / (31557600));
    var calculatedDays = (Number(seconds) / (86400));
    var calculatedMinutes = (Number(seconds) / (60));
    var calculatedSeconds = (Number(seconds));
    var roundedcalculatedYear = parseFloat(calculatedYear.toFixed(2));

    window.alert(Number(roundedcalculatedYear) + " Years old are you or ");
    window.alert(Math.round(Number(calculatedDays)) + " Days old or ");
    window.alert(Math.round(Number(calculatedMinutes)) + " Minutes old or ");
    window.alert(Math.round(Number(calculatedSeconds)) + " Seconds old are you");

}

