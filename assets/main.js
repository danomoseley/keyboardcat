$(document).ready(function(){
    var videos = [{weight:2, sources:['assets/meow.webm', 'assets/meow.m4v']},{weight:10, sources:['assets/Loop.webm', 'assets/Loop.m4v']},{weight:1, sources:['assets/Keyboard_Cat_Redux.webm']}];
	var videoCount = 0;
	var sizes = [{h:100,w:100},
				{h:50,w:100},
				{h:50,w:50},
				{h:50,w:50},
				{h:50,w:33},
				{h:50,w:33},
				{h:33,w:33},
				{h:33,w:33},
				{h:33,w:33},
				{h:33,w:25},
				{h:33,w:25},
				{h:33,w:25}
	];
	
    var playlist = [];
    $.each(videos, function(k, video) {
        for (var i=0; i<video.weight; i++) {
            playlist.push(video.sources);
        }
    });
	
	addVideo();
	
	function addVideo(){
		videoCount+=1
		var video = $('<video autoplay>').append('');
		
		var random = 0; //Math.floor(Math.random() * playlist.length);		
        var sources = playlist[random];
        $.each(sources, function(i, source) {
			video.append(
				$("<source>").attr('type','video/'+source.split('.').pop()).attr('src',source)
			);
		});
        $('body').append(video);
        video.load(); 
		$('video').css('width',sizes[videoCount-1].w+'%')
				  .css('height',sizes[videoCount-1].h+'%');
	}
	
    $('video').on('dblclick', function(event){
        if (this.paused == false) {
            this.pause();
        } else {
            this.play();
        }
    });
    $('body').on('click', '.praful', function(event) {
        event.preventDefault();
        $(this).remove();
    });
    $('html').on('click', function(){
		addVideo();
    });
    /*$('video').on('ended', function(){
        var random = Math.floor(Math.random() * playlist.length);
        $('video source').remove();
        var video = playlist[random];
        $.each(video, function(i, source) {
            $('video').append(
                $("<source>").attr('type','video/'+source.split('.').pop()).attr('src',source)
            ); 
        });
        $('video')[0].load();
        current = video;
    });*/
});
