let div = document.createElement('div');
div.className = "container";

const url = "https://gist.githubusercontent.com/josejbocanegra/9a28c356416badb8f9173daf36d1460b/raw/5ea84b9d43ff494fcbf5c5186544a18b42812f09/restaurant.json"

//Datos
let array = [];

function getData(callback) {
    fetch(url).then(res => res.json()).then(res => {
        callback(res);
    })
}


function mostrarBurguers(){
    getData((value) => {

        array = value;

        for (i in array) {
            let nameYprods = array[i]

            if (nameYprods["name"] == "Burguers") {

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
                    img.style = "width:90%; margin-top:10px"

                    let div2 = document.createElement('div');
                    div2.className = "card-body"

                    let h5 = document.createElement('h5');
                    h5.className = "card-title"
                    h5.style = "text-align:center"

                    let p = document.createElement('p');
                    p.className = "card-text"
                    p.style = "text-align:center"

                    let small = document.createElement('small');
                    small.className = "text-muted"

                    let a = document.createElement('a');
                    a.href = "#"
                    a.className = "btn btn-primary"

                    h5.innerHTML = prods["name"]
                    p.innerHTML = prods["description"]
                    small.innerHTML = prods["price"]

                    div1.appendChild(img);
                    div1.appendChild(div2);
                    div2.appendChild(h5);
                    div2.appendChild(p);
                    p.appendChild(small);
                    div2.appendChild(a);

                    div0.appendChild(div1);
                }

                div.appendChild(div0);

            }
        }
    });
};

function mostrarTacos() {
    getData((value) => {

        array = value;

        for (i in array) {
            let nameYprods = array[i]

            if (nameYprods["name"] == "Tacos") {

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
                    img.style = "width:90%; margin-top:10px"

                    let div2 = document.createElement('div');
                    div2.className = "card-body"

                    let h5 = document.createElement('h5');
                    h5.className = "card-title"
                    h5.style = "text-align:center"

                    let p = document.createElement('p');
                    p.className = "card-text"
                    p.style = "text-align:center"

                    let small = document.createElement('small');
                    small.className = "text-muted"

                    let a = document.createElement('a');
                    a.href = "#"
                    a.className = "btn btn-primary"

                    h5.innerHTML = prods["name"]
                    p.innerHTML = prods["description"]
                    small.innerHTML = prods["price"]

                    div1.appendChild(img);
                    div1.appendChild(div2);
                    div2.appendChild(h5);
                    div2.appendChild(p);
                    p.appendChild(small);
                    div2.appendChild(a);

                    div0.appendChild(div1);
                }

                div.appendChild(div0);

            }
        }
    });
};

function mostrarSalads() {
    getData((value) => {

        array = value;

        for (i in array) {
            let nameYprods = array[i]

            if (nameYprods["name"] == "Salads") {

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
                    img.style = "width:90%; margin-top:10px"

                    let div2 = document.createElement('div');
                    div2.className = "card-body"

                    let h5 = document.createElement('h5');
                    h5.className = "card-title"
                    h5.style = "text-align:center"

                    let p = document.createElement('p');
                    p.className = "card-text"
                    p.style = "text-align:center"

                    let small = document.createElement('small');
                    small.className = "text-muted"

                    let a = document.createElement('a');
                    a.href = "#"
                    a.className = "btn btn-primary"

                    h5.innerHTML = prods["name"]
                    p.innerHTML = prods["description"]
                    small.innerHTML = prods["price"]

                    div1.appendChild(img);
                    div1.appendChild(div2);
                    div2.appendChild(h5);
                    div2.appendChild(p);
                    p.appendChild(small);
                    div2.appendChild(a);

                    div0.appendChild(div1);
                }

                div.appendChild(div0);

            }
        }
    });
};

function mostrarDesserts() {
    getData((value) => {

        array = value;

        for (i in array) {
            let nameYprods = array[i]

            if (nameYprods["name"] == "Desserts") {

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
                    img.style = "width:90%; margin-top:10px"

                    let div2 = document.createElement('div');
                    div2.className = "card-body"

                    let h5 = document.createElement('h5');
                    h5.className = "card-title"
                    h5.style = "text-align:center"

                    let p = document.createElement('p');
                    p.className = "card-text"
                    p.style = "text-align:center"

                    let small = document.createElement('small');
                    small.className = "text-muted"

                    let a = document.createElement('a');
                    a.href = "#"
                    a.className = "btn btn-primary"

                    h5.innerHTML = prods["name"]
                    p.innerHTML = prods["description"]
                    small.innerHTML = prods["price"]

                    div1.appendChild(img);
                    div1.appendChild(div2);
                    div2.appendChild(h5);
                    div2.appendChild(p);
                    p.appendChild(small);
                    div2.appendChild(a);

                    div0.appendChild(div1);
                }

                div.appendChild(div0);

            }
        }
    });
};

function mostrarDS() {
    getData((value) => {

        array = value;

        for (i in array) {
            let nameYprods = array[i]

            if (nameYprods["name"] == "Drinks and Sides") {

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
                    img.style = "width:90%; margin-top:10px"

                    let div2 = document.createElement('div');
                    div2.className = "card-body"

                    let h5 = document.createElement('h5');
                    h5.className = "card-title"
                    h5.style = "text-align:center"

                    let p = document.createElement('p');
                    p.className = "card-text"
                    p.style = "text-align:center"

                    let small = document.createElement('small');
                    small.className = "text-muted"

                    let a = document.createElement('a');
                    a.href = "#"
                    a.className = "btn btn-primary"

                    h5.innerHTML = prods["name"]
                    p.innerHTML = prods["description"]
                    small.innerHTML = prods["price"]

                    div1.appendChild(img);
                    div1.appendChild(div2);
                    div2.appendChild(h5);
                    div2.appendChild(p);
                    p.appendChild(small);
                    div2.appendChild(a);

                    div0.appendChild(div1);
                }

                div.appendChild(div0);

            }
        }
    });
};


document.getElementById('Events').appendChild(div);