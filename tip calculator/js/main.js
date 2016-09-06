function tipCalculate (bill){
  var tip = document.getElementById('tipamount');
  var slideval = document.getElementById('slideval');
  var bill = document.getElementById(bill).value;
  var ref = document.getElementById('ref');
  
  
  if (bill == null || bill == '') {
    tip.innerHTML = 'Please enter an amount';
    ref.innerHTML = 'Please enter an amount';
    return false;
  }
  if(isNaN(bill)) {
    ref.innerHTML = 'Please enter a number';
    tip.innerHTML = 'Please enter a number';
    return false;
  }
  if(bill >= 0){
    ref.innerHTML = '10%: $'+(bill*0.1).toFixed(2)+
    '<br>'+'15%: $'+(bill*0.15).toFixed(2)+
    '<br>'+'18%: $'+(bill*0.18).toFixed(2)+
    '<br>'+'20%: $'+(bill*0.2).toFixed(2);
  
  }
}

