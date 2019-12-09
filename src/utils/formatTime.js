export const formatTime = time => {
  let x = '';
  if (typeof time === x ) {
    return null;
  } else if (typeof time === 'string') {
    return null;
  } else if (typeof time === 'function') {
    return null;
  } else if (typeof time < 0) {
    return null;

  } else if (typeof time === 'number') {

    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    const minutes = Math.floor((time / 60) % 60).toString().padStart(2, '0');
    const hours = Math.floor(time / 3600 ).toString().padStart(2, '0');
    const showTime = hours + ':' + minutes + ':' + seconds;
    return showTime;

  } else {
    return null;
  }
};
