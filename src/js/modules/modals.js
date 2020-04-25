const modals = () => {
    function bindModal(trigger, modal, close) {
        trigger.addEventListener('click', (e) => {
            if (e.target) {
                e.preventDefault();
            }

            modal.style.display = "block";
            document.body.style.overflow = "hidden";
        });

        close.addEventListener('click', () => {
            modal.style.display = "none";
            document.body.style.overflow = "";
        });
    }

    const callEngineerBtn = document.querySelector('.popup_engineer_btn'),
        modalEmgineer = document.querySelector('.popup_engineer'),
        modalEmgineerClose = document.querySelector('.popup_engineer .popup_close');

    bindModal(callEngineerBtn, modalEmgineer, modalEmgineerClose);
};

export default modals;