html, body {
    padding: 0;
    margin: 0;
}

* {
    margin-left: 5vw;
}
.name {
    text-align: left;
    accent-color: lightslategray;
    padding: 15px;
    top: 2%;
    z-index: 6;
    position: fixed;
    font-family: "serif";
    transform: translate(-50%, -50%);
    margin-top: 20px;
    margin-right: 65%;
    font-size: 18px;
    font-weight: 900;

}

.main-nav {
    background-color: #CCCCCC;
    width: 100%;
    min-height: 40px;
    padding: 20px;
    position: fixed;
    text-align: center;
    top: 0px;
    z-index: 5;
    font-size: 20px;
    transform: translate(-50%, -50%);
    margin-top: 40px;
    margin-left: 100%;
    font-weight: 700;
    padding-top: 40px;
}

.links {
    min-height: 30px;
    padding: 10px;
    text-align: center;
    width: 100%;
    margin-top: 100px;
    font-family: "Avenir";
    background-color: #CCCCCC;
    font-size: 19px;
    font-weight: 500;
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}


button {
    margin-left: 50%;
    margin-bottom: 50%;
}

.age-Days {
    margin-top: 70%;
    font-size: 2px;
}

.date-input {
    margin-bottom: 51%;
    padding: 5px;
}

.button-calculator {
    margin-top: 2%;
}

.button-calculator {
    margin: 3px;
}

h5 {
    text-align: left;
    top: 35px;
    margin-top: 30px;
    font-family: "Avenir";
}

.myH9 {
    text-align: left;
    padding: 15px;
    top: 25px;
    font-family: "Avenir";
    font-size: 20px;
}

.myH8 {
    text-align: left;
    padding: 15px;
    top: 25px;
    font-family: "Avenir";
    font-size: 20px;
}

.myH7 {
    text-align: left;
    padding: 15px;
    top: 25px;
    font-family: "Avenir";
    font-size: 20px;
}

.myH10 {
    text-align: left;
    padding: 15px;
    top: 25px;
    font-family: "Avenir";
    font-size: 20px;
}

.button-calculator {
    z-index: 3;
    text-align: left;
    padding: 15px;
    top: 35px;
    margin-top: 1%;;
}

.BirthdayField {
    z-index: 1;
    text-align: left;
    padding: 15px;
    top: 1%;
    margin-top: 30px;
    margin-left: 43%;
    font-family: "Avenir";
    margin-top: 10%;
}

.TextEnterBirthday {
    text-align: center;
    padding: 15px;
    top: 35px;
    margin-top: 70px;
    font-family: "Avenir";
    font-size: 80px;
    font-weight: 600;
    color: white;
    -webkit-text-stroke: 3px black;
}

.PicturesEarth {
    text-align: center;
    margin-top: -1270px;
    text-align: center;
    z-index: 0;
    font-size: 24px;
    animation: rotate 120s linear infinite;
    transform: translate(-50%, -50%);
}


@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

body {
    margin: 0;
    display: grid;
    place-items: center;
    min-height: 100vh;
    overflow-x: hidden;
}

.container {
    text-align: center;
}

.DaysOnEarth {
    z-index: 2;
    margin-top: 250px;
    font-size: 1000%;
    color: white;
    font-family: Avenir;
    -webkit-text-stroke: 3px black;
}

.HomeButton {
    padding-left: 1%;
}

.InfoButton {
    margin-left: 85%;
}

a {
    text-decoration: none;
}

.calculatedAnswer {
    font-size: 25px;
    font-weight: 550;
}


@media (min-width: 100px) {

    .PicturesEarth {
        width: 90vw;
        height: 90vw;
        margin-top: -70vw;
        margin-left: 0vw;
    }

    .DaysOnEarth {
        font-size: 11vw;
        margin-top: 130px;
        -webkit-text-stroke: 1px black;
        margin-left: 1vw;
    }

    .name {
        font-size: 8vw;
        margin-left: 1vw;
        margin-right: 1px;
        margin-top: 2vh;
        padding: 9px;
    }

    .TextEnterBirthday {
        font-size: 7vw;
        -webkit-text-stroke: 1px black;
    }

    .main-nav {
        margin-left: 130vw;
        padding-left: 120vw;
        font-size: 4vw;
    }

    .InfoButton {
        margin-left: 0%;
    }

    .links {
        padding-right: 20vw;
        margin-left: 20vw;
        font-size:  6vw;
    }

    .calculatedAnswer{
        font-size: 20px;
    }

    .BirthdayField{
        font-size: 4vw;
        margin-left: 27vw;
    }

    .button-calculator{
        font-size: 3vw;
        margin-left:0vw;
    }

    .calculatedAnswer{
        font-size: 5vw;
    }

    .myH9{font-size: 4vw;

    }

    .myH8{
        font-size: 4vw;
    }

    .myH7{
        font-size: 4vw;
    }

}

