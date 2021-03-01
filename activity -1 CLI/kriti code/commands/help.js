function helperfn(){
    console.log(`List of all the commands:
    node mycli.js view <dirname> flat
    node mycli.js view <dirnname> tree
    node mycli.js organsze <dirname>
    node mycli.js oraganize 
    node mycli.js help`);
}

module.exports={
    fn:helperfn
}