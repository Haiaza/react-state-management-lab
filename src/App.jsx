// src/App.jsx

import { useEffect, useState } from "react";
import './App.css'

const App = () => {

  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState(
    [
      {
        name: 'Survivor',
        price: 12,
        strength: 6,
        agility: 4,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV1Do2p7W6GAZVo1b2WZoCcI5AxNkbALWKKA&s',
      },
      {
        name: 'Scavenger',
        price: 10,
        strength: 5,
        agility: 5,
        img: 'https://thumbs.coleka.com/media/item/20160309/minifigurines-lego-star-wars-jawa-002_250x250.webp',
      },
      {
        name: 'Shadow',
        price: 18,
        strength: 7,
        agility: 8,
        img: 'https://deathbymage.com/wp-content/uploads/2015/08/thedm.jpg?w=250',
      },
      {
        name: 'Tracker',
        price: 14,
        strength: 7,
        agility: 6,
        img: 'https://enshrouded.wiki.gg/images/thumb/4/4b/Hunter.png/250px-Hunter.png',
      },
      {
        name: 'Sharpshooter',
        price: 20,
        strength: 6,
        agility: 8,
        img: 'https://ke-courses-production.s3.amazonaws.com/asset_files/production/862/attachments/original/firearm_safety.jpg?1497618269',
      },
      {
        name: 'Medic',
        price: 15,
        strength: 5,
        agility: 7,
        img: 'data:image/jpeg;base64,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',
      },
      {
        name: 'Engineer',
        price: 16,
        strength: 6,
        agility: 5,
        img: 'https://bricksandgo.com/8713-home_default/lego-cty0877-minifigure-city-woman-miner-engineer.jpg',
      },
      {
        name: 'Brawler',
        price: 11,
        strength: 8,
        agility: 3,
        img: 'https://ssb.wiki.gallery/images/thumb/e/e4/Mii_Brawler_SSBU.png/250px-Mii_Brawler_SSBU.png',
      },
      {
        name: 'Infiltrator',
        price: 17,
        strength: 5,
        agility: 9,
        img: 'https://gotwarcraft.com/wp-content/uploads/2012/06/Gnome-Rogue.jpg',
      },
      {
        name: 'Leader',
        price: 22,
        strength: 7,
        agility: 6,
        img: 'https://multiversitystatic.s3.amazonaws.com/uploads/2024/04/TWD-The-Ones-Who-Live-The-Last-Time-250x250.jpg',
      },
    ]
  );


  useEffect(() => {
    console.log(`Current money: ${money}`)
  }, [money])

  useEffect(() => {
    console.log(team)
  }, [team])

  const handleAddFighter = (zombieFighter) => {
    const economy = money - zombieFighter.price

    if (zombieFighter.price > money) {
      console.log('More gold required')
      return
    }
    
    console.log('You have enough gold.')
    setMoney(economy)
    setTeam([...team, zombieFighter])
    
    //the team and money state arent accurate but they do update
  }




  return (
  <>   
  <p>Current gold count: {money}</p>
  {team.length === 0 ? <h1>Recruit some Fighters</h1> : null}
  {team.length > 0 ? team.map((member) => (
    <div>
      <li className="squad">
        <p>{member.name}</p>
        <img className="smaller" src={member.img} alt="mini super badass zombie fighter" />
      </li>
    </div>
  ))
  : null
  }
    <ul>
        {zombieFighters.map((zombieFighter) => 
        <li>
          <h1>{zombieFighter.name}</h1>
          <img src={zombieFighter.img} alt="super badass zombie fighter" />
          <p>Stat:<strong>Strength:{zombieFighter.strength}</strong></p>
          <p>Stat:<span>Agility:{zombieFighter.agility}</span></p>
          <button onClick={() => handleAddFighter(zombieFighter)}>Add</button>
        </li>
        )}
    </ul>
    </>
  );
}

export default App
