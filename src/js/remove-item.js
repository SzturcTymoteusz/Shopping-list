const remove_item = (item_remove) => {
    const item = item_remove.parentElement.parentElement;
    const item_parent = item.parentElement;
    const name = item_parent.querySelector('.list_title').textContent;

    console.log('work')

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