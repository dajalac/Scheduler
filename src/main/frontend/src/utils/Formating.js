
export const formatName = (name) =>{
    const nameArray = name.split(' ');

    const nameFormated = nameArray.map(array =>{
                    return array.charAt(0)+array.slice(1).toLowerCase(); 
    })
   

   return nameFormated.join(' ');

}