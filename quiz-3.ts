import {
  GreetingByTimeType,
  HitungPanjangStringType,
  PembulatanAngkaType
} from "./types/type-3"

const greetingByTime: GreetingByTimeType = (time) => {
  const hour: number = parseFloat(time.split('.')[0])

  if (hour >= 0 && hour < 11) {
    return "Selamat pagi!"
  } else if (hour >= 11 && hour < 15) {
    return "Selamat siang!"
  } else if (hour >= 15 && hour < 18) {
    return "Selamat sore!"
  } else if (hour >= 18 && hour < 24) {
    return "Selamat malam!"
  } else {
    return "Waktu tidak valid"
  }
}

const hitungPanjangString: HitungPanjangStringType = (input) => {
  const stringTanpaSpasi: string = input.replace(/\s/g, '')
  const panjangString: number = stringTanpaSpasi.length

  return `Jumlah huruf adalah ${panjangString} karakter.`
}

const pembulatanAngka: PembulatanAngkaType = (angka) => {
  const angkaBulat: number = Math.round(angka * 100) / 100 // Bulatkan 2 angka setelah koma

  if (angkaBulat >= 0 && angkaBulat <= 3) {
    return angkaBulat.toFixed(0) // Kembalikan angka sebelum koma
  } else if (angkaBulat >= 4 && angkaBulat <= 7) {
    const angkaSebelumKoma: number = Math.floor(angkaBulat)

    return `${angkaSebelumKoma}, 5` // Kembalikan angka dengan format "{angka sebelum koma}, 5"
  } else {
    const angkaSebelumKoma: number = Math.floor(angkaBulat)

    return (angkaSebelumKoma + 1).toString() // Kembalikan angka sebelum koma ditambah 1
  }
}

// Greeting time function
const waktuSekarang: string = "11.00"
const salam: string = greetingByTime(waktuSekarang)
console.log(salam)

// Counting length of string without whitespace
const inputString: string = "Hello Word"
const jumlahHuruf: string = hitungPanjangString(inputString)
console.log(jumlahHuruf)

// Pembulatan angka
const contohAngka = 6.1
const hasilBulatan = pembulatanAngka(contohAngka)
console.log(`Hasil bulatan: ${hasilBulatan}`)
