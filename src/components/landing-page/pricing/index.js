import React, { useState } from "react"
import {
  Container,
  PriceHeader,
  ToggleSub,
  PriceTable,
  PriceCard,
  SubName,
  Price,
  SelectBtn,
  Switch,
} from "./style"
import CardsImg from "assets/cards.png"

export const Pricing = () => {
  const [togglePrice, setTogglePrice] = useState(true)

  return (
    <Container id="pricing">
      <PriceHeader>
        <h1>Pricing</h1>
        <ToggleSub>
          <h5 className={togglePrice === true ? "selected" : null}>
            Pay Monthly
          </h5>
          <Switch>
            <input
              type="checkbox"
              onChange={() => setTogglePrice(!togglePrice)}
            />
            <span className="slider round"></span>
          </Switch>
          <h5 className={togglePrice === false ? "selected" : null}>
            Pay Annually
          </h5>
        </ToggleSub>
        {/*      <img src={CardsImg} alt="two cards" /> */}
      </PriceHeader>
      <PriceTable>
        <PriceCard>
          <SubName>
            <h3>Gold 🥇</h3>
            <p>
              Up to <strong>infinity</strong> students
            </p>
          </SubName>
          <Price>
            <h5>{(togglePrice && "Free") || "And Free"} €</h5>
            <p>/ {(togglePrice && "month") || "year"}</p>
          </Price>
          <SelectBtn>Select Plan</SelectBtn>
        </PriceCard>
        <PriceCard>
          <SubName>
            <h3>Gold 💎</h3>
            <p>It's really free!</p>
          </SubName>
          <Price>
            <h5>{(togglePrice && "Free") || "Free"} €</h5>
            <p>/ {(togglePrice && "month") || "year"}</p>
          </Price>
          <SelectBtn highlight>Select Plan</SelectBtn>
        </PriceCard>
      </PriceTable>
    </Container>
  )
}
