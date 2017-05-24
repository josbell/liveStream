 'use strict';
 app.controller('liveStreamController',
 	['$sce', function( $sce){
 		console.log('inside controller');
 		this.config = {
 			preload: "none",
	 		sources: [
				{src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.mp4"), type: "video/mp4"},
				{src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.webm"), type: "video/webm"},
				{src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.ogg"), type: "video/ogg"}
			],
			tracks: [
				{
					src: "http://www.videogular.com/assets/subs/pale-blue-dot.vtt",
					kind: "subtitles",
					srclang: "en",
					label: "English",
					default: ""
				}
			],
			theme: "http://www.videogular.com/styles/themes/default/latest/videogular.css",
			plugins: {
				poster: "http://www.videogular.com/assets/images/videogular.png",
				controls:{
					autoHide:true,
					autoHideTime:5000,
					playbackSpeeds:['0.5', '1', '1.5', '2'],
					cuePoints:['10','15','20','35']
				}
			},
			
		};
 	}
 ])