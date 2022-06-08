const accordion = () => {
    const triggers = document.querySelectorAll('.questions-block'),
          contentAccordion = document.querySelectorAll('.questions-block__descr');

    triggers.forEach((e, i) => {
        e.addEventListener('click', () => {
            e.classList.toggle('active');
            contentAccordion[i].classList.toggle('active');
        });
    });
};
export default accordion;