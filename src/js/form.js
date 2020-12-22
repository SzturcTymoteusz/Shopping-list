const add_btn = document.querySelector('.list_btn');
const submit_btn = document.querySelector('.form_submit');
const exit_btn = document.querySelector('.form_exit')
const form = document.querySelector('.form');
const print_btn = document.querySelector('.list_print');

const category = document.querySelector('.form_category');
const name = document.querySelector('.form_name');
const amount = document.querySelector('.form_amount');
const weight = document.querySelector('.form_weight');

const clear_form = () => {
    category.value = 'Fruit';
    name.value = '';
    amount.value = '';
    weight.value = '';
}


const form_btn_operation = ({add_item, count_items, count_pieces_weight, remove_item, print}) => {
    add_btn.addEventListener('click', () => {
        form.classList.remove('form--hide');
        localStorage.setItem('edit', JSON.stringify(false));
    });

    submit_btn.addEventListener('click', () => {
        form.classList.add('form--hide');
        add_item(remove_item);
        count_items();
        count_pieces_weight();
    })

    exit_btn.addEventListener('click', () => {
        form.classList.add('form--hide');
        clear_form();
    })

    print_btn.addEventListener('click', print);

}

module.exports = form_btn_operation