/* ============================================================== 
javascript code for photo gallery "horses" (Fotogalerie Pferde)
Author: Annette Lasar
Date: July 2023
================================================================= */

/* renders photos from array into the browser */
function renderMyPictures() {
  let gallerySection = document.getElementById('gallery');
  gallerySection.innerHTML = '';

  for (let i = 0; i < myPictures.length; i++) {
    let picture = myPictures[i];
    gallerySection.innerHTML += generateGalleryHTML(picture, i);
  }
}

/* defines the function openImage(i)
on clicking on a photo a detailed view is shown */
function openImage(i) {
  let dialogBox = document.getElementById('dialog-bg');
  let picture = myPictures[i];

  dialogBox.innerHTML = generatePhotoBoxHTML(i, picture);
  dialogBox.classList.remove('d-none');
}

/* closes the image box that displays a detailed view of one photo */
function closeImage() {
  let closedImage = document.getElementById('dialog-bg');
  closedImage.classList.add('d-none');
}

/* onclick function that shows the previous picture of the array */
function showPreviousPicture(i) {
  let previousIndex = (i - 1 + myPictures.length) % myPictures.length;

  openImage(previousIndex);
}

/* onclick function that shows the next picture of the array */
function showNextPicture(i) {
  let nextIndex = (i + 1 + myPictures.length) % myPictures.length;

  openImage(nextIndex);
}
