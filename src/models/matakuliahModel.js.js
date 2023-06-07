const mongoose = require('mongoose');

const matakuliahSchema = new mongoose.Schema({
  kode: String,
  nama: String,
  sks: Number,
  kelas: String,
});

const MataKuliah = mongoose.model('MataKuliah', matakuliahSchema);

module.exports = MataKuliah;
