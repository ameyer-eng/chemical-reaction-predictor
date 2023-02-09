
// Make it return an array with links and salt names. 




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

salt1_link = to_wiki_link(input_list[0], input_list[3]);
salt2_link = to_wiki_link(input_list[2], input_list[1]);


to_wiki_link(input_list[0], input_list[3]);

console.log(`${salt1} is a possible reaction salt`);
console.log(`${salt2} is a possible reaction salt`);

if(Insoluable_salt_list_names.includes(salt1)){
    console.log(`${salt1} will precipitate out and leave ${salt2} in solution.`);
    
    return [true, salt1, salt1_link, salt2, salt2_link];
    
}
else if(Insoluable_salt_list_names.includes(salt2)){
    console.log(`${salt2} will precipitate out and leave ${salt1} in solution.`);
    return [true, salt2, salt2_link, salt1, salt1_link];
}
else {
    console.log('No reaction will occur.')
    return [false, null, null];
}
}

function to_wiki_link(ion1, ion2){
    //convert ion1 first letter to upper case
    if(ion1 === 'copper'){
        ion1 = 'copper(II)';
    }
    ion1_upper = ion1[0].toUpperCase() + ion1.slice(1);

    const wiki_base = `https://en.wikipedia.org/wiki/`
    let chemical_result = ion1_upper +'_' + ion2;
    //let link_txt = ion1_upper + ' ' + ion2;

    let wiki_url = wiki_base + chemical_result;





    //console.log();
    return wiki_url;
}