/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 160:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "img/shopping.jpg");

/***/ }),

/***/ 766:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___ = __webpack_require__(91);
var ___HTML_LOADER_IMPORT_0___ = __webpack_require__(160);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_0___);
var code = "<!DOCTYPE html> <html lang=\"en\"> <head> <meta charset=\"UTF-8\"> <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"> <link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"./img/favicon-16x16.png\"> <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.15.1/css/all.css\" integrity=\"sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp\" crossorigin=\"anonymous\"> <title>Shopping list</title> </head> <body class=\"page\"> <img class=\"page_background\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"> <main class=\"list page_container\"> <section class=\"list_background\"></section> <section class=\"list_counter\">1</section> <section class=\"list_print\"><i class=\"fas fa-print\"></i></section> <header class=\"list_header\">Shopping list</header> <ul class=\"list_container\"> </ul> <button class=\"list_btn\">Add item</button> <section class=\"list_piece-counter\">10/12</section> <section class=\"list_weight-counter\">1.23/12.32</section> <section class=\"form list_form form--hide\"> <label class=\"form_label\"> <span class=\"form_input-title\">Category</span> <select class=\"form_category\"> <option value=\"Fruit\">Fruit</option> <option value=\"Vegetables\">Vegetables</option> <option value=\"Dairy\">Dairy</option> <option value=\"Bread\">Bread</option> <option value=\"Fishes\">Fishes</option> <option value=\"Meat\">Meat</option> <option value=\"Sweets\">Sweets</option> <option value=\"Drinks\">Drinks</option> <option value=\"Sport\">Sport</option> <option value=\"House\">House</option> </select> </label> <label class=\"form_label\"> <span class=\"form_input-title\">Name</span> <input type=\"text\" class=\"form_name\" placeholder=\"Name\" maxlength=\"15\"> </label> <div class=\"form_radio\"> <label class=\"form_label\"> <input type=\"radio\" name=\"food\" value=\"Amount\" class=\"form_radio-check\" checked=\"checked\"> <input type=\"text\" placeholder=\"Amount\" class=\"form_radio-input form_amount\"> </label> <label class=\"form_label\"> <input type=\"radio\" name=\"food\" value=\"Weight\" class=\"form_radio-check\"> <input type=\"text\" placeholder=\"Weight [1.4 kg]\" class=\"form_radio-input form_weight\" disabled=\"disabled\"> </label> </div> <button type=\"submit\" class=\"form_submit\">Submit</button> <button class=\"form_exit\"><i class=\"fas fa-times\"></i></button> </section> </main> </body> </html>";
// Exports
module.exports = code;

/***/ }),

/***/ 91:
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ 634:
/***/ ((module) => {

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
                can_i_add = false
            }
        });

        if(!can_i_add) return

        add(name_category)

        clear_form();

    }

}



module.exports = add_item;

/***/ }),

/***/ 737:
/***/ ((module) => {

const edit_item_local_storage = (item) => {
    const category_list = item.parentElement
    const name = category_list.querySelector('.list_title').textContent;
    const value = `
    <section class="list_category category_${name.toLowerCase()}" >
    ${category_list.innerHTML}
    </section>
    `
    localStorage.setItem(name, JSON.stringify(value));
}

const check_item = (circle) => {
    const check = circle.querySelector('.item_check');
    const item = check.parentElement.parentElement;
    const line = check.parentElement.parentElement.querySelector('.item_line-through');

    check.classList.toggle('item_check--hidden');
    line.classList.toggle('item_line-through--hidden');

    edit_item_local_storage(item);
}


module.exports = check_item

/***/ }),

