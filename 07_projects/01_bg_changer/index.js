// console.log("nahiiii");
                      // 1st way 
// const btn = document.querySelectorAll('.button')
// const bd = document.querySelector('body')
// console.log(btn);
// btn.forEach(function(bt){
//     // console.log(bt,"ao");
//     bt.addEventListener('click', function(e){
//         bd.style.backgroundColor = e.target.id
//     })
// })    
                            
                        //  2nd way 

// const button = document.querySelectorAll('.button')
// const body = document.querySelector('body')
// button.forEach(function(btn){
//     //  console.log(btn);
//     btn.addEventListener('click', function(e){
//         // console.log(e.target.id);
//         if(e.target.id === 'grey'){
//             body.style.backgroundColor = 'grey'
//         }

//         if(e.target.id === 'blue'){
//             body.style.backgroundColor = 'blue'
//         }

//         if(e.target.id === 'yellow'){
//             body.style.backgroundColor = 'yellow'
//         }

//         if(e.target.id === 'white'){
//             body.style.backgroundColor = 'white'
//         }

//         if(e.target.id === 'purple'){
//             body.style.backgroundColor = 'purple'
//         }
//     })
// }) 
                            //  3rd method 

const body = document.body
const btn1 = document.querySelectorAll('.button')

btn1.forEach(li => {
    li.addEventListener('click', (e) => {
            switch(e.target.id){
                case 'grey':
                    body.style.backgroundColor = e.target.id
                    break;
                case 'purple':
                    body.style.backgroundColor = e.target.id
                    break;
                case 'white':
                    body.style.backgroundColor = e.target.id
                    break;
                case 'yellow':
                    body.style.backgroundColor = e.target.id;
                    break;
                default:
                    body.style.backgroundColor = 'orange'
                    break;
            }
    })
})