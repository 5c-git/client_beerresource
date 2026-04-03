import './calculator.scss';

const calculator = document.querySelector('.calculator');
if (calculator) {
  const openButton = calculator.querySelector('.calculator__toggle');
  const wrapper = calculator.querySelector('.calculator__wrapper');
  if (openButton && wrapper) {
    openButton.addEventListener('click', (evt) => {
      evt.preventDefault();
      wrapper.classList.toggle('calculator__wrapper--active');
    });

    const result = document.querySelector('.calculator__result');
    const expression = document.querySelector('.calculator__expression');
    const num = document.querySelectorAll('.calculator__button--number');
    const operation = document.querySelectorAll('.calculator__button--operation');
    const equals = document.querySelector('.calculator__button--equals');
    const clear = document.querySelector('.calculator__button--clear');
    const ce = document.querySelector('.calculator__button--ce');
    let ex = ''; // the expression string to be eval'd
    result.innerHTML = '0';

    const checkLength = (arg) => { // if we enter a number that's too long
      if (arg.toString().length > 14) {
        expression.innerHTML = 'number too long'.toUpperCase();
        result.innerHTML = '0';
        ex = '0';
      }
    };

    const trim12 = (arg) => { // if we calculate a number that's too long
      if (arg.toString().length > 14) {
        ex = parseFloat(arg.toPrecision(12));
        if (ex.toString().length > 14) {
          ex = ex.toExponential(9);
        }
        return ex;
      }
      return arg;
    };

    const clickN = (evt) => {
      // when we click on a number
      if (!ex || typeof (ex) === 'number' || ex === '0') {
        expression.innerHTML = evt.target.dataset.number;
        ex = evt.target.dataset.number;
      } else {
        expression.innerHTML += evt.target.dataset.number;
        ex += evt.target.dataset.number;
      }
      result.innerHTML = ex.split(/\/|\*|\+|-|=/).pop();
      checkLength(result.innerHTML);
    };

    const clickO = (evt) => {
      // when we click on an operation
      if (!ex) {
        return;
      }
      ex = ex.toString().replace(/=/, '');
      if (ex.match(/\/|\*|\+|-|=/)) {
        ex = eval(ex).toString();
      }
      expression.innerHTML = expression.innerHTML.replace(/=/, '') + evt.target.dataset.number;
      ex += evt.target.dataset.number;
      result.innerHTML = evt.target.dataset.number;
    };

    Array.from(num).forEach((element) => {
      // assign appropriate function to all numbers and operations
      element.addEventListener('click', clickN);
    });

    Array.from(operation).forEach((element) => {
      element.addEventListener('click', clickO);
    });

    // clear all on click
    clear.addEventListener('click', () => {
      result.innerHTML = '';
      expression.innerHTML = '';
      ex = '';
    });

    // clear last entry on click
    ce.addEventListener('click', () => {
      if (!expression.innerHTML.match(/=$/)) {
        const doCE = (arg) => {
          const newArg = arg.split(/([\/\*\+\-\=])/g);
          newArg.splice(-1, 1);
          return newArg.join('');
        };
        expression.innerHTML = doCE(expression.innerHTML);
        ex = doCE(ex);
        result.innerHTML = 0;
      }
    });

    // calculate the whole thing
    equals.addEventListener('click', () => {
      if (!ex) {
        result.innerHTML = '0';
      } else {
        ex = eval(ex);
        expression.innerHTML += '=';
        result.innerHTML = trim12(ex);
      }
    });
  }
}
