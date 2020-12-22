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