// src/App.jsx

import { useEffect, useState } from "react";
import './App.css'

const App = () => {

  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStr, setTotalStr] = useState(0)
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
        img: 'https://i1.sndcdn.com/artworks-FRIqYPtESjPf6jwJ-mEXsUg-t500x500.jpg',
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
    <div className="squa">
      <li className="squad">
        <h2>{member.name}</h2>
        <img className="smaller" src={member.img} alt="mini super badass zombie fighter" />
        <p>Cost:{member.price}</p>
        <p>Str:{member.strength}</p>
        <p>Agi{member.agility}</p>
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
