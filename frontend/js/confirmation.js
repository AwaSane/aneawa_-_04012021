
 
    
    let orderId = localStorage.getItem('orderId')
    console.log(orderId)
    let cartCost = localStorage.getItem('totalCost')
    console.log(cartCost)
    let contact = localStorage.getItem('contact')
    console.log(contact)
    let container = document.getElementById("confirmation");

        container.innerHTML =   `
    <div class= "messagecontainer">

        <p> Nous vous remercions pour votre commande n° <span > ${orderId}</span>,
        pour un montant total de <span >${cartCost/ 100}.00€!</span>
        </p>
        <div>
        <p>
        Compte tenu de la situation actuelle, nos délais de préparation et de livraison peuvent être allongés.</br>
        Nous mettons tout en œuvre pour la préparer au plus vite.
        Vous aurez très prochainement des nouvelles dès que celle-ci sera prête à être expédiée.</p></div>
        <div>
        <p>
        Très belle journée et à bientôt sur <a class= "linkOrinoco" href="index.html">Orinoco.com
        </a> </p>
        </div>
        </div>` 

        localStorage.clear();  

