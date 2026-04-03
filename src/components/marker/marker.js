import './marker.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const markers = document.querySelectorAll('.marker');
markers.forEach((marker) => {
  ScrollTrigger.create({
    trigger: marker,
    start: 'top 80%',
    end: 'bottom top',
    duration: 2,
    onEnter: () => {
      marker.classList.add('marker--show');
    },
  });
});
