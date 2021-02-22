export default function outSideClick(element, eventos, callBack) {
  const html = document.documentElement;
  const outside = 'data-outside';

  function handleOutSide(e) {
    if (!element.contains(e.target)) {
      element.removeAttribute(outside);
      eventos.forEach((userEvents) => {
        html.removeEventListener(userEvents, handleOutSide);
      });
      callBack();
    }
  }

  if (!element.hasAttribute(outside)) {
    eventos.forEach((userEvents) => {
      setTimeout(() => { html.addEventListener(userEvents, handleOutSide); });
    });

    element.setAttribute(outside, '');
  }
}
