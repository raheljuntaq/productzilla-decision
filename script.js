function isLulus(nilaiKeaktifan, nilaiUjian, absensi) {
  if (nilaiKeaktifan === 100 && nilaiUjian === 100 && absensi === 100) {
    return "Outstanding";
  }

  var rataRataNilai = (nilaiKeaktifan + nilaiUjian + absensi) / 3;

  if (rataRataNilai >= 90 && rataRataNilai <= 100) {
    return "Excellent";
  } else if (rataRataNilai >= 80 && rataRataNilai < 90) {
    return "Good";
  } else {
    return "Participant";
  }
}

var hasil = isLulus(70, 80, 75);
console.log("Nilai Cek Kelulusan : " + hasil);
