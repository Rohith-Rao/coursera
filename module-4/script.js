var array=new Array();
array[0]="Yaakov";
array[1]="Jhon";
array[2]="Jakson";
array[3]="mason";
array[4]="tylor";
array[5]="jimmy";
array[6]="bell";
array[7]="sybil";
array[8]="jacky";
array[9]="roy";
array[10]="ricky";
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (array[index].charAt(0)=="j" || array[index].charAt(0)=="J" ) {
        console.log("Good Bye "+array[index]);
    }
    else
    {
        console.log("Hello "+array[index]);
    }
}