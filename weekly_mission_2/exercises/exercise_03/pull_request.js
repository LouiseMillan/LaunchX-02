/*
PullRequest
-------------------------------
    +title
    +author
    +branchName
    +dateCreated
    +status
    +repositoryNameAssociated (Repo)
-------------------------------
    +getStatus()
    +getTitleAndAutor()
-------------------------------
 */

class PullRequest{
    constructor(title, author, branchName, repo){
        this._title = title;
        this._author = author;
        this._branchName = branchName;
        this._repo = repo;
        this._dateCreated = Date.now();
        this._status = 100;
    }

    get status(){
        return this._status;
    }
    get titleAndAuthor(){
        return `PullRequest. Title: ${this._title}, Author: ${this._author}`;
    }
}
