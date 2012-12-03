$(document).ready(function(){
    var i = 0;
    var videos = [{weight:2, sources:['assets/meow.webm', 'assets/meow.m4v']},{weight:10, sources:['assets/Loop.webm', 'assets/Loop.m4v']},{weight:1, sources:['assets/Keyboard_Cat_Redux.webm']}];
    $('video').on('dblclick', function(event){
        if (this.paused == false) {
            this.pause();
        } else {
            this.play();
        }
    });
    $('.danceParty').on('click', '.praful', function(event) {
        event.preventDefault();
        $(this).remove();
    });
    $('html').on('click', function(event) {
        if (!$(event.target).is('.praful')) {
            $('.danceParty').append($('<img>').addClass('praful').attr('src', 'http://praful.danomoseley.com/ThePraful-Remix3.gif'));
        }
    });
    playlist = [];
    $.each(videos, function(k, video) {
        for (var i=0; i<video.weight; i++) {
            playlist.push(video.sources);
        }
    });
    $('video').on('ended', function(){
        ++i;
        var random = Math.floor(Math.random() * playlist.length);
        $('video source').remove();
        var video = playlist[random];
        $.each(video, function(i, source) {
        $('video').append(
            $("<source>").attr('type','video/'+source.split('.').pop()).attr('src',source)); 
        });
        $('video')[0].load();
        current = video;
    });
});
