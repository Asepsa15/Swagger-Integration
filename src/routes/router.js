const express = require('express');
const router = express.Router();
const mahasiswaController = require('../controllers/mahasiswaController');
const matakuliahController = require('../controllers/mataKuliahController');

// Mahasiswa routes
router.get('/mahasiswa', mahasiswaController.getAllMahasiswa);
router.post('/mahasiswa', mahasiswaController.createMahasiswa);
router.get('/mahasiswa/:id', mahasiswaController.getMahasiswaById);
router.put('/mahasiswa/:id', mahasiswaController.updateMahasiswa);
router.delete('/mahasiswa/:id', mahasiswaController.deleteMahasiswa);

// Mata Kuliah routes
router.get('/matakuliah', matakuliahController.getAllMataKuliah);
router.post('/matakuliah', matakuliahController.createMataKuliah);
router.get('/matakuliah/:id', matakuliahController.getMataKuliahById);
router.put('/matakuliah/:id', matakuliahController.updateMataKuliah);
router.delete('/matakuliah/:id', matakuliahController.deleteMataKuliah);

module.exports = router;
