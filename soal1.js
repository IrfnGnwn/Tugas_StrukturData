const arr = [1, 1, 2, 2, 2, 3, 3, 3, 3];
const result = {};

// Menghitung frekuensi setiap elemen
arr.forEach(num => {
    result[num] = (result[num] || 0) + 1;
});

// Menampilkan output
for (const [key, value] of Object.entries(result)) {
    console.log(`${key}:${value}`);
}

// Jika ingin output sebagai objek, hasilnya ada di variabel "result"
console.log(result);
