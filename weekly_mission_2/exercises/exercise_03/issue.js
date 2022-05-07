/*
Issue
------------------------------
    +title
    +repositoryNameAssociated (Repo)
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

export default class Issue{
    constructor(title, author, repo){
        this._title = title;
        this._author = author;
        this._repo = repo;
        this._status = 200;
        this._numberOfComments = 10;
        this._labels = [];
        this._dateCreated = Date.now();
        this._lastUpdated = Date.now();
    }
    get titleAndAuthor(){
        return `Issue. Title: ${this._title}, Author: ${this._author}`;
    }
    get generalInfo(){
        return `This Issue ${this._title} was created by ${this._author} about repository ${this._repo.name}`;
    }
}