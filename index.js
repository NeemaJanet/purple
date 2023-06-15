
const faq=document.querySelector('.faq');
faq.style.color='black'
faq.style.backgroundColor="black";
window.onscroll=function(event){
    let scroll=window.pageYOffset;
    if (scroll >= 600 && scroll < 1200) {
        faq.style.color='#26104E'
        faq.style.backgroundColor = '#D5C9E9';
    } else if (scroll >= 1300 && scroll < 1800) {
        faq.style.color='rgb(50, 51, 51)'
        faq.style.backgroundColor = '#ffffff';
    } else if (scroll >= 1800 && scroll < 3000) {
        faq.style.color='#ffffff'
        faq.style.backgroundColor = '#936EC7';
    } else {
        
        faq.style.backgroundColor = '#D5C9E9';
    }

}