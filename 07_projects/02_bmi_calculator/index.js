const height = document.querySelector('#height');
const weight = document.getElementById('weight');
button = document.querySelector('button');

button.addEventListener('click', function (e) {
  e.preventDefault();
  const h = parseInt(height.value);
  const w = parseInt(weight.value);
  const result = document.querySelector('#results');
  
  if (h == '' || isNaN(h) || h <= 0) {
    console.log('a');
    result.innerHTML = `Plase give a valid height ${h}`;
  } else if (w == '' || isNaN(w) || w <= 0) {
    console.log('b');
    result.innerHTML = `Please give a valid weight ${w}`;
  } else {
    console.log('c');
    const res = h * w;
    const guide = document.querySelector('#weight-guide');
    const guideMain = guide.querySelectorAll('p');
    for (let data of guideMain) {
      console.log(data, 'op');
      if (data.innerHTML.split('=')[0].trim() == "Under Weight"  && res < 18) {
        console.log('llll');
        result.innerHTML = `Your BMI is ${data.innerHTML.split('=')[0]} ${res}`;
        break;
      } 
      
      if (data.innerHTML.split('=')[0].trim() == "Normal Range" && res >= 18.6 && res <= 24.9) {
        console.log('iiii');
        console.log(data.innerHTML.split('=')[0].trim() == "Normal Range")
        console.log(res >= 18.6 || res <= 24.9)
        result.innerHTML = `Your BMI is ${data.innerHTML} ${res}`;
        break;
      }

      if(data.innerHTML.split('=')[0].trim() == "Overweight" && res >= 24.9) {
        console.log("oooo")
        result.innerHTML = `Your BMI is ${data.innerHTML} ${res}`;
        break;
      }
    }
  }
});