const aside = document.querySelector('.aside');
const close1 = document.querySelector('.aside_close');
const hamburger = document.querySelector('.hamburger');
const button_up = document.querySelector('.button_up');

hamburger.addEventListener('click',()=>{
aside.classList.add('active');

});

close1.addEventListener('click',()=>{
    aside.classList.remove('active');
});

window.addEventListener('scroll', ()=>{
let scrolle = window.scrollY;
if(scrolle > 1000){
    button_up.style.display = 'block';
}
else{
    button_up.style.display = 'none';
}
});
// собираем все якоря; устанавливаем время анимации и количество кадров
const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
      animationTime = 1200,
      framesCount = 100;

anchors.forEach(function(item) {
  // каждому якорю присваиваем обработчик события
  item.addEventListener('click', function(e) {
    // убираем стандартное поведение
    e.preventDefault();
    
    // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
    let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.scrollY;
    
    // запускаем интервал, в котором
    let scroller = setInterval(function() {
      // считаем на сколько скроллить за 1 такт
      let scrollBy = coordY / framesCount;
      
      // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
      // и дно страницы не достигнуто
      if(scrollBy > window.scrollY - coordY && window.innerHeight + window.scrollY < document.body.offsetHeight) {
        // то скроллим на к-во пикселей, которое соответствует одному такту
        window.scrollBy(0, scrollBy);
      } else {
        // иначе добираемся до элемента и выходим из интервала
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
    // время интервала равняется частному от времени анимации и к-ва кадров
    }, animationTime / framesCount);

    setTimeout(() => {
        aside.classList.remove('active');
    }, animationTime + 300);
  });
});

// const width = window.innerWidth;
// alert(width);
// const height = window.innerHeight;
// alert(height);
