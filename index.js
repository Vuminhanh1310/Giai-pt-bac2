function calPTB2() {
    let a = +document.getElementById('a').value;
    let b = +document.getElementById('b').value;
    let c = +document.getElementById('c').value;

    if (a == 0 && b == 0 && c == 0) {
        document.getElementById('ketqua').innerHTML = "Phương trình có vô số nghiệm";
    }
    if (a == 0 && b !== 0 && c == 0) {
        document.getElementById('ketqua').innerHTML = "Phương trình vô nghiệm ";
    }
    if (a == 0 && b !== 0) {
        x = -c / b;
        document.getElementById('ketqua').innerHTML = "Phương trình có 1 nghiệm x = " + x;
    }
    detal = ( b * b ) - ( 4 * a * c );

    console.log(detal);

    sqrtDetal = Math.sqrt(detal)

    console.log(sqrtDetal);

    x0 = -b / (2 * a);

    x1 = ( -b + sqrtDetal)/ (2 * a);

    x2 = (-b - sqrtDetal)/ (2 * a);

    if (a!==0 && detal < 0) {
            document.getElementById('ketqua').innerHTML = "Phương trình vô nghiệm ";
        }
    if (a!==0 && detal == 0) {
        document.getElementById('ketqua').innerHTML = "Phương trình có 1 nghiệm x = " + " "+x0;
    }
    if (a!==0 && detal > 0) {
        document.getElementById('ketqua').innerHTML = "Phương trình có 2 nghiệm: x1 = " + " " + x1
            + "và x2 = " + " " + x2;
    }
}
