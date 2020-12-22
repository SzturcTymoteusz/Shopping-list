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