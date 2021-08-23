var button1 = document.getElementById('share_button1'),
button2 = document.getElementById('share_button2');

var profile_card = document.getElementById('card1'),
share_card = document.getElementById('card2');

var text = document.getElementById('text1');

button1.addEventListener('click', event => {
    if (screen.width < 1000){
        profile_card.style.display = 'none';
        text.style.paddingBottom = '0px';
        share_card.style.display = 'grid';
    }
    else{
        if (share_card.style.display != 'grid')
            share_card.style.display = 'grid';
        else
            share_card.style.display = 'none';
    }
});

if (screen.width < 1000){
    button2.addEventListener('click', event => {
        profile_card.style.display = 'grid';
        share_card.style.display = 'none';
        text.style.paddingBottom = '';
    });
}