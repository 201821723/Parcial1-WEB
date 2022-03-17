let div = document.createElement('div');
div.className = "container";

const url = "https://gist.githubusercontent.com/josejbocanegra/9a28c356416badb8f9173daf36d1460b/raw/5ea84b9d43ff494fcbf5c5186544a18b42812f09/restaurant.json"

//Datos
let array = [];

let labelCarrito = document.getElementById('contador');
let numCarrito = 0;
let pedido = [];
let carrito = document.getElementById('carrito');
let elemAdd = [];

function getData(callback) {
    fetch(url).then(res => res.json()).then(res => {
        callback(res);
    })
}

function mostrarCate(nombreCat) {
    getData((value) => {

        array = value;

        div.innerHTML = "";

        let h2 = document.createElement('h2');
        h2.style = "text-align: center; margin-bottom: 30px"
        h2.innerHTML = nombreCat;
        div.appendChild(h2);

        for (i in array) {
            let nameYprods = array[i]

            console.log(nombreCat)

            if (nameYprods["name"] === nombreCat) {

                let div0 = document.createElement('div');
                div0.className = "card-deck"

                for (j in nameYprods["products"]) {
                    let prods = nameYprods["products"][j]

                    let div1 = document.createElement('div');
                    div1.className = "card border-dark mb-3"
                    div1.style = "width: 18rem"

                    let img = document.createElement('img');
                    img.className = "card-img-top"
                    img.src = prods["image"]
                    img.style = "display: block; margin-left: auto; margin-right: auto; width: 50 %;"

                    let div2 = document.createElement('div');
                    div2.className = "card-body"

                    let h5 = document.createElement('h5');
                    h5.className = "card-title"
                    h5.style = "text-align:center"

                    let p1 = document.createElement('p');
                    p1.className = "card-text"

                    let p2 = document.createElement('p');
                    p2.className = "card-text"
                    p2.style = "font-weight: bold;"

                    let a = document.createElement('a');
                    a.className ="btn btn-primary"

                    h5.innerHTML = prods["name"]
                    p1.innerHTML = prods["description"]
                    p2.innerHTML = '$' + prods["price"]
                    a.innerHTML = "Add to cart"

                    div1.appendChild(img);
                    div1.appendChild(div2);
                    div2.appendChild(h5);
                    div2.appendChild(p1);
                    div2.appendChild(p2);
                    div2.appendChild(a);

                    div0.appendChild(div1);

                     a.addEventListener("click", function () {
                        labelCarrito.innerHTML = (numCarrito + 1) + " items"
                         numCarrito = numCarrito + 1;

                         let esta = "false";

                         for (i in pedido) {
                             if (pedido[i][1] == prods["name"]) {
                                 pedido[i][0] = pedido[i][0] + 1
                                 esta = "true";
                             }
                         }

                         if (pedido.length == 0 || esta == "false") {
                             let producto = [];
                             producto.push(1);
                             producto.push(prods["name"]);
                             producto.push(prods["price"]);

                             pedido.push(producto);
                         }
                    });
                }
                div.appendChild(div0);
            }
        }
    });
};

