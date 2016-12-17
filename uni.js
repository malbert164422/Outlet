var counter=0



$('#button').click(function(){
	counter=counter+1
     var text= $('textarea').val();
     var box= document.createElement('div');
     var image=document.createElement('img');
     image.src='http://www.clker.com/cliparts/f/n/o/m/6/C/transparent-heart.svg';
     image.id='heart'+counter
     box.innerHTML=text;
     image.className='heart';
     box.className='Seprate';
     $('#box2').append(box);
     $('#box2').append(image);
     $('.heart').click(function(event){
	var heart=event.target.id;
	$('#'+heart).attr('src','http://www.clker.com/cliparts/W/q/D/p/e/7/small-red-heart-with-transparent-background-hi.png');
})
})

(function($) {
	var wordCounter = {
		init: function() {
			this.DOM();
			this.events();
		},
		DOM: function() {
			this.textbox = $("#textCount");
			this.wordCount = $("#wordCount");
			this.charCount = $("#charCount");
		},
		events: function() {
			this.textbox.on("input", this.count.bind(this));
		},
		count: function() {
			var words = this.textbox.val().split(" "),
				chars = this.textbox.val();

			//DELETE EMPTY STRINGS
			for (var i = 0; i < words.length; i++) {
				while (words[i] === "") {
					words.splice(i, 1);
				}
			}
			//COUNT WORDS
			if (words.length === 1) {
				this.wordCount.text(words.length + " word");
			} else {
				this.wordCount.text(words.length + " words");
			}
			//COUNT CHARACTERS
			if (chars.length < 0) {
				words = [];
			} else if (chars.length === 1) {
				this.charCount.text(chars.length + " character");
			} else {
				this.charCount.text(chars.length + " characters");
			}
		}
	}
	wordCounter.init();
}(jQuery));

