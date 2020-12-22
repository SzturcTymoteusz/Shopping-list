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