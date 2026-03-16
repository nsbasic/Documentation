'June 6, 2015
'Contributed by Adrian Nicolaiev
'Website http://www.tobem.com
'LinkedIn https://www.linkedin.com/in/nicolaiev

'"jPlayer is the completely free and open source (MIT) media library written in JavaScript. 
'A jQuery plugin, jPlayer allows you to rapidly weave cross platform audio and video into your web pages."

'At http://www.tobem.com/jPlayer you can see a RTMP (Flash Live Streaming) And a M3U8 (HLS HTTP Live Streaming) example.
'A NSBasic "Container" was used To host jPlayer DIV. "Container" is really a very powerful recent feature in AppStudio.

'Source code: http://pastebin.com/f1e6jddP

'So, now you can make Video (NBA Livestream !!) And Audio (BBC Radio Livestream !!) Streaming using AppStudio. 
'It will work On Web, Android, iOS, etc.

'Media Support:
'HTML5: mp3, mp4 (AAC/H.264), ogg (Vorbis/Theora), webm (Vorbis/VP8), wav
'Flash: mp3, mp4 (AAC/H.264), rtmp, flv

'Some more info:
'HLS http://en.wikipedia.org/wiki/HTTP_Live_Streaming
'RTMP http://en.wikipedia.org/wiki/Real_Time_Messaging_Protocol
'jPlayer http://www.jplayer.org/
'NBR http://conteudo.ebcservicos.com.br/streaming/nbr

Function PlayButton_onclick()
  jPlayerContainer.jPlayer("play")
  StopButton.disabled = False
End Function

Function StopButton_onclick()
  jPlayerContainer.jPlayer("stop")
  StopButton.disabled = True
End Function

Function LoadButton_onclick()
  JavaScript
    jPlayerContainer = $("#jPlayerContainer").jPlayer({
        ready: function(event) {
            $(this).jPlayer("setMedia", {
                      title: "NBR",
                      rtmpv: "rtmp://ebcremuxlivefs.fplive.net/ebcremuxlive-ebctvnbr/stream1.flv",
                      m3u8v: "http://ebcremuxlive-live.hls.adaptive.level3.net/manifests/ebcremuxlive-ebctvnbr/live.m3u8",
                      poster: "http://conteudo.ebcservicos.com.br/streaming/images/logo-nbr-nova.png"
            });
        },
        swfPath: "http://www.jplayer.org/latest/dist/jplayer",
        supplied: "rtmpv,m3u8v",
        solution: "html,flash",
        preload: "auto",
        nativeVideoControls: {
           apple: /(ipad|iphone|ipod)/
           },
        wmode: "window",
        size: {
                 width: "300px",
                 height: "220px"
              },
    });                                     
  End JavaScript  
  
  PlayButton.disabled = False
  LoadButton.disabled = True
  
End Function


