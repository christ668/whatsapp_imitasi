Project untuk melengkapi tugas dari hacktif8, project ini membuat tiruan whatsapp yang dibangun menggunakan framework react

## teknologi yang digunakan

react hooks, graphql, materialUI, javascript, typescript, nodeJS

## Fitur yang digunakan

FRONTEND

bisa login / logout
pada halaman login harus mengisi dahulu baru bisa login (tidak melihat ke database)
tidak mono repo, dipisah antara backend dan frontend
menampilkan chatlist screen
auto sort message yang dikirim automatis menjadi urutan 1 pada halaman chatlist screen
ada chatroom (bisa mengirim pesan dan di rubah di mock data pada server) masih bug, harus di refresh baru muncul
animasi perpindahan page menggunakan animated switch yang dibuat sesndiri

Backend
menggunakan graphql
menggunakan sistem subscription agar live update jika dibuka di 2 client
menggunakan sistem caching agar meskipun front tertutup data tidak kembali ke kondisi awal (restart jika backend mati)
menggunakan fitur codegen untuk menggenerate script TS yang berisi mutation dan query

## Penggunaan

download repo ini dah whatsapp-server-imitasi

gunakan command yarn install untuk install library pada kedua repo terpisah

untuk repo server jalankan yarn start (automatis menjalankan graphql-codegen)
untuk frontend jalankan yarn codegen terlebih dahulu sebelum menjalankan yarn start
