import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'process';
const rl = readline.createInterface({ input, output });

export class Presentation{

    constructor(service){
        this.service = service;
    }

    demarrer(){
        console.log('** Administration Collegue **');
        console.log('1. Lister les collégues');
        console.log('99. Sortir');

        rl.question('Que voulez vous faire ? ', (answer) => {
            switch (answer) {
                case "1" :
                    console.log('>> Liste des collègues')
                    this.service.getCollegues()
                        .then(tab =>{
                            for(const col of tab){
                                console.log(col.nom, col.prenom);
                            }
                            this.demarrer();
                        })
                        .catch(err => {
                            console.log('Error',err);
                        });
                    break;
                case "99" :
                    console.log('Au revoir');
                    rl.close();
                    break;
                default :
                    console.log("Votre choix n'existe pas!");
                    this.demarrer();
                    break;
            }
        });
    }
}
