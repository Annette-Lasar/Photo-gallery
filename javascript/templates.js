function generateGalleryHTML(picture, i) {
  return /* html */ `
    <figure class=${picture.imageClass} onclick="openImage(${i})">
      <img src="${picture.picture}" alt="">
  </figure>
  `;
}

function generatePhotoBoxHTML(i, picture) {
  return /*html*/ `
  <div id="photo-box" class="photo-box"> 
      <figure>
      <img src="${picture.picture}" alt="" />
      <figcaption>${picture.caption}</figcaption>
      </figure>
          <button onclick="closeImage()" class="close-button">
            <img src="../assets/icons/x-close.png" alt="Detailansicht schließen" />
            </button>
          <div class="arrows">
            <button>
                <img onclick="showPreviousPicture(${i})" src="../assets/icons/arrow-left.svg" alt="Voriges Bild" width="48" />
            </button>
            <button>
                <img onclick="showNextPicture(${i})" src="../assets/icons/arrow-right.svg" alt="Nächstes Bild" width="48" />
            </button>
          </div>
    </div>
  `;
}
