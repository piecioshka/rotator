const testimonialList = [
    {
        image: "http://placeskull.com/50/50/ff00ff",
        text: "Lorem ipsum dolor sit amet.",
    },
    {
        image: "http://placeskull.com/50/50/ffff00",
        text: "Consectetur adipisicing elit."
    },
    {
        image: "http://placeskull.com/50/50/00ffff",
        text: "Sed do eiusmod tempor incididunt."
    }
];

let $image = null;
let $text = null;

const ONE_SECOND = 1000;
const TIME_INTERVAL = 3 * ONE_SECOND;

function displayTestimonial(testimonialIndex) {
    let testimonial = testimonialList[testimonialIndex];
    $image.setAttribute('src', testimonial.image);
    $text.textContent = testimonial.text;
}

function rotateTestimonial(index) {
    displayTestimonial(index);

    setInterval(() => {
        index++;

        if (index === testimonialList.length)  {
            index = 0;
        }

        displayTestimonial(index);
    }, TIME_INTERVAL);
}

function setup() {
    $image = document.querySelector('.testimonial__image');
    $text = document.querySelector('.testimonial__text');

    rotateTestimonial(0);
}

window.addEventListener('DOMContentLoaded', setup);
