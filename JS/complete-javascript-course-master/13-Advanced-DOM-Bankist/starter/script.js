'use strict';

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const nav = document.querySelector('.nav');

const check = document.querySelector('.header__title');

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');

//Tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//Button scrolling

btnScrollTo.addEventListener('click', function (e) {
  //To get the coordinates of the element we want to scroll to
  const s1coordinates = section1.getBoundingClientRect();
  // console.log(s1coordinates);
  //Here x and y are with relative to the view ports.

  // console.log(e.target.getBoundingClientRect());
  //x is the horizontal distance betn browser and element
  //Y is the distance from the top

  //Current Scrool position
  // console.log(
  //   'Current Scroll of (X/Y)',
  //   window.pageXOffset,
  //   window.pageYOffset
  // );

  // console.log(
  //   'Height and width of the viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  //Scrolling
  //We add the current scroll position to get the exact postion from the top.
  // window.scrollTo(
  //   s1coordinates.left + window.pageXOffset,
  //   s1coordinates.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coordinates.left + window.pageXOffset,
  //   top: s1coordinates.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  //Modern browsers.

  section1.scrollIntoView({ behavior: 'smooth' });
});

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
/////////   PAGE NAVIGATION  ///////////

//Without event delegation
// document.querySelectorAll('.nav__link').forEach(function(el){
//   el.addEventListener('click', function(e){
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);

//     document.querySelector(id).scrollIntoView({behavior: 'smooth'})
//   });
// });

