import express from 'express';

const router = express.Router();

const movies = [
    {
        Name: "Spirited Away",
        Director: "Hayao Miyazaki",
        Writer : "Hayao Mizaki",
        Release : "20 July 2001"
    },
    {
        Name : "Howl's Moving Castle",
        Director : "Hayao Mizaki",
        Writer : "Diana Wynne Jones",
        Release : "20 November 2004"

    },
    {
        Name : "Princess Mononoke",
        Director : "Hayao Mizaki",
        Writer : "Hayao Mizaki",
        Release : "12 July 1997",
        Box_Office : "$"
    },
    {
        Name : "My Neighbour Totoro",
        Director : "Hayao Mizaki",
        Writer : "Hayao Mizaki",
        Release : "16 April 1988",
        Box_Office : "$41 million"
    },
    {
        Name : "Kiki's Delivery Service",
        Director : "Hayao Mizaki",
        Writer : "Eiko Kadono",
        Release : "29 July 1989",
        Running_Time : "103 minutes",
        Box_Office : "$41.8 million",
    },
    {
        Name : "",
        Director : "",
        Writer : "",
        Release : "",
        Running_Time : "",
        Box_Office : "",
    },
    
]

router.get('/',(req,res)=>{
    console.log(movies)
    res.send(movies)
})

export default router;