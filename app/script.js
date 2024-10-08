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
        const a = document.createElement('a');
        a.href = './images/' + data[i];
        a.setAttribute('download', 'download')
        const img = document.createElement('img');
        img.alt=data[i];
        img.src = './images/min_' + data[i];
        img.setAttribute('loading', 'lazy');
        a.append(img);
        gallery.append(a);

    }
  }