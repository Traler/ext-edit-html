console.log("hello from content.js");

let mousemove;

let enabled = false;

document.addEventListener('mousemove', (e)=>{
    mousemove = e.target;
});

document.addEventListener('keypress', (e)=>{
    if (e.code == 'Numpad2') {
      enabled = !enabled;
    }     
    if (enabled && e.code == 'KeyC') {
      console.log(mousemove.innerText);
      navigator.clipboard.writeText(mousemove.innerText);
      enabled = !enabled;
    }
});