const mongoose = require('mongoose');

const mahasiswaSchema = new mongoose.Schema({
  nama: String,
  nim: String,
  kelas: String,
  jenisKelamin: String,
});

const Mahasiswa = mongoose.model('Mahasiswa', mahasiswaSchema);

module.exports = Mahasiswa;
