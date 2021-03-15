let b = document.body;
let boombox = document.querySelector('#boombox')
let visualizer = document.querySelectorAll('.visualizer__line')
let a = document.querySelector('#audio')

let son = document.querySelector('#son')
let soff = document.querySelector('#soff')

//Square Front/Top/Back/Left/Right
let sfa = document.querySelectorAll('.square__front')
let sta = document.querySelectorAll('.square__top')
let sba = document.querySelectorAll('.square__back')
let sla = document.querySelectorAll('.square__left')
let sra = document.querySelectorAll('.square__right')
//Circle Left/Right/Top
let ca = document.querySelectorAll('.circle-a')
let cb = document.querySelectorAll('.circle-b')
let cc = document.querySelectorAll('.circle-c')


let spe = document.querySelector('#speaker-t');


let speFunc = () => {
    let speaker = spe.value
    if(speaker == 'square-speaker'){
        document.querySelectorAll('.square-speaker').forEach( f => f.classList.remove('s'))
        document.querySelectorAll('.circle-speaker').forEach( f => f.classList.add('s'))
    }
    else{
        document.querySelectorAll('.square-speaker').forEach( f => f.classList.add('s'))
        document.querySelectorAll('.circle-speaker').forEach( f => f.classList.remove('s'))
    }   
  


}

spe.addEventListener('change', speFunc)

/*******************/
let playAudio = () => {
    a.loop = true;

    if (a.paused) a.play()
    else {
        a.pause();
        a.currentTime = 0;
    }
 
    // Square speaker
    sfa && sfa.forEach( f => f.classList.toggle('sfa') )
    sta && sta.forEach( f => f.classList.toggle('sta') )
    sba && sba.forEach( f => f.classList.toggle('sba') )
    sla && sla.forEach( f => f.classList.toggle('sla') )
    sra && sra.forEach( f => f.classList.toggle('sra') )

    ca && ca.forEach( f => f.classList.toggle('ca-a') )
    cb && cb.forEach( f => f.classList.toggle('ca-a') )
    cc && cc.forEach( f => f.classList.toggle('ca-a') )
    // Circle speaker
    visualizer && visualizer.forEach( f => f.classList.toggle('opt') )
    boombox.classList.toggle('boombox-a')

    // Icon speaker
    son.classList.toggle('s')
    soff.classList.toggle('s')
}

/*******************/
b.addEventListener('click', playAudio)
