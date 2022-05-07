/*
User (user const user = {user: "carlo", username: "carlogilmar", bio: "...", age: 23})
-----------------------
    + user
    + username
    + bio
    + age
-----------------------
    + getSummary()
-----------------------
 */
const user = {
    user: "carlo",
    username: "carlogilmar",
    bio: "Maecenas a orci lorem. Suspendisse potenti. Fusce vulputate urna in ipsum fermentum suscipit. Donec odio nisl, porta eu luctus eget, ullamcorper in tellus. Aenean elementum vulputate odio, non porta sapien aliquet nec. Proin vel leo vitae eros viverra imperdiet. Curabitur porttitor ipsum elit, id volutpat quam finibus vel.",
    age: 23,
    getSummary: function(){
        return `Usuario: ${this.username}, Nombre: ${this.user}, Edad: ${this.age}`;
    }
};

/*
TendingTopic (trending_topic)
-----------------------
    +id
    +dateCreated
    +hashtagId
    +hashtagTitle
    +tweetCounter
    +location
-----------------------
    +getDateCreatedWithFriendlyFormat()
    +getStrLocation()
-----------------------
 */
const trending_topic = {
    id: 8198413219,
    dateCreated: new Date(2022, 04, 31, 3, 24, 0),
    hashtagId: 164896565465,
    hashtagTitle: "#yolohago",
    tweetCounter: 98753,
    location: {
        lat: 19.432608, 
        lon: -99.133209
    },
    getDateCreatedWithFriendlyFormat: function(){
        return ("0" + this.dateCreated.getDate()).slice(-2) + "-" + 
        ("0"+(this.dateCreated.getMonth()+1)).slice(-2) + "-" +
        this.dateCreated.getFullYear() + " " + 
        ("0" + this.dateCreated.getHours()).slice(-2) + ":" + 
        ("0" + this.dateCreated.getMinutes()).slice(-2);
    },
    getStrLocation: function(){
        return "México";
    }
};


/*
Hashtag
-----------------------
    +id
    +title
    +author
    +dateCreated
    +usageCounter
-----------------------
    +getDateCreatedWithFriendlyFormat()
-----------------------
 */
const hashtag = {
    id: 98746512121544,
    title: "#befree",
    author: "carlogilmar",
    dateCreated: Date.now(),
    usageCounter: 65,
    getDateCreatedWithFriendlyFormat: function(){
        let d = new Date(this.dateCreated);
        return ("0" + d.getDate()).slice(-2) + "-" + 
        ("0"+(d.getMonth()+1)).slice(-2) + "-" +
        d.getFullYear() + " " + 
        ("0" + d.getHours()).slice(-2) + ":" + 
        ("0" + d.getMinutes()).slice(-2);
    }
};

console.log("\n\tUsuario:");
console.log(user.getSummary());
console.log("Biografía: " + user.bio);
console.log(`Ultimo hashtag [${hashtag.getDateCreatedWithFriendlyFormat()}]: ${hashtag.title}, usado ${hashtag.usageCounter} veces.`);

console.log(`\n\tTrending topic numero uno al ${trending_topic.getDateCreatedWithFriendlyFormat()}:`);
console.log(`${trending_topic.hashtagTitle} compartido ${trending_topic.tweetCounter} veces.`);
