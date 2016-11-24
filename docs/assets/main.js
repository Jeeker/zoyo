var basesite = 'http://static.afvisual.com/zoyo/';
var backgrounds = [
    { src: get_res('media/1.jpg'), valign: 'top' },
    {   src: get_res('media/5.jpg'),
        video: { 
        src: [
            get_res('media/5.hd.mp4'), 
            get_res('media/5.sd.webm'),
            get_res('media/5.ogv')
            ],
            loop: false 
        },
        delay: 6000
    },
    { src: get_res('media/2.jpg'), valign: 'top' },
    { src: get_res('media/3.jpg'), valign: 'top' }
];

function get_res(res) {
    return basesite + res;
}

$('body').vegas({
    preload: true,
    overlay: 'assets/vegas/overlays/06.png',
    delay: 8000,
    slides: backgrounds,
    transitionDuration: 4000,
    // animation: 'random',
    // animationDuration: 5000
});