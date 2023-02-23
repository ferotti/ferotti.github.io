let ceki = prompt('cekinizi yazin');
let boy = prompt('boyunuzu yazin');
let bmi = (ceki / (boy * boy)) * 10000;
let netice 

if (bmi < 18) {
    netice = 'siz ceki azligindan eziyyet cekirsiniz'
} else if (bmi > 18 && bmi < 20) {
    cnetice = 'sizin cekiniz azdir lakin bunun saglamliq ucun ziyani yoxdi'
} else if (bmi > 20 && bmi <26){
    netice = 'sizin cekiniz normaldir Tebrikler!!!'
} else if (bmi > 26 && bmi <28) {
     netice = 'sizin artiiq cekiniz var'
} else if (bmi > 28 && bmi <31) {
     'siz 1 ci dereceli artiq cekiden eziyyet cekirsiniz'
} else if (bmi > 31 && bmi <36) {
    'siz 2 ci dereceli artiq cekiden eziyyet cekirsiniz'
} else if (bmi > 36 && bmi <41) {
    'siz 3 ci dereceli artiq cekiden eziyyet cekirsiniz'
} else if (bmi < 41) {
    'siz 4 ci dereceli artiq cekiden eziyyet cekirsiniz'
}

document.getElementById('fiko').innerHTML = netice 

