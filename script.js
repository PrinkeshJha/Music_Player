const audioPlayer = document.getElementById("audioPlayer");
const ppb = document.getElementById("ppb");
const coverimg = document.getElementById("cover-img");
var seekBar = document.getElementById('seekBar');


let currentSongIndex = 0;
const playlist = [
    { title: "Sometimes", src: "Audio/Sometimes.mp3", coverpg: "IMG/Sometimes wallpaper.jpeg" },
    { title: "MC Insane - Meet Me", src: "Audio/MC Insane ft Song.mp3", coverpg: "IMG/Meet me wallpaper.jpeg" },
    { title: "If it's for You", src: "Audio/If it is for you Song.mp3", coverpg: "IMG/If it's for You wallpaper.jpeg" },
    { title: "Tu hai kahan", src: "Audio/Tu Hai Kahan - Song.mp3", coverpg: "IMG/Tu Hai Kahan wallpaper.jpeg" },
    { title: "Maan Meri Jaan", src: "Audio/Maan Meri Jaan(PagalWorld.com.pe).mp3", coverpg: "IMG/Maan Meri Jaan Wallpaper.jpeg" },
    { title: "MC Insane - NAZAR", src: "Audio/NAZAR - MC Insane Song.mp3", coverpg: "IMG/Nazar wallpaper.jpeg" },
    { title: "Sahiba", src: "Audio/Sahiba Song.mp3", coverpg: "IMG/Sahiba wallpaper.jpeg" },
    { title: "Ram Siya Ram", src: "Audio/_Ram Siya Ram(PagalWorld.com.pe).mp3", coverpg: "IMG/Ram Siya Ram wallpaper.jpeg" },
    // Add more songs to the playlist as needed
];



function seekSong() {

    // Calculate the new playback position based on the seek bar value
    var newPosition = seekBar.value * audioPlayer.duration / 100;

    // Set the new playback position
    current.currentTime = newPosition;
}

function playNext() {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    playCurrentSong();
}


function playCurrentSong() {
    audioPlayer.src = playlist[currentSongIndex].src;
    audioPlayer.play();
    updateSongDetails();
    updateimg();
    if (ppb.classList.contains('ri-play-mini-fill')) {
        ppb.classList.remove('ri-play-mini-fill');
        ppb.classList.add('ri-pause-mini-fill');
    }
}


function updateSongDetails() {
    const songTitle = document.querySelector(".song-title");
    songTitle.textContent = playlist[currentSongIndex].title;
}


function updateimg() {
    coverimg.src = playlist[currentSongIndex].coverpg;
}



