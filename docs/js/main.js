function showModal(elArr){

    let container = document.createElement('div');
    container.classList.add('modalContainer');
    container.addEventListener('click', e => {
        e.target.remove()
    });

    let closeBtn = document.createElement('span');
    closeBtn.appendChild(document.createTextNode('X'));
    closeBtn.classList.add('btn','tc','pa2','br-100','pointer','bg-mid-gray','white','w1','ma2');
    closeBtn.addEventListener('click', e => {
        e.target.parentElement.remove()
    });

    let modal = document.createElement('div');
    modal.classList.add('modal','bg-near-white','pa3', 'br4');

    elArr.forEach(v => {
        modal.appendChild(v);
    });

    container.appendChild(closeBtn);
    container.appendChild(modal);
    document.body.appendChild(container);
}

function showContactModal(e) {
    e.preventDefault();

    let details = JSON.parse(
        atob(e.target.attributes['data-details'].value)
    );
    console.log(details);

    let elements = []; 

    Object.keys(details).forEach((k) => {
        console.log(k);
        let text = details[k];
        let textNode = document.createTextNode(text);
        
        if (k === 'name') {
            let name = document.createElement('h3');
            name.classList.add('mt2');
            name.appendChild(textNode);
            elements.push(name);
        }

        if (k === 'mobile') {
            text = text.replaceAll('#','')
            textNode = document.createTextNode(text);
            let mobile = document.createElement('a');
            mobile.classList.add('db','pb3');
            mobile.setAttribute('href','tel:'+text);
            mobile.appendChild(textNode);
            elements.push(mobile);
        }

        if (k === 'email') {
            text = text.replace('AT','@');
            textNode = document.createTextNode(text);
            let email = document.createElement('a');
            email.setAttribute('href','mailto:'+text);
            email.classList.add('db','pb3'); 
            email.appendChild(textNode);
            elements.push(email);
        }

    })

    showModal(elements)

}