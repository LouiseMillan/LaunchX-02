/*
Repo
-----------------------
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

export default class Repo{
    constructor(name, author, language){
        this._name = name;
        this._author = author;
        this._language = language
        this._numberOfCommits = 100;
        this._stars = 199;
        this._forks = 299;
        this._issues_open = 10;
        this._issues_close = 10;
    }
    get totalIssues() {
        return this._issues_open + this._issues_close;
    }
    get generalInfo() {
        return `This repository ${this._name} was created by ${this._author}`;
    }
    get name(){
        return this._name;
    }
}
