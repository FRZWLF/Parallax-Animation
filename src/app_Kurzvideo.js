var currentopacity = 0;
var lastscroll = 0;

// Function to show text_kurzvideo1
function showTextShortvideo1(text_shortvideo1, scrollTop) {
  text_shortvideo1.classList.remove('invisible');
  text_shortvideo1.style.top = scrollTop * 0.9 - 10970 + 'px';
}
// Function to hide text_kurzvideo1
function hideTextShortvideo1(text_shortvideo1) {
  text_shortvideo1.classList.add('invisible');
}
// Function to show text_kurzvideo2
function showTextShortvideo2(text_shortvideo2, scrollTop) {
  text_shortvideo2.classList.remove('invisible');
  text_shortvideo2.style.top = scrollTop * 0.9 - 11010 + 'px';
}
// Function to hide text_kurzvideo2
function hideTextShortvideo2(text_shortvideo2) {
  text_shortvideo2.classList.add('invisible');
}
// Function to show text_kurzvideo3
function showTextShortvideo3(text_shortvideo3, scrollTop) {
  text_shortvideo3.classList.remove('invisible');
  text_shortvideo3.style.top = scrollTop * 0.9 - 10790 + 'px';
}
// Function to hide text_kurzvideo3
function hideTextShortvideo3(text_shortvideo3) {
  text_shortvideo3.classList.add('invisible');
}
// Function to show Überschrift
function showHeadline(headline, scrollTop) {
  headline.style.top = scrollTop * 1.25 - 16037.5 + 'px'; //neu berechnen, kaum Bewegung sichtbar machen
  headline.classList.remove('invisible');
}
// Function to hide Überschrift
function hideHeadline(headline) {
  headline.style.top = '6143px';
  headline.classList.add('invisible');
}
// Function to show video
function showVideo(video, scrolldirection) {
  if (scrolldirection === 'down') {
    currentopacity += 0.1;
  } else {
    currentopacity -= 0.1;
  }
  video[0].style.position = 'fixed';
  video[0].style.top = '0';
  video[0].style.opacity = currentopacity;
}
// Function to hide video
function hideVideo(video) {
  video[0].style.position = 'relative';
  video[0].style.top = '2870px';
}


//Event Listener for scrolling
window.addEventListener('scroll', function () {
  var scrolldirection;
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var video = document.querySelectorAll('.kurzvideo video.fixate'); //SelectorAll, da sonst nicht mehr funktioniert
  var headline = document.querySelector('.überschrift-kurzvideo');
  var text_shortvideo1 = document.querySelector('.text-kurzvideo1');
  var text_shortvideo2 = document.querySelector('.text-kurzvideo2');
  var text_shortvideo3 = document.querySelector('.text-kurzvideo3');
  // Check the current scroll direction
  if (scrollTop > lastscroll) {
    scrolldirection = 'down';
  } else {
    scrolldirection = 'up';
  }
  // Save the current scroll position for the next scroll event
  lastscroll = scrollTop;
  // Show or hide text_kurzvideo1 depending on the current scroll position
  if (scrollTop > 14300 && scrollTop <= 14800) {
    showTextShortvideo1(text_shortvideo1, scrollTop);
  } else {
    hideTextShortvideo1(text_shortvideo1);
  }
  // Show or hide text_kurzvideo2 depending on the current scroll position
  if (scrollTop > 14900 && scrollTop <= 15400) {
    showTextShortvideo2(text_shortvideo2, scrollTop);
  } else {
    hideTextShortvideo2(text_shortvideo2);
  }
  // Show or hide text_kurzvideo3 depending on the current scroll position
  if (scrollTop > 15400 && scrollTop <= 15900) {
    showTextShortvideo3(text_shortvideo3, scrollTop);
  } else {
    hideTextShortvideo3(text_shortvideo3);
  }
  // Show or hide überschrift depending on the current scroll position
  if (scrollTop > 13070 && scrollTop <= 14200) {
    showHeadline(headline, scrollTop);
  } else {
    hideHeadline(headline);
  }
  // Show or hide video depending on the current scroll position
  if (scrollTop > 13070 && scrollTop <= 16000) {
    showVideo(video, scrolldirection);
  } else {
    hideVideo(video);
  }
});