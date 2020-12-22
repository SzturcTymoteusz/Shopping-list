const inputs_radio_check = [...document.querySelectorAll('.form_radio-check')];
const inputs_radio = [...document.querySelectorAll('.form_radio-input')];



const form_logic = () => {

    inputs_radio_check.forEach( input => {
        input.addEventListener('input', () => {

            const input_text = input.nextSibling.nextSibling;

            inputs_radio.forEach( input_radio => {
                input_radio.setAttribute('disabled', 'disabled');
                input_radio.value = ''
            })


            input_text.removeAttribute('disabled');

        })
    })

}

module.exports = form_logic

