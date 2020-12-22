const category = document.querySelector('.form_category');
const name = document.querySelector('.form_name');
const amount = document.querySelector('.form_amount');
const weight = document.querySelector('.form_weight');
const list = document.querySelector('.list_container');


const clear_form = () => {
    category.value = 'Fruit';
    name.value = '';
    amount.value = '';
    weight.value = '';
}

const add_item_local_storage = (category_list,name) => {
    const value = `
        <section class="list_category category_${name.toLowerCase()}" >
        ${category_list.innerHTML}
        </section>
    `
    localStorage.setItem(name, JSON.stringify(value));
}

const check_input = () => {

    if(Number.isNaN(parseInt(amount.value)) && !(amount.value === '')) return true;

    if(Number.isNaN(parseInt(weight.value)) && !(weight.value === '')) return true;

    return false;
}

const edit_element = (remove_item) => {

    const item = JSON.parse(localStorage.getItem('edited_element'));
    const edited_element = document.querySelector(`.item[data-name = '${item.name}']`);
    const category_list = document.querySelector(`.category_${item.category.toLowerCase()}`)


    if(item.category !== category.value){
        const trash = edited_element.querySelector('.fa-trash');

        remove_item(trash);
        add(`category_${category.value.toLowerCase()}`);

        return
    }

    edited_element.innerHTML = `
        <div class="item_circle"><i class="fas fa-check item_check item_check--hidden"></i></div>
        <span class="item_title">${name.value}</span>
        <span class="item_amount">${(amount.value)?parseInt(amount.value).toFixed(0):1}</span>
        <span class="item_weight">${(weight.value)?parseFloat(weight.value.replace(',', '.')).toFixed(2)+'kg':'-'}</span>
        <button class="item_edit"><i class="far fa-edit"></i></button>
        <button class="item_delete"><i class="fas fa-trash"></i></button>
        <div class="item_line-through item_line-through--hidden"></div>
    `;
    edited_element.setAttribute('data-name', `${name.value}`);

    add_item_local_storage(category_list, item.category)
};

const add = (name_category) => {
    let category_list = document.querySelector(`.${name_category}`);

    if(!category_list) {
        list.innerHTML += `
            <section class="list_category ${name_category}" >
            <header class="list_title">${category.value}</header>
            </section>
        `
    }

    const new_item = `
            <li class="item list_item" data-name="${name.value}">
            <div class="item_circle"><i class="fas fa-check item_check item_check--hidden"></i></div>
            <span class="item_title">${name.value}</span>
            <span class="item_amount">${(amount.value)?parseInt(amount.value).toFixed(0):1}</span>
            <span class="item_weight">${(weight.value)?parseFloat(weight.value.replace(',', '.')).toFixed(2)+'kg':'-'}</span>
            <button class="item_edit"><i class="far fa-edit"></i></button>
            <button class="item_delete"><i class="fas fa-trash"></i></button>
            <div class="item_line-through item_line-through--hidden"></div>
            </li>
        `;

        category_list = document.querySelector(`.${name_category}`);
        category_list.innerHTML += new_item;

        add_item_local_storage(category_list,category.value);
        clear_form();
}

const add_item = ( remove_item) => {
    const name_category = `category_${category.value.toLowerCase()}`;
    const items = [...document.querySelectorAll('.item')];
    let can_i_add = true;
    const edit = JSON.parse(localStorage.getItem('edit'));

    console.log('edit:', edit)

    if(edit) {
        edit_element(remove_item);
        clear_form();
        return;
    } else {

        if(check_input()) {
            clear_form();
            return;
        }

        items.forEach(item => {
            if(item.dataset.name.trim().toLowerCase() === name.value.trim().toLowerCase()) {
                console.log('false')
                can_i_add = false
            }
        });

        console.log(can_i_add)

        if(!can_i_add) return

        add(name_category)

        clear_form();

    }

}



module.exports = add_item;