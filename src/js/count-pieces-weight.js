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