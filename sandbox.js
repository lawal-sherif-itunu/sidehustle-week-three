const formOne = document.getElementById('form-one');
const errorOne = document.getElementById('email-error-one');
const email = document.getElementById('email');
const mobileError = document.getElementById('email-error-one-mobile');

formOne.addEventListener('submit', e => {
    e.preventDefault();
    
    let emailMessages = []
    if (email.value === '' || email.value == null) {
        emailMessages.push('Email is required')
        email.style.border = '2px solid crimson';
    }

    if (emailMessages.length > 0) {
        errorOne.innerText = emailMessages.join(', ')
    } else {
        email.style.border = '#ccc9c9 2px solid';
        errorOne.style.display = 'none';
    }

    e.target.preventDefault();

});

formOne.addEventListener('submit', e => {
    e.preventDefault();
    
    let emailMessages = []
    if (email.value === '' || email.value == null) {
        emailMessages.push('Email is required')
        email.style.border = '2px solid crimson';
    }

    if (emailMessages.length > 0) {
        mobileError.innerText = emailMessages.join(', ')
    } else {
        email.style.border = '#ccc9c9 2px solid';
        mobileError.style.display = 'none';
    }

    e.target.preventDefault();

});

const formTwo = document.getElementById('email-two');
const errorTwo = document.getElementById('email-error-two');
const secondEmail = document.getElementById('second-email');

formTwo.addEventListener('submit', e => {
    e.preventDefault();
    
    let emailMessages = []
    if (secondEmail.value === '' || email.value == null) {
        emailMessages.push('Email is required')
        secondEmail.style.border = '2px solid crimson';
    }

    if (emailMessages.length > 0) {
        errorTwo.innerText = emailMessages.join(', ')
    } else {
        secondEmail.style.border = '#ccc9c9 2px solid';
        errorTwo.style.display = 'none';
    }

    e.target.preventDefault();


    
});


formOne.addEventListener('submit', e=> {
    const popup = document.querySelector('.popup-wrapper');
    const close = document.querySelector('.popup-close');
    const backToForm = document.querySelector('.back');
    
    if (email.value !== '' && email.value != null) {

        popup.style.display = 'block';

        close.addEventListener('click', e => {
            popup.style.display = 'none';
        })


        backToForm.addEventListener('click', e => {
            popup.style.display = 'none';
        });

    }
});

formTwo.addEventListener('submit', e=> {
    e.preventDefault
    const popup = document.querySelector('.popup-wrapper');
    const close = document.querySelector('.popup-close');
    const backToForm = document.querySelector('.back');
    
    if (secondEmail.value !== '' && secondEmail.value != null) {

        popup.style.display = 'block';

        close.addEventListener('click', e => {
            popup.style.display = 'none';
        })


        backToForm.addEventListener('click', e => {
            popup.style.display = 'none';
        });

    }
});