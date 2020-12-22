const form = document.querySelector('.form');

let category = document.querySelector('.form_category');
let name = document.querySelector('.form_name');
let amount = document.querySelector('.form_amount');
let weight = document.querySelector('.form_weight');

const open_form = () => {
    form.classList.remove('form--hide');
};

const load_value = (item) => {
    const category_item = item.parentElement.querySelector('.list_title').textContent;
    const name_item = item.dataset.name;
    const amount_item = item.querySelector('.item_amount').textContent;
    const weight_item = item.querySelector('.item_weight').textContent;
    const radio_weight = weight.previousSibling.previousSibling;
    const radio_amount = amount.previousSibling.previousSibling;

    category.value = category_item;
    name.value = name_item;

    weight.value = (!Number.isNaN(parseFloat(weight_item))) ? parseFloat(weight_item) : '';

    amount.value = (weight.value === '') ? amount_item : '';

    const edited_element = {
        'category' : category.value,
        'name' : name.value,
        'weight' : weight.value,
        'amount' : amount.value
    };

    localStorage.setItem('edited_element', JSON.stringify(edited_element));



    if(weight.value){

        radio_amount.removeAttribute('checked');
        radio_weight.setAttribute('checked', 'checked');
        weight.removeAttribute('disabled');
        amount.setAttribute('disabled', 'disabled');
    } else {

        radio_weight.removeAttribute('checked');
        radio_amount.setAttribute('checked', 'checked');
        amount.removeAttribute('disabled');
        weight.setAttribute('disabled', 'disabled');

    }

}

const edit_item = (child) => {
    const item = child.parentElement;

    open_form();
    load_value(item);

}

module.exports = edit_item;