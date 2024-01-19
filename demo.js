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
      const itemContainer = document.querySelector('.item-container');
      for(let i = 0; i <= 50; i++){
        const houseItemDiv = document.createElement('div');
        houseItemDiv.classList.add('item')

        houseItemDiv.innerHTML= `
            <img src="${propertyData[i].image_url}" alt="">
            <div class="content">
            <h1 class="title">${propertyData[i].title}</h1>
            <p class="price">${propertyData[i].price}</p>
            <p class="acreage">${propertyData[i].acreage}</p>
            <p class="description">${propertyData[i].description}</p>
            </div>
      `;

        itemContainer.appendChild(houseItemDiv);
      }
    })
    .catch(err => {
      console.error(`Đã xảy ra lỗi: ${err}`);
    });