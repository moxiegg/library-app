let myLibrary=[]
let formModal=document.querySelector('.modal');
let body=document.querySelector("body");
let form=document.querySelector(".addBookForm");
form.addEventListener("submit",function(e){
    // console.log(e);
    e.preventDefault();
    author=document.querySelector("#author").value;
    title=document.querySelector("#title").value;
    pages=document.querySelector("#pages").value;
    readStatus=document.querySelector("#readStatus").checked;
    if(readStatus){
        readStatus="Yes";
    }else readStatus="No";
    form.reset();
    Book(author,title,pages,readStatus);
})
function cancelForm(){
    formModal.classList.remove("disp");
    body.classList.remove("darken");
}
function bookObj(author,title,pages,readStatus){
    this.author=author;
    this.title=title;
    this.pages=pages;
    this.readStatus=readStatus;
}
function toggleStatus(e){
    let index=e.target.getAttribute('data-bookNo');
    let rs=myLibrary[index].readStatus;
    if(rs=="Yes"){
        myLibrary[index].readStatus="No";
    }else myLibrary[index].readStatus="Yes";
    display();
}
function removeBook(e){
    let index=e.target.getAttribute('data-bookNo');
    myLibrary.splice(index,1);
    display();
}
function Book(author,title,pages,readStatus){
    myLibrary.push(new bookObj(author,title,pages,readStatus));
    cancelForm();
    display();
}
function openForm(){
    formModal.classList.add('disp');
    body.classList.add('darken');
}
function display(){
    let b=document.querySelector(".books");
    b.innerHTML="";
    ind=0;
    myLibrary.forEach(ele=>{
        let card=document.createElement("div");
        card.className="card";
        ti=document.createElement("div");
        ti.textContent=ele.title;
        // card.appendChild(ti);
        au=document.createElement("div");
        au.textContent=ele.author;
        // card.appendChild(au);
        pg=document.createElement("div");
        pg.textContent=ele.pages;
        // card.appendChild(pg);
        rs=document.createElement("div");
        rs.textContent=ele.readStatus;
        rs.setAttribute("data-bookNo",ind);
        rs.className="toggle";
        rs.addEventListener("click",toggleStatus);
        // card.appendChild(rs);
        rm=document.createElement("button");
        rm.textContent="Remove";
        rm.addEventListener("click",removeBook);
        rm.setAttribute("data-bookNo",ind);
        card.append(ti,au,pg,rs,rm);
        b.appendChild(card);
        ind=ind+1;
    })
}