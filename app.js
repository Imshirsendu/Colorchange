const h1=document.body.querySelector('#h1');
const btn=document.querySelector('.btn-outline-info')
 const colorchange= ()=>{
    const r =Math.floor(Math.random()*256);
    const g =Math.floor(Math.random()*256);
    const b =Math.floor(Math.random()*256);
    const colorchange= `rgb(${r},${g},${b})`;
    document.body.style.backgroundColor=colorchange;
    h1.innerText=`rgb(${r},${g},${b})`;
 }
 btn.addEventListener("click", colorchange);
