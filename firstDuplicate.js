function firstDuplicate(a) {

  console.log(obj);
 
  var obj = {};
  //obj[0] = a; // undefined
 
 for(var i = 0; i < a.length; i++){
  if(obj[a[i]]){
    return a[i];
  }
  obj[a[i]] = true;
  // else{
  //  obj[a[i]] = i;
  }
  return -1;
// firstDuplicate();
}

 
//  [1,2,3,2,1]
//  obj{  }
 
//  obj[1] = undefind
 
//  obj{1}
// obj[1] = true 
// */
