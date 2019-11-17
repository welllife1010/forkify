// https://www.food2fork.com/api/search
// 1e5f7a74e8e75669e9909210e1830349
import axios from 'axios'; // axios automatically returns json
import { key, proxy } from '../config';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        try {
            //const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`); // returns an Object
            const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);
            this.result = res.data.recipes;
            console.log(this.result); // an array of objects
        } catch(error) {
            alert(error);
        } 
    }
}


