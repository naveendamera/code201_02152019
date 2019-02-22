var user = prompt('what is your name?');
console.log('user name:', user);
alert('Hi there ' + user + 'I\'m going to ask you few questions.');
var Question1 = prompt(user + ' My favorite color is blue. Please answer yes/no Or y/n');
console.log('user answer:', Question1);

if (Question1.toUpperCase() === 'Y'  ) {
  alert('great, You are correct. Lets move on');
  // var Question2 = prompt(' My favorite Car is Accord.Please answer yes/no Or y/n');
    var Question3 = prompt(' My favorite game is cricket.Please answer yes/no Or y/n');
    var Question4 = prompt(' I am a software engineer. Please answer yes/no Or y/n');
    var Question5 = prompt(' I am staying in US. Please answer yes/no Or y/n');
} 
else {
  alert('its not correct');
  var cont = prompt('Do you want to continue.Please answer yes/no Or y/n');
  if (cont.toUpperCase()==='Y'){
    alert('I am going to ask next question');

    var Question2 = prompt('What is my favorite Car?');
    if (checkanswer(0, Question2.toLowerCase()) === true) {
      alert ('Yes you are correct!');
    } 
    else {
      alert('Sorry, you are incorrect!');
    }
    var Question3 = prompt(' My favorite game is cricket.Please answer yes/no Or y/n');
    var Question4 = prompt(' I am a software engineer. Please answer yes/no Or y/n');
    var Question5 = prompt(' I am staying in US. Please answer yes/no Or y/n');}
        
    else{
      alert('Thanks for your time');
    }
    console.log('Question1:', Question1);
    console.log('Question2:', Question2);
    console.log('Question3:', Question3);
    console.log('Question4:', Question4);
    console.log('Question5:', Question5);
  }

function checkanswer(quest,answ) {
  var passd= false;
  var answrs = ['accord'];
  if (answ === answrs[quest])  {
    passd = true;
  }
  else {
    passd = false;
  }
  return passd;
}


