// Hàm tải tệp JSON từ máy chủ
function fetchJsonFile(filePath) {
    return fetch(filePath)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
        
      })
      .catch(error => {
        console.error(`Đã xảy ra lỗi khi tải tệp JSON: ${error}`);
        throw error;
      });
  }

  // Sử dụng hàm fetch để tải tệp JSON từ máy chủ
  fetchJsonFile('./bat_dong_san_vn.json')
    .then(propertyData => {
      const item = document.querySelector('.item');
      item.innerHTML = `
        <img src="${propertyData[0].image_url}" alt="">
        <div class="content">
          <h1 class="title">${propertyData[0].title}</h1>
          <p class="price">${propertyData[0].price}</p>
          <p class="acreage">${propertyData[0].acreage}</p>
          <p class="description">${propertyData[0].description}</p>
        </div>
      `;
    })
    .catch(err => {
      console.error(`Đã xảy ra lỗi: ${err}`);
    });