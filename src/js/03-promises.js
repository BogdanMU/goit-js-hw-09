import Notiflix from 'notiflix';

const formRef = document.querySelector('.form');

formRef.addEventListener('submit', btnOnClick)


function btnOnClick(event) {
  event.preventDefault()
  const inputData = event.target.elements
  
  const step = Number(inputData.step.value);
  const amount = Number(inputData.amount.value);
  let delay = Number(inputData.delay.value);

  for (let position = 1; position <= amount; position++, delay += step) {
    
    createPromise(position, delay).then(({ position, delay }) => {
  
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ position, delay });
      }, delay);
    });
  } else {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject({ position, delay });
      }, delay);
    });
  }
}


