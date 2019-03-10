module.exports = function(app, express, friends) {
    app.use(express.urlencoded({ extended: true}));
    app.use(express.json());

    //API ROUTING GET METHODS
    app.get("/friends", (req, res)=>{
        return res.json(friends)
    })
   
    //API ROUTING POST METHODS
    app.post("/data/friends", (req, res)=>{

        const newBooking = req.body;

        console.log(newBooking)

        friends.push(newBooking)

        res.json(newBooking)
    })
}