carrito.addEventListener("click", function () {

    div.innerHTML = "";

    let h2 = document.createElement('h2');
    h2.style = "text-align: center; margin-bottom: 30px"
    h2.innerHTML = "ORDER DETAIL";
    div.appendChild(h2);

    let table = document.createElement('table');
    table.className = "table table-striped";
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);

    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.scope = "col"
    heading_1.innerHTML = "Item"

    let heading_2 = document.createElement('th');
    heading_2.scope = "col"
    heading_2.innerHTML = "Quantity"

    let heading_3 = document.createElement('th');
    heading_3.scope = "col"
    heading_3.innerHTML = "Description"

    let heading_4 = document.createElement('th');
    heading_4.scope = "col"
    heading_4.innerHTML = "Unit price"

    let heading_5 = document.createElement('th');
    heading_5.scope = "col"
    heading_5.innerHTML = "Amount"

    let heading_6 = document.createElement('th');
    heading_6.scope = "col"
    heading_6.innerHTML = "Modify"

    row_1.appendChild(heading_1)
    row_1.appendChild(heading_2)
    row_1.appendChild(heading_3)
    row_1.appendChild(heading_4)
    row_1.appendChild(heading_5)
    row_1.appendChild(heading_6)
    thead.appendChild(row_1)

    let precioTotal = 0;
    let h6 = document.createElement('h6');
    let div3 = document.createElement('div')
    div3.className = "col"

    for (i in pedido) {
        let row = document.createElement('tr');
        let th = document.createElement('th');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');
        let div0 = document.createElement('div');

        div0.className = "form - group row justify - content - center";
        div0.style = "margin-top: 0px"

        let valor = pedido[i]

        th.innerHTML = parseInt(i) + 1
        td1.innerHTML = valor[0]
        td2.innerHTML = valor[1]
        td3.innerHTML = valor[2]
        td4.innerHTML = Math.round(valor[0] * valor[2] * 100) / 100

        precioTotal = Math.round((precioTotal + parseFloat(td4.innerHTML)) * 100) / 100

        h6.innerHTML = "Total: " + precioTotal;
        div3.appendChild(h6)

        let a2 = document.createElement('a');
        a2.className = "btn btn-primary"
        a2.style = "margin-right: 2px; background-color: #ffba01;"
        a2.innerHTML = "+"

        a2.addEventListener("click", function () {

            labelCarrito.innerHTML = (numCarrito + 1) + " items"
            numCarrito = numCarrito + 1;

            td1.innerHTML = parseInt(td1.innerHTML) + 1
            td4.innerHTML = Math.round((parseInt(td1.innerHTML)) * valor[2] * 100) / 100
            h6.innerHTML = "Total: " + Math.round((parseFloat(h6.innerHTML.substring(7)) + valor[2])*100)/100

            for (i in pedido) {
                if (pedido[i][1] == td2.innerHTML) {
                    pedido[i][0] = pedido[i][0] + 1
                }
            }

            row.appendChild(th);
            row.appendChild(td1);
            row.appendChild(td2);
            row.appendChild(td3);
            row.appendChild(td4);
            row.appendChild(td5);
            div3.appendChild(h6);
        })

        let a3 = document.createElement('a');
        a3.className = "btn btn-primary"
        a3.style = "margin-left: 2px; background-color: #ffba01;"
        a3.innerHTML = "-"

        a3.addEventListener("click", function () {

            labelCarrito.innerHTML = (numCarrito - 1) + " items"
            numCarrito = numCarrito - 1;

            td1.innerHTML = parseInt(td1.innerHTML) - 1
            td4.innerHTML = Math.round((parseInt(td1.innerHTML)) * valor[2] * 100) / 100
            h6.innerHTML = "Total: " + Math.round((parseFloat(h6.innerHTML.substring(7)) - valor[2]) * 100) / 100

            for (i in pedido) {
                if (pedido[i][1] == td2.innerHTML) {
                    pedido[i][0] = pedido[i][0] - 1
                }
            }

            row.appendChild(th);
            row.appendChild(td1);
            row.appendChild(td2);
            row.appendChild(td3);
            row.appendChild(td4);
            row.appendChild(td5);
            div3.appendChild(h6);
        })

        div0.appendChild(a2)
        div0.appendChild(a3)
        
        td5.appendChild(div0);

        th.scope = "row";

        row.appendChild(th);
        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        row.appendChild(td4);
        row.appendChild(td5);

        tbody.appendChild(row);
    }

    let div1 = document.createElement('div')
    div1.className = "container"
    let div2 = document.createElement('div')
    div2.className = "row"
    
    let div4 = document.createElement('div')
    div4.className = "col-7 justify-content: right"

    let a = document.createElement('a');
    a.className = "btn btn-primary"
    a.style = "margin-right: 10px; background-color: #f44336;"
    a.innerHTML = "Cancel"
    div4.appendChild(a)

    a.addEventListener("click", function () {
        var result = confirm("CANCEL THE ORDER\nAre you sure about cancelling the order?");
        if (result == true) {
            div.innerHTML = "";
            numCarrito = 0;
            labelCarrito.innerHTML = "0 items"
            pedido = [];
        }
    })

    let a1 = document.createElement('a');
    a1.href = "#"
    a1.className = "btn btn-primary"
    a1.innerHTML = "Confirm order"
    div4.appendChild(a1)

    a1.addEventListener("click", function () {
        console.log(pedido)
    })

    div2.appendChild(div3)
    div2.appendChild(div4)
    div1.appendChild(div2)

    table.appendChild(div1)
    div.appendChild(table);
});


document.getElementById('Events').appendChild(div);