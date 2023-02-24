const e = require('express');
const db = require('../db/index');

const getList = ()=>{
    let list = [];
    let findsql = 'SELECT * FROM back';

    return new Promise((resolve, reject) => {
        db.query(findsql, (err, res) => {
            if (err) {
                reject(err);
            } else {
                for(let data of res){
                    list.push(JSON.parse(JSON.stringify(data)));
                }
                resolve(list);
            }
        })
    })
}

module.exports = {
    load: async()=>{
        const response = await getList();
        return response;
    },
};