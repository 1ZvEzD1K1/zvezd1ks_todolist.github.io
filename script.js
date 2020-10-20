var myNodelist = document.getElementsByTagName('li');
for (var i = 0; i < myNodelist.length; i++) {
    createCloseButton(myNodelist[i]);
}
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

function save(saved) {
    for (let i = 0; i <= localStorage.length; i++) {
        if (localStorage.getItem(i) == null) {
            localStorage.setItem(i, saved); 
            if (localStorage.getItem("maxId") == null || localStorage.getItem("maxId") < i) {
                localStorage.setItem("maxId", i);
            }
            return i; 
        }
    }
}

document.addEventListener("DOMContentLoaded", function ok() {
    for (let i = 0; i <= localStorage.getItem("maxId"); i++) {
    var load = localStorage.getItem(i);
        if (load != null){
            newElement(load, i);
            console.log(load);
        }
        load = null;
    }
})

function del(id) {
    localStorage.removeItem(id);
}

function newElement(textValue, id) {
        var li = document.createElement("li");
        var t = document.createTextNode(textValue);
        li.appendChild(t);
        document.getElementById('myUL').appendChild(li);
        createCloseButton(li, id);
        document.getElementById('myInput').value = "";

}

function Btn() {
    var inputValue = document.getElementById("myInput").value;
    if (inputValue === '') {
        alert("Поле пусте");
    } else {
        let id = save(inputValue);
        newElement(inputValue, id); 
    }
}

function createCloseButton(node, id) {
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    node.appendChild(span);
    span.onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
            del(id);
        }
}