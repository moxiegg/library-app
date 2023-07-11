let myLibrary=[]
function bookObj(name,title,pages,readStatus){
    this.name=name;
    this.title=title;
    this.pages=pages;
    this.readStatus=readStatus;
}
bookObj.prototype.toggleRead=function(){
    this.readStatus=!this.readStatus;
    console.log(this.readStatus);
}
function Book(name,title,pages,readStatus){
    myLibrary.push(new bookObj(name,title,pages,readStatus));
}