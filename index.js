// let t1=performance.now();
// for(let i=0; i<1000; i++)
// {
//     let newElement= document.createElement('p');
    
//     newElement.textContent='this  para'+i;

//     document.body.appendChild(newElement);
// }
// let t2=performance.now();
// console.log(t2-t1);
// //optimizing code
// let t3=performance.now();

// let myDiv=document.createElement('div');

// for(let i=0; i<1000; i++)
// {
//     let element=document.createElement('p');

//     element.textContent='this is new para '+i;

//     myDiv.appendChild(element);

// }
// document.body.appendChild(myDiv);

// let t4=performance.now();
// console.log(t4-t3);

// //using fragement
// let t5=performance.now();

// let fragement=document.createDocumentFragment();

// for(let i=0; i<1000; i++)
// {
//     let element=document.createElement('p');

//     element.textContent='this is fragment para '+i;

//     fragement.appendChild(element);

// }
// document.body.appendChild(fragement);

// let t6=performance.now();
// console.log(t6-t5);