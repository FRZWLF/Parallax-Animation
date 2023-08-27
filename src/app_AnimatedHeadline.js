//Animated Headline
jQuery(document).ready(function ($) {
	//set animation timing
	var animationDelay = 2500,
		//loading bar effect
		barAnimationDelay = 3800,
		barWaiting = barAnimationDelay - 3000, //3000 is the duration of the transition on the loading bar - set in the scss/css file
		//letters effect
		lettersDelay = 50,
		//type effect
		typeLettersDelay = 150,
		selectionDuration = 500,
		typeAnimationDelay = selectionDuration + 800,
		//clip effect 
		revealDuration = 600,
		revealAnimationDelay = 1500;

		setTimeout(function() {
			initHeadline();
		}, 500);


	function initHeadline() {
		//initialise headline animation
		animateHeadline($('.animation-headline'));
	}
	function animateHeadline($headlines) {
		var duration = animationDelay;
		$headlines.each(function () {
			var headline = $(this);

			//assign to .cd-words-wrapper the width of its longest word
			var words = headline.find('.animation-words-wrapper b'),
				width = 0;
			words.each(function () {
				var wordWidth = $(this).width();
				if (wordWidth > width) width = wordWidth;
			});
			headline.find('.animation-words-wrapper').css('width', width);


			//trigger animation
			setTimeout(function () { hideWord(headline.find('.is-visible').eq(0)) }, duration);
		});
	}
	function hideWord($word) {
		var nextWord = takeNext($word);
		switchWord($word, nextWord);
		setTimeout(function () { hideWord(nextWord) }, animationDelay);

	}



	function takeNext($word) {
		return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
	}

	function takePrev($word) {
		return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
	}

	function switchWord($oldWord, $newWord) {
		$oldWord.removeClass('is-visible').addClass('is-hidden');
		$newWord.removeClass('is-hidden').addClass('is-visible');
	}

});
/*
$(document).ready(function() {
    var animationDelay = 2500;
    var animationWordsWrapper = $('.animation-words-wrapper');
    var animationWords = animationWordsWrapper.children();

    animationWords.eq(0).addClass('is-visible is-typing');

    setInterval(function() {
        var currentWord = animationWordsWrapper.find('.is-visible');
        var nextWord = currentWord.next();

        currentWord.removeClass('is-visible is-typing');
        if (nextWord.length) {
            nextWord.addClass('is-visible is-typing');
        } else {
            animationWords.eq(0).addClass('is-visible is-typing');
        }
    }, animationDelay);
});
*/
