/*
Profile
-----------------------
    +id
    +name
    +lastname
    +phone
    +email
    +cards
-----------------------
    +getDefaultCard()
-----------------------
 */
const profile = {
    id: 654987321654987,
    name: "Juanin",
    lastname: "Memin",
    phone: "5566779988",
    email: "juanime@gmail.com",
    cards: [
        { id: 3, alias:"Debito", num: "497651134698654789", exp: {month:5, year: 26}, cvv: 123, default: false },
        { id: 5, alias:"TC", num: "497651137893210054", exp: {month:3, year: 23}, cvv: 456, default: true }
    ],
    getDefaultCard: function(){
        if(this.cards.length > 0){
            return this.cards.find(item => item.default == true);
        }
        return undefined;
    },
    getDefaultCardId: function(){
        let card = this.getDefaultCard();
        if(card != undefined){
            return card.id;
        }
        return undefined;
    },
    getFullname: function(){
        return this.name + " " + this.lastname;
    }
};

/*
Travel
-----------------------
    +id
    +profileId
    +startPoint
    +endPoint
    +dateCreated
    +paymentMethod
    +amounth
-----------------------
    +getPaymentDetails()
    +getDateCreatedWithFriendlyFormat()
    +getTravelInfo()
-----------------------
 */
const travel = {
    id: 898368,
    profile: profile,
    startPoint: {name: "FES Iztacala", lat: 19.5002368, lng: -99.1461376},
    endPoint: {name: "Farmacia San Pablo Muzquiz", lat: 19.5006743, lng: -99.0522445},
    dateCreated: new Date(2022, 04, 15, 15, 16, 33),
    paymentMethod: 2,
    paymentCardId: profile.getDefaultCardId(),
    amounth: 68,
    getPaymentDetails: function(){
        switch(this.paymentMethod){
            case 1: //Efectivo
                return `Efectivo por ${this.amounth} pesos`;
            case 2: //card
                let card = this.profile.cards.find(item => item.id == this.paymentCardId);
                if(card != undefined){
                    return `Cargo a tarjeta terminación ${card.num.substring(card.num.length - 4)} [${card.alias}] por ${this.amounth} pesos`;
                }
                break;
            default:
                return "No definido";
        }
    },
    getDateCreatedWithFriendlyFormat: function(){
        return ("0" + this.dateCreated.getDate()).slice(-2) + "-" + 
        ("0"+(this.dateCreated.getMonth()+1)).slice(-2) + "-" +
        this.dateCreated.getFullYear() + " " + 
        ("0" + this.dateCreated.getHours()).slice(-2) + ":" + 
        ("0" + this.dateCreated.getMinutes()).slice(-2);
    },
    getTravelInfo: function(){
        return `Origen: ${this.startPoint.name} \nDestino: ${this.endPoint.name}`;
    }
};

console.log("\n\tProfile:");
console.log(`Usuario: ${profile.getFullname()}`);
console.log(`Teléfono: ${profile.phone}`);

console.log("\n\tViaje:");
console.log(travel.getTravelInfo());
console.log(travel.getPaymentDetails());