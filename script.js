let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}


document.querySelector('#login-btn').onclick = () => {
  document.querySelector('.login_form_container').classList.toggle('active');
  // menu.classList.remove('fa-times');
  // navbar.classList.remove('active');
}

document.querySelector('#close-login-form').onclick = () => {
  document.querySelector('.login_form_container').classList.remove('active');
}

document.querySelector('#r-btn').onclick = () => {
  document.querySelector('.Registration_form_container').classList.toggle('active');
  document.querySelector('.login_form_container').classList.remove('active');
  // menu.classList.remove('fa-times');
  // navbar.classList.remove('active');
}

document.querySelector('#close-register-form').onclick = () => {
  document.querySelector('.Registration_form_container').classList.remove('active');
}

document.querySelector('#age-btn').onclick = () => {
  document.querySelector('.age_form_container').classList.toggle('active');
  // menu.classList.remove('fa-times');
  // navbar.classList.remove('active');
}

document.querySelector('#close-age-form').onclick = () => {
  document.querySelector('.age_form_container').classList.remove('active');
}


// script for age function
function ageCalculator() {
  var userinput = document.getElementById("datepicker").value;
  var dob = new Date(userinput);

  if (userinput == null || userinput == '') {
    document.getElementById("chose-date").innerHTML = "**Choose a date please!";
    return false;
  }
  //execute if the user entered a date 
  else {

    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    // var selectdate = new Date(this.value);
    var DOB = dob.toLocaleDateString('en-US', options);
    document.getElementById("chose-date").innerHTML = "DOB : " + " " + DOB;

    //extract the year, month, and date from user date input
    var dobYear = dob.getYear();
    var dobMonth = dob.getMonth();
    var dobDate = dob.getDate();

    //get the current date from the system  
    var now = new Date();

    //extract the year, month, and date from current date  
    var currentYear = now.getYear();
    var currentMonth = now.getMonth();
    var currentDate = now.getDate();

    //declare a variable to collect the age in year, month, and days  
    var age = {};
    var ageString = "";

    //get years  
    yearAge = currentYear - dobYear;


    //get months  
    if (currentMonth >= dobMonth)
      //get months when current month is greater  
      var monthAge = currentMonth - dobMonth;
    else {
      yearAge--;
      var monthAge = 12 + currentMonth - dobMonth;
    }

    //get days  
    if (currentDate >= dobDate)
      //get days when the current date is greater  
      var dateAge = currentDate - dobDate;
    else {
      monthAge--;
      var dateAge = 31 + currentDate - dobDate;

      if (monthAge < 0) {
        monthAge = 11;
        yearAge--;
      }
    }


    //group the age in a single variable  
    age = {
      years: yearAge,
      months: monthAge,
      days: dateAge
    };

    var y, m, b;

    if ((age.years > 0) && (age.months > 0) && (age.days > 0)) {
      y = age.years + " Years  "
      m = age.months + " Months "
      d = age.days + " days old.";
    }
    else if ((age.years == 0) && (age.months == 0) && (age.days > 0)) {
      d = "Only " + age.days + " days old!"
      y = "0 Years"
      m = "0 Month";
    } //when current month and date is same as birth date and month 

    else if ((age.years > 0) && (age.months == 0) && (age.days == 0)) {
      y = age.years + " Years old."
      m = "0 Month"
      d = "0 days"
      ageString = "Happy Birthday live long life!!";
    }

    else if ((age.years > 0) && (age.months > 0) && (age.days == 0)) {
      y = age.years + " Years "
      m = age.months + " months old."
      d = "0 Days.";
    }
    else if ((age.years == 0) && (age.months > 0) && (age.days > 0)) {
      y = "0 Year"
      m = age.months + " months "
      d = age.days + " days old.";
    }
    else if ((age.years > 0) && (age.months == 0) && (age.days > 0)) {
      y = age.years + " years"
      m = "0 Month"
      d = age.days + " days old.";
    }
    else if ((age.years == 0) && (age.months > 0) && (age.days == 0)) {
      y = "0 Year"
      m = age.months + " months old."
      d = "0 days";
    }
    else if (dob > now) {
      y = "0"
      m = "0"
      d = "0"
      ageString = "Invalid date!!";
    }
    //when current date is same as dob(date of birth)  
    else {
      y = "0"
      m = "0"
      d = "0"
      ageString = "Welcome to Earth! <br> It's first day on Earth!";
    }

    document.getElementById("result").innerHTML = ageString;
    document.getElementById('ageyear').innerHTML = y;
    document.getElementById('agemonth').innerHTML = m;
    document.getElementById('agedays').innerHTML = d;
  }
}


