let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar1');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}

function finding(){
  var userinput = document.getElementById("user-symptom").value;
  var c1 = document.getElementById('c1');
  var c2 = document.getElementById('c2');
  var c3 = document.getElementById('c3');
  var c4 = document.getElementById('c4');
  var c5 = document.getElementById('c5');
  var c6 = document.getElementById('c6');
  // console.log(userinput);

  if(userinput=='Headache'){
    c1.innerHTML='Migraine';
    c2.innerHTML='Tension';
    c3.innerHTML='Cluster';
    c4.innerHTML='Chronic Headache';
    c5.innerHTML='Sinus';
    c6.innerHTML='Brain Tumour';
  }
  else if(userinput=='Runny Nose'){
    c1.innerHTML='Common Cold';
    c2.innerHTML='Influenza';
    c3.innerHTML='Allergies';
    c4.innerHTML='COVID-19';
    c5.innerHTML='Deviated septum';
    c6.innerHTML='Hormonal changes';
  }
  else if(userinput=='Red Eyes'){
    c1.innerHTML='Dry Eye';
    c2.innerHTML='Medical conditions';
    c3.innerHTML='Infective Conjunctivitis';
    c4.innerHTML='Allergic Conjunctivitis';
    c5.innerHTML='Corneal Ulcers';
    c6.innerHTML='Subconjunctival Hemorrhage';
  }
  else if(userinput=='Vommitting'){
    c1.innerHTML='Acute liver failure';
    c2.innerHTML='Alcohol use disorder';
    c3.innerHTML='Anaphylaxis';
    c4.innerHTML='Cholecystitis';
    c5.innerHTML='Anorexia Nervosa';
    c6.innerHTML='Appendicitis';
  }
  else if(userinput=='Nose Bleeding'){
    c1.innerHTML='Allergies';
    c2.innerHTML='Using Drugs';
    c3.innerHTML='High blood pressure';
    c4.innerHTML='Nasal Tumors';
    c5.innerHTML='Leukemia';
    c6.innerHTML='Pregnancy';
  }
  else if(userinput=='Breathing Problem'){
    c1.innerHTML='Asthma';
    c2.innerHTML='COPD';
    c3.innerHTML='Emphysema';
    c4.innerHTML='Tuberculosis';
    c5.innerHTML='Pneumonia';
    c6.innerHTML='Chronic Bronchitis';
  }
  else if(userinput=='Fever'){
    c1.innerHTML='Malaria';
    c2.innerHTML='Dengue';
    c3.innerHTML='Typhoid';
    c4.innerHTML='Chikungunya';
    c5.innerHTML='Heat Exhaustion';
    c6.innerHTML='Malignant Tumor';
  }
  else if(userinput=='Body Pain'){
    c1.innerHTML='Injury';
    c2.innerHTML='Arthritis';
    c3.innerHTML='Cardiac Disorders';
    c4.innerHTML='Hypothyroidism';
    c5.innerHTML='Viral Infections ';
    c6.innerHTML='Intense Exercise ';
  }
  else if(userinput=='Cough'){
    c1.innerHTML='Asthma';
    c2.innerHTML='Infections';
    c3.innerHTML='COPD';
    c4.innerHTML='Postnasal drip';
    c5.innerHTML='Gastroesophageal reflux disease';
    c6.innerHTML='Lung cancer';
  }
  else if(userinput=='Spiting Blood'){
    c1.innerHTML='chronic bronchitis';
    c2.innerHTML='COPD';
    c3.innerHTML='Exacerbation';
    c4.innerHTML='Cystic fibrosis';
    c5.innerHTML='Pneumonia';
    c6.innerHTML='Mouth Ulcers';
  }
  else{
    alert('Invalid Input! Please Enter A Valid Input....');
  }
   
}

function clearing(){
  let forms = [...document.forms];
  forms.forEach(form => form.reset());
    c1.innerHTML='';
    c2.innerHTML='';
    c3.innerHTML='';
    c4.innerHTML='';
    c5.innerHTML='';
    c6.innerHTML='';
}