var songs = [];
songs[songs.length] = "A !Light That Never Goes Out > by The Smiths on the album The Queen is Dead";
songs[songs.length] = "Man in The Mirror > by Mich@ael Jackson on the album Bad";
songs[songs.length] = "Tequilla Sun@rise > by The Eagles on the album Desperado";
songs[songs.length] = "Wake up Dead > by Mega!deth on the album Peace Sells...but Who's Buying?";
songs[songs.length] = "Blackened > by Metallica on the al$bum And Justice For All";
console.log(songs.length);
var song1=document.getElementById('music');
var song2=document.getElementById('music1');
var song3=document.getElementById('music2');
var song4=document.getElementById('music3');
var song5=document.getElementById('music4');
for (var i=0; i<songs.length; i++){
	songs[i]= songs[i].replace(/[!@?$]/gi, "");
	songs[i]= songs[i].replace(/> /gi, ' - ');
}
song1.innerHTML= songs[0];
song2.innerHTML= songs[1];
song3.innerHTML= songs[2];
song4.innerHTML= songs[3];
song5.innerHTML= songs[4];
console.log(songs);



/*
for (var i=0; i< 4; i++){
	if(i ===0 ){
		songs.push("A Light That Never Goes Out");
		document.getElementById('smithSong').innerHTML=songs;
	}
	if(i ===1){
		songs.push("by: The Smiths |");
		document.getElementById('smithBand').innerHTML=songs[1];
	}
	if(i===2){
		songs.push('on the album "The Queen is Dead" |');
		document.getElementById('smithAlbum').innerHTML=songs[2];
	}
	if(i===3){
		songs.push(' Alternative Rock');
		document.getElementById('smithGenre').innerHTML=songs[3];
	}
}
for (var i=0; i< 4; i++){
	if(i ===0 ){
		metallicaSongs.push("Blackened");
		document.getElementById('metalSong').innerHTML=metallicaSongs;
	}
	if(i ===1){
		metallicaSongs.push("by: Metallica |");
		document.getElementById('metalBand').innerHTML=metallicaSongs[1];
	}
	if(i===2){
		metallicaSongs.push('on "And Justic For All" |');
		document.getElementById('metalAlbum').innerHTML=metallicaSongs[2];
	}
	if(i===3){
		metallicaSongs.push(' Metal');
		document.getElementById('metalGenre').innerHTML=metallicaSongs[3];
	}
}
for (var i=0; i< 4; i++){
	if(i ===0 ){
		megadethSongs.push("Wake Up Dead");
		document.getElementById('megaSong').innerHTML=megadethSongs;
	}
	if(i ===1){
		megadethSongs.push("by: Megadeth |");
		document.getElementById('megaBand').innerHTML=megadethSongs[1];
	}
	if(i===2){
		megadethSongs.push("on 'Peace Sells...but Who's Buying?' |");
		document.getElementById('megaAlbum').innerHTML=megadethSongs[2];
	}
	if(i===3){
		megadethSongs.push(' Metal/Thrash');
		document.getEleme			 ntById('megaGenre').innerHTML=megadethSongs[3];
	}
}
for (var i=0; i< 4; i++){
	if(i ===0 ){
		mjSongs.push("Man In The Mirror");
		document.getElementById('mjSong').innerHTML=mjSongs;
	}
	if(i ===1){
		mjSongs.push("by: Michael Jackson |");
		document.getElementById('mjArtist').innerHTML=mjSongs[1];
	}
	if(i===2){
		mjSongs.push('on "Bad" |');
		document.getElementById('mjAlbum').innerHTML=mjSongs[2];
	}
	if(i===3){
		mjSongs.push(' Pop');
		document.getElementById('mjGenre').innerHTML=mjSongs[3];
	}
}
for (var i=0; i< 4; i++){
	if(i ===0 ){
		eaglesSongs.push("Tequila Sunrise");
		document.getElementById('eagleSong').innerHTML=eaglesSongs;
	}
	if(i ===1){
		eaglesSongs.push("by: The Eagles |");
		document.getElementById('eagleBand').innerHTML=eaglesSongs[1];
	}
	if(i===2){
		eaglesSongs.push('on "Desperado" |');
		document.getElementById('eagleAlbum').innerHTML=eaglesSongs[2];
	}
	if(i===3){
		eaglesSongs.push(' Folk/Rock');
		document.getElementById('eagleGenre').innerHTML=eaglesSongs[3];
	}
}
console.log(songs);
console.log(metallicaSongs);
console.log(megadethSongs);
console.log(mjSongs);
console.log(eaglesSongs);
*/