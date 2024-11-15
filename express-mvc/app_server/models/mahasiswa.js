const mongoose = require('mongoose');
const {Schema} = mongoose;

const mahasiswaSchema = new Schema({
    nama: String,
    npm: {  type: String, require: true},
    email: { type: String, require: true},
    tanggal_lahir: Date,
    aktif: Boolean
});

mongoose.model('Mahasiswa', mahasiswaSchema);