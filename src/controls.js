$(() => {
  setTimeout(() => {
    const _selectors = $('input[type=checkbox][name=controls]');
    console.log('_selector', _selectors);

    _selectors.each((_, el) =>
      el.addEventListener('change', (event) => {
        if (el.checked) {
          console.log(`${event.target.value}`, 'checked');
          console.log('el', el);
          $(`.${event.target.value}`).addClass(`${event.target.value}_checked`);

          // do something if checked
        } else {
          console.log(`${event.target.value}`, 'un-checked');
          console.log('el', el);
          $(`.${event.target.value}`).removeClass(
            `${event.target.value}_checked`
          );
        }
      })
    );
  }, 50);
});
