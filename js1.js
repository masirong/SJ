 var videos = document.getElementsByTagName('video');  //点击另外一个视频当前会暂停
    for (var i = videos.length - 1; i >= 0; i--) {
        (function(){
            var p = i;
            videos[p].addEventListener('play',function(){
                pauseAll(p);
            })
        })()
    }





