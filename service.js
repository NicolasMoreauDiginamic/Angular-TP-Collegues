import fetch from 'node-fetch';

export class Service{

    async getCollegues(){
        const res = await fetch(
            'https://formation-angular-collegues.herokuapp.com/api/v1/collegues');
        return await res.json();
    }
}