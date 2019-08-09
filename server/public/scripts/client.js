$(document).ready(init);

function init() {
    console.log('Hello!');

    getDemo();
}

function getDemo() {
    $.ajax({
        type: 'GET',
        url: '/demo'
    }).then((response) => {
        console.log(response);
    });
}