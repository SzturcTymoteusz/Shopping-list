import '../sass/style.sass';
import '../index.html';
import '../img/shopping.jpg';
import '../img/favicon-16x16.png'

import form_btn_operation from './form';
import form_logic from './form-logic';
import add_item from './add-item.js';
import remove_item from './remove-item.js';
import list_logic from './list-logic.js';
import check_item from './check-item.js'
import load_local_storage from './load-local-storage.js';
import count_items from './count_items.js';
import count_pieces_weight from './count-pieces-weight.js';
import edit_item from './edit_item.js';
import print from './print.js';

const all_function = {
    add_item,
    count_items,
    count_pieces_weight,
    remove_item,
    check_item,
    edit_item,
    print
};

window.addEventListener('load', () => {
    localStorage.setItem('edit', JSON.stringify(false));

    load_local_storage();
    form_btn_operation(all_function);
    form_logic();
    list_logic(all_function);
    count_items();
    count_pieces_weight();
});

