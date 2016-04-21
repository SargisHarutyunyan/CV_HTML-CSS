var ids = ["about","work","contact","skills","educ"];
var idfirst = 0;


function getid(el){

var tempid=el.id;
var idsecond = parseInt(tempid[1]);

document.getElementById(ids[idfirst]).style.display = "none";
document.getElementById(ids[idsecond]).style.display = "inline";

idfirst = idsecond;

}
