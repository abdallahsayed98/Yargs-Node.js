const request = require('request')
const { argv } = require('yargs')
const yargs = require('yargs')
const  url ='https://jsonplaceholder.typicode.com/'
const getApi = (data,cb)=>{
    
    //console.log(url);
    if(data==="posts"||data==="users"||data==="comments"||data==="albums"||data==="photos"||data==="todos"){
        fullUrl = url+data
        request({ url:fullUrl, json:true },(err, {body})=>{
            if(err) cb(err, false)
            else cb(false, body)
        })
    }
    else {
        console.log("you want type of data not founded");
    }
    
}

/*getApi((err,data)=>{
    if(err) console.log(err)
    else console.log(data)
})*/

yargs.command({
    command:"read",
    describe: 'read api data',
    builder: {
        key: { demandOption: true  ,type: 'string' },
    },
    handler: function () {
        getApi(argv.key,(err,data)=>{
            if(err) console.log(err)
            else console.log(data)
        })
    }
})

yargs.argv