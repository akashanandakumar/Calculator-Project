let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'AC':
                display.innerText = '';
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText).toFixed(2);
                } catch {
                    display.innerText = "Error"
                }
                break;
            case '←':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case '^':  
                display.innerText = Math.pow(display.innerText,2);
                break;
            case '%':
                display.innerText = display.innerText /100;
                break; 
            default:
                display.innerText += e.target.innerText;
        }
    });
});