/***/ 233:
/***/ ((module) => {

const counter_pieces = document.querySelector('.list_piece-counter');
const counter_weight = document.querySelector('.list_weight-counter');

const count_pieces_weight = () => {
    const list_item = [...document.querySelectorAll('.item')];

    const all_pieces = list_item.reduce( (total, item) => {
        const amount = parseInt(item.querySelector('.item_amount').textContent);

        return total += amount ;
    }, 0);

    const left_pieces = list_item.reduce( (total, item) => {
        let amount = parseInt(item.querySelector('.item_amount').textContent);
        const check = item.querySelector('.fa-check');

        if(!check.classList.contains('item_check--hidden')) amount = 0;

        return total += amount ;
    }, 0);

    counter_pieces.textContent = `${left_pieces}/${all_pieces}`;

    const all_weight = list_item.reduce( (total, item) => {
        let weight = parseFloat(item.querySelector('.item_weight').textContent);

        if(Number.isNaN(weight)) weight = 0;

        return total += weight;
    }, 0);

    const left_weight = list_item.reduce( (total, item) => {
        let weight = parseFloat(item.querySelector('.item_weight').textContent);
        const check = item.querySelector('.fa-check');

        if(Number.isNaN(weight)) weight = 0;

        if(!check.classList.contains('item_check--hidden')) weight = 0;

        return total += weight;
    }, 0);

    counter_weight.textContent = `${left_weight.toFixed(2)}/${all_weight.toFixed(2)}`;
}

module.exports = count_pieces_weight;

/***/ }),

/***/ 544:
/***/ ((module) => {

const count_items = () => {
    const list_items = [...document.querySelectorAll('.item')];
    const num_items = list_items.length;
    const counter_items = document.querySelector('.list_counter');

    counter_items.textContent = num_items;
}

module.exports = count_items

/***/ }),

/***/ 224:
/***/ ((module) => {

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

/***/ }),

/***/ 682:
/***/ ((module) => {

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



/***/ }),

/***/ 781:
/***/ ((module) => {

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

/***/ }),

/***/ 604:
/***/ ((module) => {

const list = document.querySelector('.list_container');



const list_logic = ({remove_item, check_item, count_items, count_pieces_weight, edit_item}) => {
    list.addEventListener('click', (e) => {
        const item = e.target;
        const parent = item.parentElement;

        if(item.classList.contains('fa-trash')) {
            remove_item(item);
            count_items();
            count_pieces_weight();
        };

        if(item.classList.contains('item_circle')||
        parent.classList.contains('item_circle')) {
            check_item(parent);
            count_pieces_weight();
        };

        if(item.classList.contains('fa-edit')){
            localStorage.setItem('edit', 'true');

            edit_item(parent);
            count_pieces_weight();

        }
    })
}


module.exports = list_logic

/***/ }),

/***/ 415:
/***/ ((module) => {

const load_local_storage = () => {
    const all_items = []
    const keys = Object.keys(localStorage);
    const list = document.querySelector('.list_container');

    keys.forEach(key => all_items.push(JSON.parse(localStorage.getItem(key))));


    const new_all_item = all_items.filter(item => {
        return typeof item === 'string';
    })
    new_all_item.reverse();
    const last_item = new_all_item.splice(new_all_item.length-2, 1);
    new_all_item.unshift(last_item);

    new_all_item.forEach(item => {
        list.innerHTML += item;
    })
}

module.exports = load_local_storage

/***/ }),

/***/ 607:
/***/ ((module) => {

const print = () => {
    const lists = [...document.querySelectorAll('.list_category')];
    
    const code = lists.map(list => {
        const title = list.querySelector('.list_title').textContent;
        const items = [...list.querySelectorAll('.item')];
        const items_innerHtml = items.map(item => {

            const name = item.querySelector('.item_title').textContent;
            const amount = item.querySelector('.item_amount').textContent;
            const weight = item.querySelector('.item_weight').textContent;

            return `
                <li class="item">
                    <span class="name">${name}</span>
                    <span class="amount">${amount}</span>
                    <span class="weight">${weight}</span>
                </li>
            `
        }).join('');

        return `
            <span class="header">${title}</span>
            <ul>
                ${items_innerHtml}
            </ul>
        `
    }).join('');

    const new_window = document.open('', '',"toolbar=0, location=0, resizable=1, directories=0, status=1, menubar=1, scrollbars=1, height=800, width=1000, top=80, left=50")
    const html = `
        <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>List</title>
                <style>
                    .header{
                        font-size: 24px;
                        font-weight: bold;
                    }

                    .item{
                        font-size: 16px;
                        display: flex
                    }

                    .name{
                        width: 100px;
                        display: block;
                    }

                    .amount{
                        width: 50px;
                        display: block;
                    }

                    .weight{
                        width: 50px;
                        display: block;
                    }
                </style>
            </head>
            <body>
                ${code}
            </body>
        </html>
    `
    new_window.document.write(html);
    new_window.print();
    new_window.close();
}

module.exports = print;

/***/ }),

