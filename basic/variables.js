/* "use strict";
 */
function colorLog(message, color) {

    color = color || "#3987c5";

    switch (color) {
        case "success":  
             color = "#5f8a38"; 
             break;
        case "info":     
                color = "#ffc91d";  
             break;
        case "error":   
             color = "#fb3b3f";     
             break;
        case "warning":  
             color = "#ff7636";   
             break;
        default: 
             color = color;
    }

    console.log("%c" + message, "color:" + color);
}

let a = 1;
colorLog(a);

a = "hey";
colorLog("a:", a);

let x_float = 999999999999999;   // x will be 999999999999999
let y_float = 9999999999999999;  // y will be 10000000000000000

colorLog(x_float);
colorLog(y_float);

let x = 10;
let y = 20;
let z = "30";
let result = x + y + z;
colorLog(result);

x = "100";
y = "10";
z = x / y;
colorLog(z);
 

x = "100";
y = "10";
z = x * y;
colorLog(z);

x = "100";
y = "10";
z = x - y;
colorLog(z);

colorLog(100 / "10");
colorLog(100 - "10");
colorLog(100 + "10");
colorLog(100 * "10");


colorLog(typeof NaN);


x =  2 / 0;
y = -2 / 0;
colorLog(x);
colorLog(y);

colorLog(typeof Infinity);
colorLog(0xFF);


x = 666;
y = new Number(666)
colorLog(x==y, 'info');
colorLog(x===y, 'success');

x = NaN;
y = new Number(NaN)
colorLog(x==y, 'warning');
colorLog(x===y, 'warning');

colorLog(undefined==="undefined", 'info');
colorLog(undefined=="undefined");
