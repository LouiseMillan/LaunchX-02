/*
Repo
----------------------
    +name
    +author
    +language
    +numberOfCommits
    +stars
    +forks
    +issues_open
    +issues_close
-----------------------
    +getTotalIssues()
    +getGeneralInfo()
-----------------------
 */
const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
        return this.issues_open + this.issues_close;
    },
    getGeneralInfo: function(){
        return `This repository ${this.name} was created by ${this.author}`;
    }
};

console.log("Nombre del repo: " + repo.name);
console.log("Issues totales: " + repo.getTotalIssues());
console.log(repo.getGeneralInfo());

/*
Issue
------------------------------
    +title
    +repositoryNameAssociated
    +status
    +numberOfComments
    +labels
    +author
    +dateCreated
    +lastUpdated
------------------------------
    +getTitleAndAuthor()
    +getGeneralInfo()
------------------------------
 */
const issue = {
    title: "No tiene todos los getter y setter.",
    repositoryNameAssociated: "weekly_mission_2",
    status: 100,
    numberOfComments: 10,
    labels: [],
    author: "Armando Lios",
    dateCreated: Date.now(),
    lastUpdated: Date.now(),
    getTitleAndAuthor: function(){
        return `Issue. Title: ${this.title}, Author: ${this.author}`;
    },
    getGeneralInfo: function(){
        return `This Issue ${this.title} was created by ${this.author} about repository ${this.repositoryNameAssociated}`;
    }
};
console.log(issue.getGeneralInfo());

/*
PullRequest
-------------------------------
    +title
    +branchName
    +dateCreated
    +status
    +repositoryNameAssociated
-------------------------------
    +getStatus()
    +getTitleAndAutor()
-------------------------------
 */
const pull_request = {
    title: "Versión Beta del proyecto",
    author: "Juan Charrasqueado",
    branchName: "main",
    dateCreated: Date.now(),
    status: 100,
    repositoryNameAssociated: "weekly_mission_2",
    getStatus: function(){
        return this.status;
    },
    getTitleAndAutor: function(){
        return `PullRequest. Title: ${this.title}, Author: ${this.author}`;
    }
};

console.log(pull_request.getTitleAndAutor());