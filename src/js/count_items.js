const count_items = () => {
    const list_items = [...document.querySelectorAll('.item')];
    const num_items = list_items.length;
    const counter_items = document.querySelector('.list_counter');

    counter_items.textContent = num_items;
}

module.exports = count_items