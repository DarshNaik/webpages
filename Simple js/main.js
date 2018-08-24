function checklist() {
  var giveId = 1;
  var text = '';
  var sum = 0;
  //var table = document.getElementById('tab');
  while (document.getElementById(giveId)) {
      if(document.getElementById(giveId).checked && giveId !=1) {
        sum += parseInt(document.getElementById(giveId).value);
        text = document.getElementById('tab').rows[giveId].cells[1].innerHTML;
        document.getElementById('tab').rows[giveId].cells[4].innerHTML = text;
        document.getElementById('tab').rows[giveId].cells[1].innerHTML = '';

        //document.getElementById('tab').rows[giveId].cells[0].innerHTML = document.getElementById('tab').rows[giveId].cells[3].innerHTML;

        //text = document.getElementById(giveId).value;
        //document.getElementById('tab').deleteCell(giveId);
      }
      if(document.getElementById(giveId).checked && giveId == 1) {
        sum += parseInt(document.getElementById(giveId).value);
        text = document.getElementById('tab').rows[giveId].cells[1].innerHTML;
        document.getElementById('tab').rows[giveId].cells[5].innerHTML = text;

        document.getElementById('tab').rows[giveId].cells[1].innerHTML = '';
      }
      giveId++;
  }
  //document.getElementById('x').innerHTML = text;
  //var temp = sum;
  document.getElementById('total').innerHTML = parseInt(document.getElementById('total').innerHTML) + sum;
}

function rset()  {
  var giveId = 1;
  var set = '';
  subtract = 0;
  while(document.getElementById(giveId)) {
    if(document.getElementById(giveId).checked && giveId != 1) {
      subtract += parseInt(document.getElementById(giveId).value);

      set = document.getElementById('tab').rows[giveId].cells[4].innerHTML;
      document.getElementById('tab').rows[giveId].cells[1].innerHTML = set;

      document.getElementById('tab').rows[giveId].cells[4].innerHTML = '';
    }
    if(document.getElementById(giveId).checked && giveId == 1) {
      subtract += parseInt(document.getElementById(giveId).value);

      set = document.getElementById('tab').rows[giveId].cells[5].innerHTML;
      document.getElementById('tab').rows[giveId].cells[1].innerHTML = set;

      document.getElementById('tab').rows[giveId].cells[5].innerHTML = '';
    }
    giveId++;
  }
  document.getElementById('total').innerHTML = parseInt(document.getElementById('total').innerHTML) - subtract;
  //document.write (document.getElementById(giveId).checked);
}
