export function getDaysInMonth(month, year) {
  var date = new Date(year, month,1);
  var days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date).getDate());
    date.setDate(date.getDate() + 1);
  }

  let ans = []
  for(let i=0;i<days.length;i++){
    let temp = []
    while(i<days.length && temp.length < 6){
        temp.push(days[i])
        i++;
    }
    if(i<days.length){
     temp.push(days[i])
    }
    ans.push(temp)
    temp = []
  }
  return ans
}
