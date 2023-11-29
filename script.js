const game = {
    team1: 'Bayern Munich', 
    team2: 'Borrussia Dortmund',
    players: [
    [
         'Neuer',
          'Pavard',
          'Martinez',
          'Alaba',
          'Davies',
          'Kimmich',
          'Goretzka',
          'Coman',
          'Muller',
          'Gnarby',
          'Lewandowski',
    ],
     [
    
          'Burki',
          'Schulz',
          'Hummels',
          'Akanji',
          'Hakimi',
          'Weigl',
          'Witsel',
          'Hazard',
          'Brandt',
          'Sancho',
          'Gotze',
    ], 
],
    
      score: '4:0',
      scored: ['Lewandowski', 'Gnarby', 'Lewandowski','Hummels'],
      date: 'Nov 9th, 2037',
      odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    }, };
    //////---------1-------------/////
    //her kamandanin oyunculari ucun ayrica array yaradin:team1 ve team2 adinda 
    let [team1,team2]=game.players
    console.log(team1,team2)
    //////---------2------------///////
    //birinci komandanin birinci oyuncusu qapicidir.Onu first adli deyisene teyin edin.
    //diger futbolcular a adli arrayda qalsin(rest operatoru)
    let [first,...a]=team1
    console.log(first)
    console.log(a)
    //////---------3------------///////
    //butun oyunculari allplayers adli arrayda saxliyin (22 nefer)
    let allplayers=[...team1,...team2]
    console.log(allplayers)
    //////---------4-----------////////
    //oyunda birinci komanda 3 deyisiklik olub,firrstfinalplayers adli arraya ilkin heyeti ve playin icindeki adlari elave edin
    let play=["Thiago","Perisic","Cout"]
    let firstfinalplayers=[...team1,...play]
    console.log(firstfinalplayers)
    //////----------5-----------///////
    //odds adli obyektin deyisenlerini team1win draw team2win adli deyisenlere menimsedin
    //(nestede objects destructing yda sal)
    let {team1:team1win,x:draw,team2:team2win}=game.odds
    console.log(team1win,draw,team2win)

    //////----------6------------///////
    //emsali az olan komandanin udma ehtimali coxdur ,if else turnery yazma."birinci komanda udmaqa daha yaxindir","ikinci komanda udmaqa daha yaxindir" konsola cixardin
    team1win<team2win && console.log("birinci komanda udmaqa daha yaxindir");
    team1win>team2win && console.log("ikinci komanda udmaqa daha yaxindir");


    