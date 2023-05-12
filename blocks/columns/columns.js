export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  let isSlider = false;
  if(block.parentElement.parentElement.classList.contains(`home-slick-slider`)) {
    isSlider = true;
  }

  // setup image columns
  [...block.children].forEach((row, rowIndex) => {

    if(isSlider) {
      row.setAttribute('id', `slides__${rowIndex}`);
      
      let prevIndex = (rowIndex - 1 + 4) % 4;
      let aTagPrev = document.createElement('a');
      aTagPrev.classList.add(`slide__prev`);
      aTagPrev.setAttribute('href', `#slides__${prevIndex}`);
      row.appendChild(aTagPrev);
      
      let nextIndex = (rowIndex + 1 + 4) % 4;
      let aTagNext = document.createElement('a');
      aTagNext.classList.add(`slide__next`);
      aTagNext.setAttribute('href', `#slides__${nextIndex}`);
      row.appendChild(aTagNext);
    }

    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add('columns-img-col');
        }
      }
    });
  });
}
