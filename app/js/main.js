AFRAME.registerComponent('main', {
    schema: {},
    init: function () {
        console.log('init');
    },
    update: function () {
        console.log('update init');
    },
    remove: function () {
        console.log('remove');
    },
    pause: function () {
        console.log('pause');
    },
    play: function () {
        console.log('play');
    }
});