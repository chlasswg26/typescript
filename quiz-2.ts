import { DataKaryawan } from "./types/type-2";

const dataKaryawan: DataKaryawan = {
    nama: "Jhon Doe",
    umur: 17,
    nik: 34823472865,
    tanggal_lahir: "17-08-199",
    departemen: "Pemasaran",
    divisi: "Marketing 1",
    jabatan: "Leader",
    grade: "A",
    no_npwp: 123456789,
    no_rekening: 85471365863452,
    pemegang_rekening: "Jhon Doe Smith"
}
const tambahAngka: DataKaryawan = {
    ...dataKaryawan,
    umur: dataKaryawan.umur + 2
}
const mengurangiAngka: DataKaryawan = {
    ...dataKaryawan,
    umur: dataKaryawan.umur - 2
}
const membagiAngka: DataKaryawan = {
    ...dataKaryawan,
    umur: dataKaryawan.umur / 2
}

console.log('Soal nomor 1, tampil data', dataKaryawan)
console.log('Soal nomor 2, menambahkan angka', tambahAngka.umur)
console.log('Soal nomor 3, mengurangi angka', mengurangiAngka.umur)
console.log('Soal nomor 4, membagi angka', membagiAngka.umur)