document.addEventListener("DOMContentLoaded", function () {

    const audioPlayer = document.getElementById("audioPlayer");
    const playPauseBtn = document.getElementById("playPauseBtn");
    const ppb = document.getElementById("ppb");
    const volumeBtn = document.getElementById("volumeBtn");
    const vb = document.getElementById("vb");
    const volumeSlider = document.getElementById("volumeSlider");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const coverimg = document.getElementById("cover-img");
    const durationDisplay = document.getElementById("duration");
    const currentTimeDisplay = document.getElementById("currentTime");
    // const progressbar = document.getElementById("progress_bar");
    const repeatBtn = document.getElementById("repeatBtn");
    const rb = document.getElementById("rb");
    var seekBar = document.getElementById('seekBar');


    audioPlayer.loop = false;
    audioPlayer.volume = volumeSlider.value / 100;
    console.log(playPauseBtn);

    // let currentSongIndex = 0;
    // const playlist = [
    //     { title: "Somtimes", src: "Audio/Sometimes.mp3", coverpg: "" },
    //     { title: "MC Insane - Meet Me", src: "Audio/MC Insane ft Song.mp3", coverpg: "IMG/Meet me wallpaper.jpeg" },
    //     { title: "If it's for You", src: "Audio/If it is for you Song.mp3", coverpg: "IMG/If it's for You wallpaper.jpeg" },
    //     { title: "Tu hai kahan", src: "Audio/Tu Hai Kahan - Song.mp3", coverpg: "IMG/Tu Hai Kahan wallpaper.jpeg" },
    //     { title: "Maan Meri Jaan", src: "Audio/Maan Meri Jaan(PagalWorld.com.pe).mp3", coverpg: "IMG/Maan Meri Jaan Wallpaper.jpeg" },
    //     { title: "MC Insane - NAZAR", src: "Audio/NAZAR - MC Insane Song.mp3", coverpg: "IMG/Nazar wallpaper.jpeg" },
    //     { title: "Sahiba", src: "Audio/Sahiba Song.mp3", coverpg: "IMG/Sahiba wallpaper.jpeg" },
    //     { title: "Ram Siya Ram", src: "Audio/_Ram Siya Ram(PagalWorld.com.pe).mp3", coverpg: "IMG/Ram Siya Ram wallpaper.jpeg" },
    //     // Add more songs to the playlist as needed
    // ];



    playPauseBtn.addEventListener("click", togglePlayPause);
    volumeBtn.addEventListener("click", toggleMute);
    volumeSlider.addEventListener("input", setVolume);
    prevBtn.addEventListener("click", playPrevious);
    nextBtn.addEventListener("click", playNext);
    audioPlayer.addEventListener("loadedmetadata", setDuration);
    audioPlayer.addEventListener("timeupdate", updateSeekBar);
    seekBar.addEventListener("input", seek);
    repeatBtn.addEventListener("click", toggleRepeat);





    function toggleRepeat() {
        if (rb.classList.contains("ri-repeat-2-line")) {
            rb.classList.remove("ri-repeat-2-line");
            rb.classList.add("ri-repeat-one-line");
            // Enter in Loop
            audioPlayer.loop = true;
        }
        else {
            rb.classList.remove("ri-repeat-one-line");
            rb.classList.add("ri-repeat-2-line");
            audioPlayer.loop = false;
        }
    }

    function seek() {
        // const seekTime = (progressbar.value / 100) * audioPlayer.duration;
        // audioPlayer.currentTime = seekTime;
        // console, log(seek);
        // console, log(seekTime);
        var newPosition = seekBar.value * current.duration / 100;

        // Set the new playback position
        current.currentTime = newPosition;
    }


    function updateSeekBar() {
        seekBar.value = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        currentTimeDisplay.textContent = formatTime(audioPlayer.currentTime);
    }


    function setDuration() {
        durationDisplay.textContent = formatTime(audioPlayer.duration);
    }


    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        const formattedTime = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
        return formattedTime;
    }


    function togglePlayPause() {
        if (audioPlayer.paused) {
            audioPlayer.play();
            ppb.classList.remove("ri-play-mini-fill");
            ppb.classList.add("ri-pause-mini-fill");
        }
        else {
            audioPlayer.pause();
            ppb.classList.remove("ri-pause-mini-fill");
            ppb.classList.add("ri-play-mini-fill");
        }
    }


    function toggleMute() {
        if (audioPlayer.muted) {
            audioPlayer.muted = false;
            vb.classList.remove("ri-volume-mute-fill");
            vb.classList.add("ri-volume-up-fill");
        }
        else {
            audioPlayer.muted = true;
            vb.classList.remove("ri-volume-up-fill");
            vb.classList.add("ri-volume-mute-fill");
        }
    }


    function setVolume() {
        audioPlayer.volume = volumeSlider.value / 100;
    }


    function playPrevious() {
        currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
        playCurrentSong();
    }


    function playNext() {
        currentSongIndex = (currentSongIndex + 1) % playlist.length;
        playCurrentSong();
    }


    function playCurrentSong() {
        audioPlayer.src = playlist[currentSongIndex].src;
        audioPlayer.play();
        updateSongDetails();
        updateimg();
        if (ppb.classList.contains('ri-play-mini-fill')) {
            ppb.classList.remove('ri-play-mini-fill');
            ppb.classList.add('ri-pause-mini-fill');
        }
    }


    function updateSongDetails() {
        const songTitle = document.querySelector(".song-title");
        songTitle.textContent = playlist[currentSongIndex].title;
    }


    function updateimg() {
        coverimg.src = playlist[currentSongIndex].coverpg;
    }

});