@media (min-width: 700px) {

    .PicturesEarth {
        width: 90vw;
        height: 90vw;
        margin-top: -70vw;
        margin-left: 0vw;
    }

    .DaysOnEarth {
        font-size: 11vw;
        margin-top: 130px;
        -webkit-text-stroke: 1px black;
        margin-left: 1vw;
    }

    .name {
        font-size: 3vw;
        margin-left: 12vw;
        margin-right: 30vw;
        margin-top: 0vw;
        padding: 12px;
    }

    .TextEnterBirthday {
        font-size: 7vw;
        -webkit-text-stroke: 1px black;
    }

    .main-nav {
        margin-left: 170vw;
        padding-left: 120vw;
        font-size: 3.5vw;
    }

    .InfoButton {
        margin-left: 0%;
    }

    .links {
        padding-right: 5vw;
        margin-left:-5vw;
        font-size:  3vw;
    }

    .BirthdayField{
        font-size: 3vw;
        margin-left: 30vw;
    }

    .button-calculator{
        font-size: 3vw;
        margin-left:0vw;
    }

    .calculatedAnswer{
        font-size: 4vw;
    }

    .myH9{font-size: 3vw;

    }

    .myH8{
        font-size: 3vw;
    }

    .myH7{
        font-size: 3vw;
    }

}

@media (min-width: 1100px) {

    .PicturesEarth {
        width: 90vw;
        height: 90vw;
        margin-top: -70vw;
        margin-left: 0vw;
    }

    .DaysOnEarth {
        font-size: 11vw;
        margin-top: 210px;
        -webkit-text-stroke: 3px black;
        margin-left: 1vw;
    }

    .name {
        font-size: 2vw;
        margin-left: 0vw;
        margin-right: 30vw;
        margin-top: 3vw;
        padding: 15px;
    }

    .TextEnterBirthday {
        font-size: 7vw;
        -webkit-text-stroke: 3px black;
    }

    .main-nav {
        margin-left: 190vw;
        padding-left: 120vw;
        font-size: 2vw;
        padding-bottom: 3vw;
        padding-top: 6vw;
    }

    .InfoButton {
        margin-left: 0%;
    }

    .links {
        padding-right: 5vw;
        margin-left:-5vw;
        font-size:  2vw;
    }

    .BirthdayField{
        font-size: 2vw;
        margin-left: 36vw;
    }

    .button-calculator{
        font-size: 2vw;
        margin-left:0vw;
    }

    .calculatedAnswer{
        font-size: 3vw;
    }

    .myH9{font-size: 3vw;

    }

    .myH8{
        font-size: 3vw;
    }

    .myH7{
        font-size: 3vw;
    }

}

@media (min-width: 1300px) {

    .PicturesEarth {
        width: 80vw;
        height: 80vw;
        margin-top: -99vh;
        margin-left: 0vw;
    }

    .DaysOnEarth {
        font-size: 9vw;
        margin-top: 25vh;
        -webkit-text-stroke: 3px black;
        margin-left: 1vw;
    }

    .name {
        font-size: 2vw;
        margin-left: 0vw;
        margin-right: 30vw;
        margin-top: 3vw;
        padding: 15px;
    }

    .TextEnterBirthday {
        font-size: 5.5vw;
        -webkit-text-stroke: 3px black;
    }

    .main-nav {
        margin-left: 180vw;
        padding-left: 120vw;
        font-size: 2vw;
        padding-bottom: 3vw;
        padding-top: 6vw;
    }

    .InfoButton {
        margin-left: 0%;
    }

    .links {
        padding-right: 0vw;
        margin-left:-5vw;
        font-size:  2vw;
    }

    .BirthdayField{
        font-size: 2.5vw;
        margin-left: 25vw;
    }

    .button-calculator{
        font-size: 2vw;
        margin-left:0vw;
    }

    .calculatedAnswer{
        font-size: 3vw;
    }

    .myH9{font-size: 3vw;

    }

    .myH8{
        font-size: 3vw;
    }

    .myH7{
        font-size: 3vw;
    }

}
