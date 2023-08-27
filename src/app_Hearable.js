/*window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var imageblack = document.querySelector('.black');
    var imageblue = document.querySelector('.blue');
    var imagered = document.querySelector('.red');
    if (scrollTop > 10560 && scrollTop <= 11060) {
      imageblack.style.position = 'absolute';
      imageblue.style.position = 'fixed';
      imagered.style.position = 'absolute';
      imageblack.classList.remove('visible');
      imageblue.classList.add('visible');
      imagered.classList.remove('visible');
      imageblue.style.transform = 'scale(' + (1 + (scrollTop - 10250) * 0.0004) + ')';
    } else if (scrollTop > 11060 && scrollTop <= 11560) {
      imageblack.style.position = 'absolute';
      imageblue.style.position = 'absolute';
      imagered.style.position = 'fixed';
      imageblack.classList.remove('visible');
      imageblue.classList.remove('visible');
      imagered.classList.add('visible');
      imagered.style.transform = 'scale(' + (1 + (scrollTop - 10750) * 0.0004) + ')';
    } else if (scrollTop >9960 && scrollTop <= 10560) {
      imageblack.style.position = 'fixed';
      imageblue.style.position = 'absolute';
      imagered.style.position = 'absolute';
      imageblack.classList.add('visible');
      imageblue.classList.remove('visible');
      imagered.classList.remove('visible');
      imageblack.style.transform = 'scale(' + (1 + (scrollTop - 9750) * 0.0004) + ')';
    } else {
      imageblack.style.position = 'absolute';
      imageblue.style.position = 'absolute';
      imagered.style.position = 'absolute';
      imageblack.classList.remove('visible');
      imageblue.classList.remove('visible');
      imagered.classList.remove('visible');
    }
  });*/


// Funktion, die beim Scrollen aufgerufen wird
function handleScroll() {
  // Ermittle den aktuellen Scroll-Offset
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  // Überprüfe den Scroll-Offset und rufe die entsprechende Funktion auf
  switch (true) {
    case (scrollTop > 10560 && scrollTop <= 11060):
      showBlue(scrollTop);
      break;
    case (scrollTop > 11060 && scrollTop <= 11560):
      showRed(scrollTop);
      break;
    case (scrollTop > 9960 && scrollTop <= 10560):
      showBlack(scrollTop);
      break;
    default:
      hideAll();
      break;
  }
}

// Funktion, die das blue-Bild anzeigt, wenn der Scroll-Offset im definierten Bereich liegt
function showBlue(scrollTop) {
  // Hole das blue-Bild
  var imageblue = document.querySelector('.blue');
  // Setze die Position auf fixed und füge die sichtbare Klasse hinzu
  imageblue.style.position = 'fixed';
  imageblue.classList.add('visible');
  // Füge die Transformationswerte hinzu
  imageblue.style.transform = 'scale(' + (1 + (scrollTop - 10250) * 0.0004) + ')';
  // Verstecke die anderen Bilder
  hideOtherImages('.blue');
}

// Funktion, die das red-Bild anzeigt, wenn der Scroll-Offset im definierten Bereich liegt
function showRed(scrollTop) {
  // Hole das red-Bild
  var imagered = document.querySelector('.red');
  // Setze die Position auf fixed und füge die sichtbare Klasse hinzu
  imagered.style.position = 'fixed';
  imagered.classList.add('visible');
  // Füge die Transformationswerte hinzu
  imagered.style.transform = 'scale(' + (1 + (scrollTop - 10750) * 0.0004) + ')';
  // Verstecke die anderen Bilder
  hideOtherImages('.red');
}

// Funktion, die das black-Bild anzeigt, wenn der Scroll-Offset im definierten Bereich liegt
function showBlack(scrollTop) {
  // Hole das black-Bild
  var imageblack = document.querySelector('.black');
  // Setze die Position auf fixed und füge die sichtbare Klasse hinzu
  imageblack.style.position = 'fixed';
  imageblack.classList.add('visible');
  // Füge die Transformationswerte hinzu
  imageblack.style.transform = 'scale(' + (1 + (scrollTop - 9750) * 0.0004) + ')';
  // Verstecke die anderen Bilder
  hideOtherImages('.black');
}


function hideOtherImages(currentClass) {
  var images = document.querySelectorAll('.black, .blue, .red');
  images.forEach(function (image) {
    if (!image.classList.contains(currentClass.slice(1))) {
      image.classList.remove('visible');
      image.style.position = 'absolute';
    }
  });
}

function hideAll() {
  var images = document.querySelectorAll('.black, .blue, .red');
  images.forEach(function (image) {
    image.classList.remove('visible');
    image.style.position = 'absolute';
  });
}


/*
  window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var left1 = document.querySelector('.left1');
    var left2 = document.querySelector('.left2');
    var right1 = document.querySelector('.right1');
    var right2 = document.querySelector('.right2');
  
    if (scrollTop > 10060 && scrollTop <= 10360) {
      left1.classList.remove('invisible');
      left1.style.top = scrollTop * 0.7 - 6542 + 'px'; 
    } else if (scrollTop > 10360) {
      left1.classList.add('invisible');
    } else {
      left1.classList.add('invisible');
    }
    
    if (scrollTop > 10460 && scrollTop <= 10760){
      right1.classList.remove('invisible');
      right1.style.top = scrollTop * 0.7 - 6672 + 'px';
    } else if (scrollTop > 10760) {
      right1.classList.add('invisible');
    } else {
      right1.classList.add('invisible');
    }
  
    if (scrollTop > 10860 && scrollTop <= 11160) {
      left2.classList.remove('invisible');
      left2.style.top = scrollTop * 0.7 - 6172 + 'px'; 
    } else if (scrollTop > 11160) {
      left2.classList.add('invisible');
    } else {
      left2.classList.add('invisible');
    }
  
    if (scrollTop > 11260 && scrollTop <= 11560) {
      right2.classList.remove('invisible');
      right2.style.top = scrollTop * 0.7 - 6382 + 'px'; 
    } else if (scrollTop > 11560) {
      right2.classList.add('invisible');
    } else {
      right2.classList.add('invisible');
    }
  });*/


// Define a function to update the elements based on the scroll offset
function updateElements(scrollTop, element, start, end, offset) {
  if (scrollTop > start && scrollTop <= end) {
    element.classList.remove('invisible');
    element.style.top = scrollTop * 0.7 + offset + 'px';
  } else if (scrollTop > end) {
    element.classList.add('invisible');
  } else {
    element.classList.add('invisible');
  }
}


// Füge Scroll-Event-Listener hinzu für Hearable-Downslide
window.addEventListener('scroll', handleScroll);


// Add event listener for scroll event to Hearable-Text-Downslide
window.addEventListener('scroll', function () {
  // Get the current scroll offset
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  // Select the elements
  var left1 = document.querySelector('.left1');
  var left2 = document.querySelector('.left2');
  var right1 = document.querySelector('.right1');
  var right2 = document.querySelector('.right2');
  // Call the function to update the elements
  updateElements(scrollTop, left1, 10060, 10360, -6542);
  updateElements(scrollTop, right1, 10460, 10760, -6672);
  updateElements(scrollTop, left2, 10860, 11160, -6172);
  updateElements(scrollTop, right2, 11260, 11560, -6382);
});

