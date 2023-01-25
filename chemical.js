
//import * as ions from './ions.mjs'
const positive_ions = ["sodium", "potassium", "magnesium", "calcium", "strontium", "barium", "aluminium","iron(ii)","iron(iii)","copper","zinc", "ammonium", "hydrogen"];

const positive_ion_letters = ["Na", "K", "Mg", "Ca", "Sr", "Ba", "Al","Fe","Fe","Cu","Zn", "NH3", "H"];

const negative_ions = ["chloride", "bromide", "iodide", "oxide", "hydroxide", "perchlorate", "nitrate", "acetate", "carbonate", "sulfate", "oxalate", "phosphate"];



const Insoluable_salt_list_names = [
    "magnesium oxide", "magnesium hydroxide", "magnesium phosphate",  //magnesiums
    "calcium fluoride", "calcium carbonate", "calcium phosphate", "calcium sulfate", "calcium oxalate", //calciums
    "strontium carbonate", "strontium sulfate", "strontium oxalate", //strontiums
    "barium carbonate", "barium sulfate", "barium oxalate", "barium phosphate",
    "aluminum oxide", "aluminum hydroxide", "aluminum oxalate", "aluminum phosphate",
    "iron(ii) oxide", "iron(ii) hydroxide", "iron(ii) carbonate", "iron(ii) oxalate", "iron(ii) phosphate",
    "iron(iii) oxide", "iron(iii) hydroxide", "iron(iii) acetate", 
    "copper oxide", "copper hydroxide", "copper carbonate", "copper oxalate", "copper phosphate",
    "zinc oxide", "zinc hydroxide", "zinc carbonate", "zinc oxalate", "zinc phosphate"             
];
//import * as salts from './salts.mjs'

exports.chemical = function(n){
    let ion_list = toIons(n);
    return possible_rxn_salts(ion_list);
}


function toIons(input)
{
    const split_array = input.split(" ")
    var  all_ions = true;
    var  return_list = [];

    for( var item of split_array ){
        //console.log(item);
        if(positive_ions.includes(item) || negative_ions.includes(item)) {
            return_list.push(item);  
        }
        else
        {
            console.log(`${item} is NOT on the list of known ions`);
            all_ions = false;
            return `${item} is NOT on the list of known ions`;

        }
    }

    if (all_ions == true){return return_list;} else {return false;}
}

function possible_rxn_salts(input_list)
{
if(input_list == false) {return false;}

var salt1, salt2;

salt1 = input_list[0] + " " + input_list[3];
salt2 = input_list[2] + " " + input_list[1];

console.log(`${salt1} is a possible reaction salt`);
console.log(`${salt2} is a possible reaction salt`);

if(Insoluable_salt_list_names.includes(salt1)){
    console.log(`${salt1} will precipitate out and leave ${salt2} in solution.`);
    return `${salt1} will precipitate out and leave ${salt2} in solution.` ;
    
}
else if(Insoluable_salt_list_names.includes(salt2)){
    console.log(`${salt2} will precipitate out and leave ${salt1} in solution.`);
    return`${salt2} will precipitate out and leave ${salt1} in solution.`
}
else {
    console.log('No reaction will occur.')
    return 'No reaction';
}
}