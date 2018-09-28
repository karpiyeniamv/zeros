module.exports = function getZerosCount(number) {
    var step =  parseInt( Math.log(number) / Math.log(5));
    var res = 0;
    // for (var i=1; i<step+1; i++)
    // {
    //     res+=1/(Math.pow(5,i));
    // }
    var i=1;
    //while (parseInt(number/(Math.pow(5,i)))>=2)
    while (i<step)
    {
        res+= 1/(Math.pow(5,i));
        
        i++;
    }
    res=res*10000000;
    res=parseInt(res);
    res=res/10000000;
    fact = Math.round (number* (res));
    return fact;
}

