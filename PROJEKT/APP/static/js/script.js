let corrent = -1
function play() {
    const index = Math.floor(Math.random() * (sounds.length - 1))
    corrent = index
    sounds[index].play()
}
function stop() {
    if (corrent == -1) return
    sounds[corrent].pause()
    sounds[corrent].currentTime = 0
}
window.onload = () => {
    document.getElementById("buddon")?.addEventListener("click", play)
    document.getElementById("buddon2")?.addEventListener("click", stop)
}
