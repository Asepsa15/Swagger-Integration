const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Mahasiswa', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Koneksi database gagal:'));
db.once('open', () => {
  console.log('Terhubung ke database MongoDB');
});
