var tanya = true;
while (tanya){
    // menangkap pilihan player
    var p = prompt('Pilih: batu, gunting, kertas');
    
    // menangkap pilihan computer
    // membangkutkan bilangan random
    var comp = Math.random();
    if( comp < 0.34){
        comp = 'batu';
    } else if(comp >= 0.34 && comp < 0.67){
        comp = 'gunting';
    } else{
        comp = 'kertas';
    }
    var hasil = '';
    // menentukan rules
    if (p == comp){
        hasil = 'SERI'
    } else if (p == 'batu'){
        if (comp == 'gunting') {
            hasil = 'MENANG!';
        } else {
            hasil = 'KALAH';
        }
    } else if (p == 'gunting'){
        hasil = (comp == 'kertas') ? 'MENANG!' : 'KALAH';
    } else if (p == 'kertas'){
        hasil = (comp == 'batu') ? 'MENANG!' : 'KALAH';
    } else{
        hasil = 'MOHON INPUT SESUAI ATURAN!!!'
    }

    alert(
      `Kamu memilih ${p} dan komputer memilih ${comp}\n MAKA HASILNYA KAMU : ${hasil}`
    );

    tanya = confirm("lagi ?");
}
// tampilkan hasilnya

alert('TERIMA KASIH!')