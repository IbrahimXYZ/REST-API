import express from 'express';

const router = express.Router();

const movies = [
    {   
        Id : "1",
        Name: "Spirited Away",
        Director: "Hayao Miyazaki",
        Writer : "Hayao Mizaki",
        Release : "20 July 2001",
        Running_Tme: "125 minutes",
        Box_Office : "$395.8 milion"
    },
    {   
        Id : "2",
        Name : "Howl's Moving Castle",
        Director : "Hayao Mizaki",
        Writer : "Diana Wynne Jones",
        Release : "20 November 2004",
        Running_Time : "119 minutes",
        Box_Office : "$236 million",

    },
    {   
        Id : "3",
        Name : "Princess Mononoke",
        Director : "Hayao Mizaki",
        Writer : "Hayao Mizaki",
        Release : "12 July 1997",
        Running_Time : "133 minutes",
        Box_Office : "$194.3 million"
    },
    {   
        Id : "4",
        Name : "My Neighbour Totoro",
        Director : "Hayao Mizaki",
        Writer : "Hayao Mizaki",
        Release : "16 April 1988",
        Running_Time : "",
        Box_Office : "$41 million"
    },
    {   
        Id : "5",
        Name : "Kiki's Delivery Service",
        Director : "Hayao Mizaki",
        Writer : "Eiko Kadono",
        Release : "29 July 1989",
        Running_Time : "103 minutes",
        Box_Office : "$41.8 million",
    },
    {   
        Id : "6",
        Name : "Castle In The Sky",
        Director : "Hayao Mizaki",
        Writer : "Hayao Mizaki",
        Release : "2 August 1986",
        Running_Time : "124 minutes",
        Box_Office : "$8 million",
    },
    {   
        Id : "7",
        Name : "Grave Of The Fireflies",
        Director : "Isao Takahata",
        Writer : "Akiyuki Nosaka",
        Release : "16 April 1988",
        Running_Time : "89 minutes",
        Box_Office : "$526,962",
    },
    {
        Id : "8",
        Name : "Whisper Of The Heart",
        Director : "Yoshifumi Kondo",
        Writer : "Aoi Hiragi",
        Release : "15 July 1995",
        Running_Time : "111 minutes",
        Box_Office : "$21.5 million",
    },
    {   
        Id : "9",
        Name : "Only Yesterday",
        Director : "Isao Takahata",
        Writer : "Isao Takahata",
        Release : "20 July 1991",
        Running_Time : "119 minutes",
        Box_Office : "$525,958",
    },
    {   
        Id : "10",
        Name : "Porco Rosso",
        Director : "Hayao Mizaki",
        Writer : "Hayao Mizaki",
        Release : "18 July 1992",
        Running_Time : "93 minutes",
        Box_Office : "$44.6 million",
    },
    {   
        Id : "11",
        Name : "Pom Poko",
        Director : "Hayao Mizaki",
        Writer : "Hayao Mizaki",
        Release : "16 July 1994",
        Running_Time : "119 minutes",
        Box_Office : "$30.3 million",
    },
    {   
        Id : "12",
        Name : "My Neighbours Of The Yamada",
        Director : "Isao Takata",
        Writer : "Isao Takata",
        Release : "17 july 1999",
        Running_Time : "103 minutes",
        Box_Office : "$11.91 million",
    },
    {   
        Id : "13",
        Name : "The Cat Returns",
        Director : "Hiroyuki Morita",
        Writer : "Reiko Yoshida",
        Release : "19 July 2002",
        Running_Time : "75 minutes",
        Box_Office : "",
    },
    {   
        Id : "14",
        Name : "Tales From Earthsea",
        Director : "Goro Miyazaki & Keiko Niwa",
        Writer : "Goro Miyazaki",
        Release : "29 July 2006",
        Running_Time : "115 minutes",
        Box_Office : "$75.5 million",
    },
    {   
        Id : "15",
        Name : "Ponyo",
        Director : "Hayao Miyazaki",
        Writer : "Hayao miyazaki",
        Release : "19 July 2008",
        Running_Time : "101 minutes",
        Box_Office : "$204.8 million",
    },
    {   
        Id : "16",
        Name : "Arriety",
        Director : "Hayao Miyazaki & Keiko Niwa",
        Writer : "Hiromasa Yonebayashi",
        Release : "17 July 2019",
        Running_Time : "94 minutes",
        Box_Office : "$146 million",
    },
    {   
        Id : "17",
        Name : "From Up On Poppy Hill",
        Director : "Hayao Miyazaki & Keiko Niwa",
        Writer : "Goro Miyazaki",
        Release : "16 July 2011",
        Running_Time : "91 minutes",
        Box_Office : "$61.5 million",
    },
    {   
        Id : "18",
        Name : "The Wind Rises",
        Director : "Hayao Miyazaki",
        Writer : "Hayao Miyazaki",
        Release : "20 July 2013",
        Running_Time : "126 minutes",
        Box_Office : "20 July 2013",
    },
    {   
        Id : "19",
        Name : "The Tale Of The Priness Kaguya",
        Director : "Isao Takahata & Riko Sakaguchi",
        Writer : "Isao Takahata",
        Release : "23 November 2013",
        Running_Time : "137 minutes",
        Box_Office : "$27 million",
    },
    {   
        Id : "20",
        Name : "When Marnie Was There",
        Director : "Hiroamsa Yonebayashi, Keiko Niwa & Masashi Ando",
        Writer : "Hiromasa Yonebayashi",
        Release : "19 July 2014",
        Running_Time : "102 minutes",
        Box_Office : "$36 million",
    },
    {   
        Id : "21",
        Name : "The Boy And The Heron",
        Director : "Hayao Miyazaki",
        Writer : "Hayao Miyazaki",
        Release : "14 July 2023",
        Running_Time : "125 minutes",
        Box_Office : "$52.6 million",
    }
    

]

router.get('/',(req,res)=>{
    console.log("hi")
    res.send(movies)
})

router.get('/movie_id/:id',(req,res)=>{
    console.log(111)
    var movie = movies[req.params.id]
    res.send(movie)

})

router.get('/movie_name/:name',(req,res)=>{
    console.log(211)
    const searchIndex = movies.findIndex((movie) => movie.Name == req.params.name)
    res.send(movies[searchIndex])

})







export default router;