window.onload = () => {
  fadeOut();
}

function loader() {
  document.querySelector('.loader_container').classList.add('active');
}

function fadeOut() {
  setTimeout(loader, 3000);
}

var swiper = new Swiper(".home_slider", {
  spaceBetween: 30,
  grabCursor: true,
  centeredSlides: true,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const calculate = document.querySelector("#calculate");
const yourbmi = document.querySelector("#yourbmi");
const clear = document.querySelector("#clear");

calculate.addEventListener("click", () => {
  if (height.value != "" && weight.value != "") {
    var bmivalue = weight.value / (height.value * height.value) * 10000;
    yourbmi.innerHTML = `Your BMI Is: ${bmivalue.toFixed(2)} kg/m<sup>2</sup>`;
    state();
  }
  else {
    yourbmi.innerHTML = `Please Enter a Correct value`;
  }
});

clear.addEventListener("click", () => {
  let forms = [...document.forms];
  forms.forEach(form => form.reset());
  document.querySelector("#yourbmi").innerHTML = "";
});



async function getcovid() {
      const jasondata = await fetch('https://api.covid19api.com/summary');
      const jsdata = await jasondata.json();
      // console.log(jsdata.Countries[76]);
       const country_name = jsdata.Countries[76];
      document.getElementById('confirmed').innerHTML = country_name.TotalConfirmed;
      document.getElementById('death').innerHTML = country_name.TotalDeaths;
     
      
}


// function showpass(){

//   var x = document.getElementById('password');
//   var y = document.getElementById('hide1');
//   var z = document.getElementById('hide2');

//   if(x.type ==='password'){
//     x.type = 'text';
//     y.style.display = "block";
//     z.style.display = "none";
//   }
//   else{
//     x.type = 'password';
//     y.style.display = "none";
//     z.style.display = "block";
//   }
// }


  // function state(bmivalue){
  //   let states;
  //   if(bmivalue < 18.5){
  //     states = "Underweight";
  //   }
  //   else if(bmivalue >= 18.5 && bmivalue <= 24.9){
  //     states = "Normal Weight";
  //   }
  //   else if(bmivalue >= 25 && bmivalue <= 29.9){
  //     states = "Overweight";
  //   }
  //   else if(bmivalue >= 30 && bmivalue <= 34.9){
  //     states = "Obese";
  //   }

  //   document.getElementById("#status").innerHTML = `${states}`;
  // }

  // const body = document.body;
  // document.querySelector('form').addEventListener('submit',handlEvent);

  // function handlEvent(e){
  //   e.preventDefault(e);
  //   let height = document.getElementById('height').value;
  //   let weight = document.getElementById('weight').value;
  //   calcBMI(height, weight);
  // }

  // function calcBMI(height, weight){
  //   const bmi = (weight / Math.pow((height/100),2)).toFixed(2)
  // }



  // script for age functtion

// var datepicker = document.getElementById('datepicker');
// var choosedate = document.getElementById('chose-date');


// var ageyear = document.getElementById('ageyear');
// var agemonth = document.getElementById('agemonth');
// var agedays = document.getElementById('agedays');
// var agehour = document.getElementById('agehour');
// var ageminute = document.getElementById('ageminute');
// var agesec = document.getElementById('agesec');

// datepicker.addEventListener('change', function () {

//   var options = { year: 'numeric', month: 'long', day: 'numeric' };
//   var selectdate = new Date(this.value);
//   var DOB = selectdate.toLocaleDateString('en-US', options);

//   // console.log('dob: ' +DOB);
//   choosedate.innerHTML = "DOB : " + " " + DOB;

//   var age_in_seconds_DOB = Date.parse(DOB);
//   var age_in_seconds_now = Date.now();

//   var age_in_mliseconds = age_in_seconds_now - age_in_seconds_DOB;

//   // console.log(age_in_mliseconds);

//   var miliseconds = age_in_mliseconds;
//   var second = 1000;
//   var minute = second * 60;
//   var hour = minute * 60;
//   var day = hour * 24;
//   var month = day * 30;
//   var year = day * 365;


//   var years = Math.round(miliseconds / year);
//   var months = years * 12;
//   var days = years * 365;
//   var hours = Math.round(miliseconds / hour);
//   var minutes = Math.round(miliseconds / minute);
//   var seconds = Math.round(miliseconds / second);


//   ageyear.innerHTML = years;
//   agemonth.innerHTML = months;
//   agedays.innerHTML = days;
//   agehour.innerHTML = hours;
//   ageminute.innerHTML = minutes;
//   agesec.innerHTML = seconds;
// });

// end script of age function

