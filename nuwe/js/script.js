
function traerDatos() {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'https://challenges-asset-files.s3.us-east-2.amazonaws.com/jobMadrid/companies.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let datos = JSON.parse(this.responseText);
            let res = document.querySelector('#res');
            res.innerHTML = '';

            for (let item of datos) {

                res.innerHTML += `<div id="card">
                
                <p><b>${item.name}</b></p>
                  <p>${item.founded}</p> 
                  
                  <div id="tagUno">${item.industry}</div>
                  <div id="tagDos">${item.size}</div>
                
                  <button><a href="${item.website}" target="_blank">Website</a></button>
              
              </div>`
            }
        }
    }
}



function capturar(id) {
    let valor = document.getElementById(id).name;


    function filtro() {
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', 'https://challenges-asset-files.s3.us-east-2.amazonaws.com/jobMadrid/companies.json', true);
        xhttp.send();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let datos = JSON.parse(this.responseText);
                let res = document.querySelector('#res');
                res.innerHTML = '';

                let filtro = datos.filter(industria => {
                    return industria.industry == valor
                })

                for (let item of filtro) {
                    res.innerHTML += `<div id="card">
                
                <p><b>${item.name}</b></p>
                  <p>${item.founded}</p> 
                  
                  <div id="tagUno">${item.industry}</div>
                  <div id="tagDos">${item.size}</div>
                
                  <button><a href="${item.website}" target="_blank">Website</a></button>
              
              </div>`
                }
            }
        }
    } filtro();
}


