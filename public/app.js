let radiusT = document.getElementById("radiusT");
let radius = document.getElementById("radius");
let R = 100;
let mu =  4*Math.PI*Math.pow(10,-7);
let A = 100;
let n = 50;

let nT = document.getElementById("cowbellT");
let nSlider = document.getElementById("cowbell");
let aT = document.getElementById("amperT");
let aSlider = document.getElementById("amper");

showMessage(R,n,A);

radius.addEventListener("input", function(e){
    R = Number(radius.value);
    radiusT.innerHTML = "Радиус Катушек(см): " + R;
    showMessage(R,n,A);
});


nSlider.addEventListener("input", function(e){
    n = Number(nSlider.value);
    nT.innerHTML = "Количество витков: " + n;
    showMessage(R,n,A);
});



aSlider.addEventListener("input", function(e){
    A = Number(aSlider.value);
    aT.innerHTML = "Величина тока(A): " + A;
    showMessage(R,n,A);
});


function showMessage(R,n,A) {
    let massx = [];
    let massy = [];
    R2 = R/100;
    for (let i =0; i<R2; i +=0.0001 ){
        massx.push(i*100);
        B =  n*mu*A*R2*R2/2*(1/Math.pow(i*i+R2*R2,1.5)+1/Math.pow((i-R2)*(i-R2)+R2*R2,1.5))
        massy.push(B);
    }

    var result ={
        x: massx,
        y: massy,
        mode: 'liness'
    };
    var baseLayout = {
        title: 'Зависимость магнитной индукции поля от координаты x',
        autosize: true,
        /*width: 1600,
        height: 300,*/
        xaxis: {
            title: 'См',
            rangemode: 'tozero',
        },
        yaxis: {
            title: 'Тл',
        },
        margin: {
            l: 50,
            r: 20,
            b: 30,
            t: 50,
            pad: 0
          },
        font: {
            size: 9,
          }
    };
    
    Plotly.newPlot( 'tester', [result], baseLayout );

}