const arr = [1, 2, 2, 3, 3, 4, 5, 5];
const frequency = {};
const uniqueNumbers = [];

// Menghitung frekuensi setiap elemen
arr.forEach(num => {
    frequency[num] = (frequency[num] || 0) + 1;
});

// Memasukkan angka yang hanya muncul sekali ke dalam array uniqueNumbers
for (const [key, value] of Object.entries(frequency)) {
    if (value === 1) {
        uniqueNumbers.push(Number(key));
    }
}

// Menampilkan hasil, jika uniqueNumbers kosong tampilkan []
console.log(uniqueNumbers.length > 0 ? uniqueNumbers : []);
