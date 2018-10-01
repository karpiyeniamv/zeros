module.exports =  function getZerosCount(number) {
    res = 0;
    del=5;
    k= number/del;
    while (k>0.5)
    {
        // console.log( 'k='+k);
        // console.log( 'del='+del);
        // console.log( 'res='+res);
        res+= parseInt(k);
        del*=5;
        k=number/del;



    }
    return res;
};
