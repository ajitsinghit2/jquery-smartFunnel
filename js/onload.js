$(document).ready(function() {
    $('.smartfunnel').smartFunnel({
        dataSource: 'data.json',
        animation: {
            effect: 'slide',
            options: {
                direction: 'left'
            },
            duration: 500
        },
        animationOdd: {
            effect: 'slide',
            options: {
                direction: 'right'
            },
            duration: 500
        }
    });
});