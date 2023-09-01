function ButtonTest() {
    const YearInput = document.getElementById("date-input");
    const YearNumber = YearInput.valueAsDate.getFullYear()

    const MonthInput = document.getElementById("date-input");
    const MonthNumber = MonthInput.valueAsDate.getMonth()
    const RealNumberMonth = (Number(MonthNumber) + (1))

    const dateInput = document.getElementById("date-input");
    const dateNumber = dateInput.valueAsDate.getDate()

    const actualYear = new Date().getFullYear();
    const actualMonth = new Date().getMonth();
    const actualDay = new Date().getDate();
    const actualHour = new Date().getHours();

    //31557600 = seconds in 365.25 days = Year
    //2629800 = seconds in 30.4375 days = month
    //86400 = seconds in a day

    let actualTime = (Number(actualYear * 31557600) + Number(actualMonth * 2629800) + Number(actualDay * 86400));
    let birthtime = (Number(YearNumber * 31557600) + Number(RealNumberMonth * 262980) + Number(dateNumber * 86400));
    const seconds = actualTime - birthtime;

    const CalculatedYear = (Number(seconds) / (31557600));
    const calculatedDays = (Number(seconds) / (86400));
    const calculatedMinutes = (Number(seconds) / (60));
    const calculatedSeconds = (Number(seconds));
    const RoundedCalculatedYear = parseFloat(CalculatedYear.toFixed(2))

    //console.log('test');

   // const h10 = document.querySelectorAll(".myH10")
   // h10[0].innerText = CalculatedYear;

    const h7 = document.querySelectorAll(".myH7")
    h7[0].innerText = Math.round(calculatedDays);

    const h8 = document.querySelectorAll(".myH8")
    h8[0].innerText = calculatedMinutes;

    const h9 = document.querySelectorAll(".myH9")
    h9[0].innerText = calculatedSeconds;

    //const underline = document.createElement("u");
    //underline.innerText = "Bye World!";
    //h6.innerText = "";
    //h6.append(underline);

    //const p = document.querySelectorAll(".SolutionYear")
    //h6 [0].innerText = "Test"

    // var TextFieldYear = Document.getElementById("age-y");
    //TextFieldYear.value = CalculatedYear;
    //debugger;

    //window.alert(Number(RoundedCalculatedYear) + " Years old are you or ");
    //window.alert(Math.round(Number(calculatedDays)) + " Days old or ");
    //window.alert(Math.round(Number(calculatedMinutes)) + " Minutes old or ");
    //window.alert(Math.round(Number(calculatedSeconds)) + " Seconds old are you");

}