/***/ 210:
/***/ ((module) => {

const remove_item = (item_remove) => {
    const item = item_remove.parentElement.parentElement;
    const item_parent = item.parentElement;
    const name = item_parent.querySelector('.list_title').textContent;

    item.remove();

    const childs = [...item_parent.querySelectorAll('.list_item')];

    if(!childs[0]) {
        item_parent.remove();
        localStorage.removeItem(name);
        return;
    }

    const value = `
        <section class="list_category category_${name.toLowerCase()}" >
        ${item_parent.innerHTML}
        </section>
    `
    localStorage.setItem(name, JSON.stringify(value));
}




module.exports = remove_item;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
(() => {
"use strict";

// EXTERNAL MODULE: ./src/index.html
var src = __webpack_require__(766);
// EXTERNAL MODULE: ./src/img/shopping.jpg
var shopping = __webpack_require__(160);
;// CONCATENATED MODULE: ./src/img/favicon-16x16.png
/* harmony default export */ const favicon_16x16 = (__webpack_require__.p + "img/favicon-16x16.png");
// EXTERNAL MODULE: ./src/js/form.js
var js_form = __webpack_require__(781);
var form_default = /*#__PURE__*/__webpack_require__.n(js_form);
// EXTERNAL MODULE: ./src/js/form-logic.js
var form_logic = __webpack_require__(682);
var form_logic_default = /*#__PURE__*/__webpack_require__.n(form_logic);
// EXTERNAL MODULE: ./src/js/add-item.js
var add_item = __webpack_require__(634);
var add_item_default = /*#__PURE__*/__webpack_require__.n(add_item);
// EXTERNAL MODULE: ./src/js/remove-item.js
var remove_item = __webpack_require__(210);
var remove_item_default = /*#__PURE__*/__webpack_require__.n(remove_item);
// EXTERNAL MODULE: ./src/js/list-logic.js
var list_logic = __webpack_require__(604);
var list_logic_default = /*#__PURE__*/__webpack_require__.n(list_logic);
// EXTERNAL MODULE: ./src/js/check-item.js
var check_item = __webpack_require__(737);
var check_item_default = /*#__PURE__*/__webpack_require__.n(check_item);
// EXTERNAL MODULE: ./src/js/load-local-storage.js
var load_local_storage = __webpack_require__(415);
var load_local_storage_default = /*#__PURE__*/__webpack_require__.n(load_local_storage);
// EXTERNAL MODULE: ./src/js/count_items.js
var count_items = __webpack_require__(544);
var count_items_default = /*#__PURE__*/__webpack_require__.n(count_items);
// EXTERNAL MODULE: ./src/js/count-pieces-weight.js
var count_pieces_weight = __webpack_require__(233);
var count_pieces_weight_default = /*#__PURE__*/__webpack_require__.n(count_pieces_weight);
// EXTERNAL MODULE: ./src/js/edit_item.js
var edit_item = __webpack_require__(224);
var edit_item_default = /*#__PURE__*/__webpack_require__.n(edit_item);
// EXTERNAL MODULE: ./src/js/print.js
var print = __webpack_require__(607);
var print_default = /*#__PURE__*/__webpack_require__.n(print);
;// CONCATENATED MODULE: ./src/js/index.js

















const all_function = {
    add_item: (add_item_default()),
    count_items: (count_items_default()),
    count_pieces_weight: (count_pieces_weight_default()),
    remove_item: (remove_item_default()),
    check_item: (check_item_default()),
    edit_item: (edit_item_default()),
    print: (print_default())
};

window.addEventListener('load', () => {
    localStorage.setItem('edit', JSON.stringify(false));

    load_local_storage_default()();
    form_default()(all_function);
    form_logic_default()();
    list_logic_default()(all_function);
    count_items_default()();
    count_pieces_weight_default()();
});


})();

/******/ })()
;