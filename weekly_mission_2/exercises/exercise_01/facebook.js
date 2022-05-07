/*
user
---------------------
    +name
    +lastname
    +phone
    +email
    +username
    +id
    +strid
    +dateCreated
---------------------
    +getFullName()
---------------------
 */
const user = {
    name: "Andres",
    lastname: "Garcia",
    phone: "5566477891", 
    email: "andyg@gmail.com",
    id: 654621621321,
    strid: "AndyFace",
    dateCreated: Date.now(),
    getFullName: function(){
        return this.name + " " + this.lastname;
    }
};


/*
post
---------------------
    +userId
    +dateCreated
    +text
    +files
    +sharesCounter
    +commentsCounter
    +reactions
---------------------
    +getDateCreatedWithFriendlyFormat()
    +getLikes()
---------------------
 */
const post = {
    userId: 654621621321,
    dateCreated: Date.now(),
    text: "Existen los aliens",
    files: [
        "video.mp4",
        "image1.jpg",
        "image2.jpg",
        "image3.jpg"
    ],
    sharesCounter: 15,
    commentsCounter: 6,
    reactions: [
        {type: "like", counter: 36},
        {type: "sad", counter: 0},
        {type: "dislike", counter: 2},
    ],
    getDateCreatedWithFriendlyFormat: function(){
        let d = new Date(this.dateCreated);
        return ("0" + d.getDate()).slice(-2) + "-" + 
        ("0"+(d.getMonth()+1)).slice(-2) + "-" +
        d.getFullYear() + " " + 
        ("0" + d.getHours()).slice(-2) + ":" + 
        ("0" + d.getMinutes()).slice(-2);
    },
    getLikes: function(){
        return this.reactions.find(item => item.type=="like").counter;
    }
};

/*
biography
---------------------
    +state
    +shortDescription
    +website
    +gender
    +otherAccounts
---------------------
    +hasOtherAccounts()
    +getSummary()
---------------------
 */
const biography = {
    userId: 654621621321,
    state: "active",
    shortDescription: "Yo nací, que sé yo, porque quiso el destino porque quiso Dios.",
    website: "nolose.com",
    gender: "no binario",
    otherAccounts: [],
    hasOtherAccounts: function(){
        return this.otherAccounts.length > 0;
    },
    getSummary: function(){
        return `${this.shortDescription}\nGender: ${this.gender}`
    }
};

console.log("\n\tUsuario");
console.log("ID de usuario: " + user.id);
console.log("Nombre de usuario: " + user.getFullName());

console.log("\n\tBiografia");
console.log(biography.getSummary());

console.log("\n\tPublicación");
console.log(post.text);
console.log(post.getDateCreatedWithFriendlyFormat());
console.log(`${post.getLikes()} Likes`);