////////////////////////////////////////////////////////////
//With event delegation
//1. Add event listener to common parent element.
//2. Determine what element originated the event.
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  // console.log(e.target);

  //Matching strategy
  if (e.target.classList.contains('.nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
//TABBED COMPONENT.\
//Do this using event delegation method cause we don't want to attach function to all the tabs it will only be ineffective.
// tabs.forEach(tab => tab.addEventListener('click', () => console.log('Tab')))

/////////////////////////////////////////////////
//USING EVENT DELEGATION.
tabsContainer.addEventListener('click', function (e) {
  // using event delegation
  // for event delgation we need to attach the event handler on the common parent element of all the elements that we're interested in.

  tabsContainer.addEventListener('click', function (e) {
    // We cannot use e.target only because the tab has two compoent (span and texts).
    const clicked = e.target.closest('.operations__tab');
    // console.log(clicked);

    //Guard clause
    if (!clicked) return;

    //Remove active class
    tabs.forEach(t => t.classList.remove('operations__tab--active'));
    tabsContent.forEach(t => t.classList.remove('operations__content--active'));

    //Activate tab
    clicked.classList.add('operations__tab--active');

    //Active content area
    // console.log(clicked.dataset.tab);
    document
      .querySelector(`.operations__content--${clicked.dataset.tab}`)
      .classList.add('operations__content--active');
  });
});

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
//Menu fade animation

//We will use event delegation
//so the common parent element is nav.
//mouseenter doesn't bubble but mouseover does bubble.
//opposite of mouseenter is mouseleave
//opposit of mouseover is mouseout

const handleHover = function (e) {
  // console.log(this);
  if (e.target.classList.contains('nav__link')) {
    //We are not using closest method cause there are no child element that we can accidently click
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

//Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// nav.addEventListener('mouseover', function (e) {
//   hanleHover(e, 0.5);
// });
// nav.addEventListener('mouseout', function (e) {
//   hanleHover(e, 1);
// });

// nav.addEventListener('mouseover', function(e){
//   if(e.target.classList.contains('nav__link')){
//     //We are not using closest method cause there are no child element that we can accidently click
//     const link = e.target;
//     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//     const logo = link.closest('.nav').querySelector('img');

//     siblings.forEach(el => {
//       if(el !== link) el.style.opacity = 0.5;
//     })
//     logo.style.opacity = 0.5;
//   }
// })

// nav.addEventListener('mouseout', function(e){
//   if(e.target.classList.contains('nav__link')){
//     const link = e.target;
//     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//     const logo = link.closest('.nav').querySelector('img');

//     siblings.forEach(el => {
//       if(el !== link) el.style.opacity = 1;
//     })
//     logo.style.opacity = 1;
//   }
// })

//Sticky navigation
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//IntersectionObserver
const stickyNav = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: '-90px',
});

headerObserver.observe(header);
/*







//Sticky navigation
const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);
///////////////////////////////////////////////////////
// STICKY NAVIGATION //
window.addEventListener('scroll', function () {
  // console.log(window.scrollY);

  if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});

//This is not the way to go becuase the scroll event fires all the time, no matter how small the change is.
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////
//Intersection Observer API//

//This API allows our code to basically observe changes to the way that a certain target element intersect another element, or the way it intersect the viewport.

/*
const obsCallBack = function(entries, observer){
  //This callback function of IntersectionObserver will be called each time that the observed element is intersecting the root element at the threshold that we defined.
  //Entries are the arrays of threshold entries.
  //Observer is the observer object itself.
  entries.forEach(entry => {
    console.log(entry);
  })

};
const obsOptions = {
  root: null, //In this case we will observer viewport
  // threshold: 0.1
  //element to 10% viewport ma dekhiyepaxi threshold pura hunxa
  threshold: [0,0.2]
  //0 means target elements moves completely out of the view and it also gets called as soon as it inters the view
  //1 means when the target is 100% visible.
  //callback function is passed when moving in and out of a threshold point.
}
const observer = new IntersectionObserver(obsCallBack,obsOptions);

observer.observe(section1);

*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');

  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  //length is not 0 based.
  const maxSlide = slides.length;

  // const slider = document.querySelector('.slider');
  // slider.style.transform = 'scale(0.4) translateX(-1200px)';
  // slider.style.overflow = 'visible'

  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  // createDots();

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };
  // activateDot(0);

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));
  // goToSlide(0);

  //0,100,200,300

  const nextSlide = function () {
    if (curSlide === maxSlide - 1) curSlide = 0;
    else curSlide++;
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  // goToSlide(curSlide)
  // slides.forEach((s, i) => (s.style.transform = `translateX(${100 * (i-curSlide)}%)`));
  //-100,0,100,200

  const prevSlide = function () {
    if (curSlide === 0) curSlide = maxSlide - 1;
    else curSlide--;
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };
  init();

  //Event handlers
  //Next slide
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  //keyword events
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      // const slide = e.target.dataset.slide;
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// REVEAL SECTIONS

const revealSection = function (entries, observer) {
  //Entries are array so we get the first element by destructuring
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
//Lazy loading images
//We also have to think about people who have super slow internet and low performance computer.

//Selection element which contains the certain property in this case (data-src)
const imgTargets = document.querySelectorAll('img[data-src]');
// console.log(imgTargets);

const loadImg = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;

  //Replace src image with data-src image
  entry.target.src = entry.target.dataset.src;
  // entry.target.classList.remove('lazy-img');
  //Yo chai load event sakepaxi matra garda hunxa kinaki yo pahilai garyo bane img load hudai gareko ni dekhauxa jsle garda low quality img pani display hunxa

  //After js finds the new image it loads it behinds the scene and activate load event.

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '-200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
//////////////   WITH EVENT DELEGATION   /////////////

//1. Add event listener to common parent element
//2. Determine what element originated the event

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   // console.log(e.target);

//   //Matching strategy
//   if (e.target.classList.contains('nav__link')) {
//     e.preventDefault();
//     const id = e.target.getAttribute('href');
//     // console.log(id);
//     document.querySelector('.id').scrollIntoView({ behavior: 'smooth' });
//   }
// });

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
//SELECTING, CREATING AND DELETING ELEMENTS.//
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');
// console.log(allSections);

// console.log(document.getElementById('section--1'));

//When you need HTML collection
const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// console.log(document.getElementsByClassName('btn'));

//Creating and Inserting elements.
//.insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent =
  'We use cookied for improved functionality and analytics.';
message.innerHTML =
  'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

//prepend adds the element as the first child of this element(header)

//To add it as the last child we use append
//Here now the message is a life element living in the DOM. and it cannot be at multiple places at the same time so only appends works.
//DOM element is unique so we can use prepend and append to move elements as well

// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true))

//Before and after the element
// header.before(message)
// header.after(message)

//Delete elements

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    //Dom traversing.
    //before: message.parentElement.removeChild(message)
    message.remove();
  });

/*
  ///////////////////////////////////////////////
  //STYLES,ATTRIBUES AND CLASSES.//

  //STYLES
  message.style.backgroundColor = '#37383d';
  message.style.width = '120%';

  //WE can only read the properties of those which we had set like this
  console.log(message.style.backgroundColor);

  //But not this
  console.log(message.style.height); 

  console.log(getComputedStyle(message).color);
  console.log(getComputedStyle(message).height);

  message.style.height = Number.parseInt(getComputedStyle(message).height,10) + 40 + 'px';


  //For the custom property
document.documentElement.style.setProperty('--color-primary', 'orangered');


//Attributes

//Elements --> title, img, body, ul, li
//Attributes --> class,id,href,alt,src

const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);
//Only standered property is allowed to read like alt,src on the images.

//Non -standered
console.log(logo.designer);
console.log(logo.getAttribute('designer'));

logo.alt = 'Beautiful minimalist logo'

logo.setAttribute('company', 'Bankist')
//To get absolute
console.log(logo.src);

//To get relative (relative to folder)
console.log(logo.getAttribute('src'));


const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

//DATA ATTRIBUTES
console.log(logo.dataset.versionNumber);
//WE use this when we need to store data in the user interface

//Classes
logo.classList.add('c','j')
logo.classList.remove('c','j')
logo.classList.toggle('c')
logo.classList.contains('c')


//Don't use this
//It will overwrite all the existing clases and we can only put one class on any element.
logo.className = 'jonas'

*/

// const h1 = document.querySelector('h1');

// const alertH1 = function (e) {
//   alert('addEventListener: Great! You are reading the heading :D');
//   // h1.removeEventListener('click',alertH1)
// };
// h1.addEventListener('click', alertH1);

// setTimeout(()=> h1.removeEventListener('click',alertH1),6000)

// h1.addEventListener('mouseenter', function(e){
//   alert('addEventListener: Great! You are reading the heading :D')
// });

// //old methods.

// h1.onmouseenter = function(e){
//   alert('onmouseenter: Great! You are reading the heading :D')
// }

//addEventListener allows us to write multiple function and we can remove the event handler in case we don't need it.

////////////////////////////////////////////////////////
//EVENT PROPAGATION: BUBLING AND CAPTURING --> EP.190///
/*
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
console.log(randomColor(0, 255));

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  //Here e.target is where the event first happened and not the element where the handler is attached..
  //e.currentTarget is element in which event handler is attached.
  console.log('Link', e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  //Stop event propagation(Bubbling and capturing)
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('container', e.target, e.currentTarget);
});

//Third parameter of addEventListener is use Capture parameter(Capturing and bubling)
//Then it will listen to capturing event and not to bubbling event.
document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log('nav', e.target, e.currentTarget);
  },
  false //By default it is set to false
);


*/

//Event delegation with the help of bubling

//////////////////////////////////////////////////////
//DOM TRAVERSING  ////////////////////////////////

/*

const h1 = document.querySelector('h1');

//Going downwards : selecting child elements

// console.log(h1.querySelectorAll('.highlight'));
//It finds children nomatter how far they are in a dom tree.



// //Direct children only
// // console.log(h1.childNodes);
// //HTML collection is a live collection which is updated.
// console.log(h1.children);
// console.log(h1.firstElementChild);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered'






//Going upwards : parents
console.log(h1.parentNode);
console.log(h1.parentElement);
//closest (it is used specially in event delegation)
//parent element dom tree bata jati tada bayeni khojxa yesle. Direct parent matra haina aru parent harulai ni khojxa.
h1.closest('.header').style.background = 'var(--gradient-secondary)';
//It find parent no matter how far they are in a dom tree.




//Going sideways : selecting siblings.
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

//All the siblings.
//Going to parents and reading all the children nodes.
console.log(h1.parentElement.children);

[...h1.parentElement.children].forEach(function(el){
  if(el!== h1) el.style.transform = 'scale(0.5)'
})

*/
