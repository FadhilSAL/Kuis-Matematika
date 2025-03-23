const kirim = document.getElementById('kirimjawab');
const kolpertanyaan = document.getElementById('pertanyaan');
const koljawaban = document.getElementById('jawab');
let hasil = document.getElementById('hasil');
let skorUI = document.getElementById('skor');
const customalert = document.getElementById('alert');
const pesanAlert = document.getElementById('Pesanalert');
const progress = document.getElementById('progress');
const skorAkhir = document.getElementById('skorAkhir');
const bungkusHasil = document.getElementById('bungkus-hasil');
const skorSempurna = document.getElementById('skorSempurna');

const pertanyaan =  [

    {
        pertanyaan:'10 / 2 + 5',
        jawaban:'10'
    },
    {
        pertanyaan:'7 x 5 + 9',
        jawaban:'44'
    },
    {
        pertanyaan:'90 + 9 x 10',
        jawaban:'180'
    },
    {
        pertanyaan:'100 x 50 + 20',
        jawaban:'5020'
    },
    {
        pertanyaan:'Tentukan gradien dari garis lurus yang melewati (0,2) dan (3,4)',
        jawaban:'2/3'    
    },
    {
        pertanyaan:'Jika f(x) = 2x + 3 diketahui x = 10 maka f(10) = ?',
        jawaban:'23'
    }
  
]

function tampilPesan(pesan,skor,pertanyaan,nomorPertanyaan){
    progress.textContent = `Soal terjawab ${nomorPertanyaan + 1}/${pertanyaan.length}`;
    kirim.classList.add('hidden');
    koljawaban.classList.add('hidden');
    kolpertanyaan.classList.add('hidden');
    bungkusHasil.classList.add('hidden');
    pesanAlert.textContent = pesan;
    if(skor == -1){
        skorAkhir.textContent = 'kurang dari 0' 
    }else{

        skorAkhir.textContent = skor;
    }
    console.log(skorAkhir)
    if(skorAkhir.textContent == pertanyaan.length){
  skorSempurna.textContent = 'ini adalah skor yang sempurna'
    }
    customalert.classList.remove('-translate-y-35');
  console.log(pesan);
}

function tutupPesan(){
    customalert.classList.add('-translate-y-35');
    location.reload();
}


let nomorPertanyaan = 0;
let skor = 0;

kirim.addEventListener('click',function(){
    koljawaban.classList.remove('h-0');
    kirim.classList.remove('hidden');
    koljawaban.classList.remove('hidden');
    kolpertanyaan.classList.remove('hidden');
    koljawaban.classList.remove('hidden');
    bungkusHasil.classList.remove('hidden');
    kirim.textContent = 'Jawab';
    kolpertanyaan.textContent = pertanyaan[nomorPertanyaan].pertanyaan
    if(koljawaban.value == pertanyaan[nomorPertanyaan].jawaban){
        koljawaban.classList.add('hidden')
        kirim.textContent = "Lanjut";
        hasil.textContent = 'Benar'
        skor++
        skorUI.textContent = skor
        if(nomorPertanyaan+1 == pertanyaan.length){
            
           setTimeout(()=>{

               tampilPesan('Anda Menang',skor,pertanyaan,nomorPertanyaan)
           },0)
           
                 
        }else{
            nomorPertanyaan++
        }
        
    }
    else if(koljawaban.value == ''){
        hasil.textContent = 'Isi kolom jawaban';
        
    }
    else{
        hasil.textContent = 'Salah'
        skor--
        skorUI.textContent = skor
        if(skor < 0){
  
           tampilPesan('Anda Kalah',skor,pertanyaan,nomorPertanyaan);
          
        }
        
    }
    progress.textContent = `Soal terjawab : ${nomorPertanyaan}/${pertanyaan.length}`
    koljawaban.value = '';
})