import React from 'react'
import classes from "./MatchesCard.module.css"

function MatchCard() {
  return (
    <div><div className={classes.card} >
      <div className={classes.cardday}>
        <p>Tues</p>
        <span>23 dec</span>
      </div>
      <div className={classes.cardheaders}>
        <p>ElAhly VS ElZamalek</p>
        <span> 19:30 - in masr stadium </span>
        <span className={classes.ticketsleft}>Noticket left</span>
      </div>
      <div className={classes.cardprice} ><span className={classes.spanprice}> 300£</span></div>
    </div></div>
  )
}

export default MatchCard