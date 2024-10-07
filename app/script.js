const  gallery  = document.querySelector('.gallery');


fetch('./images.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    showImages(data);
  });

  function showImages(data){
    for(let i=0; i < data.length; i++){
        const img = document.createElement('img');
        img.src = './images/' + data[i];
        img.alt=data[i];
        gallery.append(img);

    }
  }