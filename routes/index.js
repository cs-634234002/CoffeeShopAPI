api_version=process.env.API_VERSION

module.exports = (app)=>{

    app.use(api_version +'/coffees', require('./coffees'));
    app.get('*', (req,res)=> {
        return res.status(404).send('Not Found !')
    });

}