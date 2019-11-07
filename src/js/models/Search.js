// https://www.food2fork.com/api/search
// 1e5f7a74e8e75669e9909210e1830349
import axios from 'axios'; // axios automatically returns json

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const key = '1e5f7a74e8e75669e9909210e1830349';
        try {
            const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`); // returns an Object
            //const res = await axios(`https://forkify-api.herokuapp.com/api/search?q=${query}`);
            this.result = res.data.recipes;
            console.log(this.result); // an array of objects
        } catch(error) {
            alert(error);
        } 
    }
}


