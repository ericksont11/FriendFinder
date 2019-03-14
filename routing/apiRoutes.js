module.exports = function(app, express, friends) {
    app.use(express.urlencoded({ extended: true}));
    app.use(express.json());

    //API ROUTING GET METHODS
    app.get("/api/friends", (req, res)=>{
        return res.json(friends)
    })
   
    //API ROUTING POST METHODS
    app.post("/data/friends", (req, res)=>{

        const newFriend = req.body;

        console.log(newFriend)

        friends.push(newFriend)

        res.json(newFriend)
    })
}