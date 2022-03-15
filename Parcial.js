
let div = document.createElement('div');
div.className = "container";

const url = "https://gist.githubusercontent.com/josejbocanegra/9a28c356416badb8f9173daf36d1460b/raw/5ea84b9d43ff494fcbf5c5186544a18b42812f09/restaurant.json"

//Datos
let array = [];

function getData(callback){
	fetch(url).then(res => res.json()).then(res=>{
		callback(res);
	})
}

getData((value) => {

    array = value;

    //Events
    for (i in array) {
        let nameYprod = array[i]

        for (j in nameYprod["products"]) {
            let div0 = document.createElement('div');
            div0.className = "card"
            div0.style = "width: 18rem"
            let img = document.createElement('img');
            img.className = "card-img-top"
            img.src = nameYprod["image"]
            let div1 = document.createElement('div');
            div1.className = "card-body"
            let h5 = document.createElement('h5');
            h5.className = "card-title"
            let p = document.createElement('p');
            p.className = "card-text"
            let a = document.createElement('a');
            a.href = "#"
            a.className = "btn btn-primary"

            div0.appendChild(img);
            div0.appendChild(div1);
            div0.appendChild(h5);
            div0.appendChild(p);
            div0.appendChild(a);

            div.appendChild(div0);
        }

    }
});

document.getElementById('Events').appendChild(div);


