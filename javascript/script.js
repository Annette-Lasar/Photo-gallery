/* ============================================================== 
javascript code for photo gallery "horses" (Fotogalerie Pferde)
Author: Annette Lasar
Date: July 2023
================================================================= */
let myPictures = [
  {
    picture: '../assets/arabian_horse.jpg',
    caption: 'Araber gelten als sehr edel.',
    imageClass: 'vertical',
  },

  {
    picture: '../assets/curious_horse.jpg',
    caption: 'Pferde sind neugierig.',
    imageClass: 'horizontal',
  },

  {
    picture: '../assets/donkeys.jpg',
    caption: 'Esel können gut mit Pferden zusammen gehalten werden.',
    imageClass: 'horizontal',
  },

  {
    picture: '../assets/donkeys_stables.jpg',
    caption:
      'Esel brauchen stets einen Stall, denn ihr Fell ist nicht wasserdicht.',
    imageClass: 'horizontal',
  },

  {
    picture: '../assets/dressage.jpg',
    caption:
      'Durch Dressur lernt das Pferd, das Reitergewicht rückenschonend zu tragen.',
    imageClass: 'big',
  },

  {
    picture: '../assets/foal_field.jpg',
    caption: 'Fohlen schlafen viel.',
    imageClass: 'horizontal',
  },

  {
    picture: '../assets/friesian_horse.jpg',
    caption: 'Der Friese ist eine der ältesten Rassen Europas.',
    imageClass: 'horizontal',
  },

  {
    picture: '../assets/haflinger.jpg',
    caption: 'Haflinger sind sehr freundliche Pferde.',
    imageClass: 'vertical',
  },

  {
    picture: '../assets/horse_and_child.jpg',
    caption: 'Die meisten Pferde sind kinderfreundlich.',
    imageClass: 'big',
  },

  {
    picture: '../assets/horse_eye.jpg',
    caption: 'Pferde haben beinahe Rundumsicht.',
    imageClass: 'vertical',
  },

  {
    picture: '../assets/horse_jumping.jpg',
    caption: 'Exzessives Springreiten belastet die Beine.',
    imageClass: 'horizontal',
  },

  {
    picture: '../assets/horse_longe.jpg',
    caption: 'Longenarbeit hilft bei der Gymnastizierung.',
    imageClass: 'horizontal',
  },

  {
    picture: '../assets/horse_mouth.jpg',
    caption: 'Pferde haben ein sensibles Maul.',
    imageClass: 'vertical',
  },

  {
    picture: '../assets/horses_field_morning.jpg',
    caption: 'Pferde sollten so viel wie möglich draußen sein.',
    imageClass: 'horizontal',
  },

  {
    picture: '../assets/horses_group.jpg',
    caption: 'In der Gruppe fühlen Pferde sich sicher.',
    imageClass: 'horizontal',
  },

  {
    picture: '../assets/islandic_horses_group.jpg',
    caption: 'Auf Island leben Pferde beinahe wild.',
    imageClass: 'horizontal',
  },

  {
    picture: '../assets/islandic_horses_snow.jpg',
    caption: 'Kälte macht Isländern nichts aus.',
    imageClass: 'horizontal',
  },

  {
    picture: '../assets/quarter_horse_ridden.jpg',
    caption: 'Quarter Horses wurden für die Arbeit mit Rindern gezüchtet.',
    imageClass: 'vertical',
  },

  {
    picture: '../assets/racing_horse.jpg',
    caption: 'Vollblüter wurden auf Schnelligkeit gezüchtet.',
    imageClass: 'vertical',
  },

  {
    picture: '../assets/rolling_horse.jpg',
    caption: 'Das Wälzen ist wichtig für die Fellpflege.',
    imageClass: 'big',
  },

  {
    picture: '../assets/islandic_horse.jpg',
    caption: 'Isländer sind eine beliebte Rasse.',
    imageClass: 'vertical',
  },

  {
    picture: '../assets/shetland-ponies.jpg',
    caption: 'Shetlandponys werden oft unterschätzt.',
    imageClass: 'horizontal',
  },

  {
    picture: '../assets/shire_horse.jpg',
    caption: 'Shire Horses sind die größten Pferde.',
    imageClass: 'vertical',
  },

  {
    picture: '../assets/horse_shower.jpg',
    caption: 'Viele Pferde genießen eine Dusche an heißen Tagen.',
    imageClass: 'vertical',
  },

  {
    picture: '../assets/three_horses.jpg',
    caption: 'Pferde sind gesellige Tiere.',
    imageClass: 'horizontal',
  },

  {
    picture: '../assets/wild_horses_wyoming.jpg',
    caption: 'Wilde Mustangs in Wyoming.',
    imageClass: 'vertical',
  },

  {
    picture: '../assets/connemara_ireland.jpg',
    caption: 'Connemaras sind beliebte Pferde aus Irland.',
    imageClass: 'vertical',
  },

  {
    picture: '../assets/pony_flehmen_response.jpg',
    caption: 'Beim Flehmen nimmt das Pferd Geruchs&shystoffe wahr.',
    imageClass: 'vertical',
  },

  {
    picture: '../assets/open_stable.jpg',
    caption: 'Eine geteilte Stalltür sorgt für frische Luft und Abwechslung.',
    imageClass: 'vertical',
  },

  {
    picture: '../assets/horse_in_box.jpg',
    caption: 'Reine Boxenhaltung fördert Verhaltens&shystörungen.',
    imageClass: 'vertical',
  },

  {
    picture: '../assets/ponies_open_stable.jpg',
    caption: 'Diese Ponys haben freie Wahl zwischen Stall und Auslauf.',
    imageClass: 'vertical',
  },

  {
    picture: '../assets/horse_mane.jpg',
    caption: 'Das Langhaar dient als Schutz.',
    imageClass: 'small',
  },
];

/* renders photos from array into the browser */
function renderMyPictures() {
  let gallerySection = document.getElementById('gallery');
  gallerySection.innerHTML = '';

  for (let i = 0; i < myPictures.length; i++) {
    let picture = myPictures[i];
    gallerySection.innerHTML += generateGalleryHTML(picture, i);
  }
}

function generateGalleryHTML(picture, i) {
 /* generates HTML code to display photos in the browser
  adds different classes to the figure element an an onclick function
  openImage(i) */
  return /* html */ `
    <figure class=${picture.imageClass} onclick="openImage(${i})">
      <img src="${picture.picture}" alt="">
  </figure>
  `;
}

/* defines the function openImage(i)
on clicking on a photo a detailed view is shown */
function openImage(i) {
  let dialogBox = document.getElementById('dialog-bg');
  let picture = myPictures[i];

  dialogBox.innerHTML = generatePhotoBoxHTML(i, picture);
  dialogBox.classList.remove('d-none');
}

/* generates HTML Code to display a detailed view of a picture
returns the value of this code to the function openImage(i) */
function generatePhotoBoxHTML(i, picture) {
  return /*html*/ `
  <div id="photo-box" class="photo-box"> 
      <figure>
      <img src="${picture.picture}" alt="" />
      <figcaption>${picture.caption}</figcaption>
      </figure>
          <div onclick="closeImage()" class="close-button">
            <img src="../assets/x-close.png" alt="" />
          </div>
          <div class="arrows">
            <img onclick="showPreviousPicture(${i})" src="../assets/arrow-left.svg" alt="" width="48" />
            <img onclick="showNextPicture(${i})" src="../assets/arrow-right.svg" alt="" width="48" />
          </div>
    </div>
  `;
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
