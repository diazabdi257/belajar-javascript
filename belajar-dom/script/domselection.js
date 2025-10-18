// // Dom Selection

// // document.getElementById() -> element
// const judul = document.getElementById('judul');
// judul.style.color = 'red';
// judul.style.backgroundColor = 'grey';
// judul.innerHTML = 'Diaz Abdi';

// // document.getElementsByTagName() -> HTML Collection

// const p = document.getElementsByTagName('p');

// // p[1].style.color = 'blue';
// // p[2].style.backgroundColor = 'aqua';

// for (let i = 0; i < p.length; i++){
//     p[i].style.backgroundColor = 'aqua';
// }

// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize = '75px';

// // document.getElementsByClassName() -> HTMLCollection
// const p1 = document.getElementsByClassName('p1');
// p1[0].style.color = 'red';

// // atau bisa 

// // const p1 = document.getElementsByClassName('p1')[0];
// // p1.style.color = 'red';

// document.querySelector() ->element

const p4 = document.querySelector('#b p');

p4.style.color = 'red';
p4.style.fontSize = '30px';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';

//akan tetapi jika kita mencari p berarti kita maunya semua p akan diubah, tapi itu tidak bisa memakai
//queryselector biasa karena dia hanya akan memiilih p yang ditemukan pertama jadi kita harus memakai :
// document.querySelectorAll() -> karena dia mengembalikan nodelist

const p = document.querySelectorAll('p');
//tetapi karena dia ada index nya karena memilih banyak element, jika ingin memilih semuanya kita bisa memakai loop

for (let i = 0; i <p.length; i++){
    p[i].style.backgroundColor = 'green'
}

//queryselector sebaiknya dipakai jika kita tidak boleh mengubah struktur HTML saja, karena by performance getelement lebih baik