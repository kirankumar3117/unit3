let details={
    surname:'challagiri',
    grandpha:'sharabbaya',
    grandmoth:'parvathi',
}

let parents=Object.create(details);

//which creates an objects with my grandpha details

parents.father='brahmarao'
parents.mother='madhavi'
parents.brother='sai';

console.log(parents.grandpha)