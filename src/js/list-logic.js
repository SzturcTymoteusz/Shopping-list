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