// displayData.js
const fs = require('fs');

// Đường dẫn của file JSON
const jsonFilePath = './products_data.json';

// Đọc dữ liệu từ file JSON
fs.readFile(jsonFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error(`Đã xảy ra lỗi khi đọc file JSON: ${err}`);
        return;
    }

    // Chuyển đổi dữ liệu JSON thành đối tượng JavaScript
    const jsonData = JSON.parse(data);

    // Hiển thị dữ liệu trên màn hình
    console.log('Dữ liệu từ file JSON:');
    console.log(jsonData);
});

