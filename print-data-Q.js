// fetch_data.js

const fs = require('fs');

// Đường dẫn đến tệp 'bat_dong_san.json'
const jsonFilePath = './bat_dong_san.json';

// Đọc nội dung của tệp JSON
fs.readFile(jsonFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Đã xảy ra lỗi khi đọc tệp JSON: ${err}`);
    return;
  }

  // Chuyển đổi dữ liệu JSON thành đối tượng JavaScript
  const propertyData = JSON.parse(data);

  // In ra dữ liệu để xem kết quả
 console.log(propertyData)
});