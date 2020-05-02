$('.carousel').carousel({
    interval: 1000
})

AOS.init();


$('.number').counterUp({
    delay: 10,
    time: 2000
});

function func() {
    alert('test');
    let demo = new CountUp('num', 94.62);
    if (!demo.error) {
        demo.start();
    } else {
        console.error(demo.error);
    }
}