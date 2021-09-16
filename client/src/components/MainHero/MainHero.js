import React from "react";
import "./MainHero.css";
import animals from "../../assets/images";
import { Container } from "reactstrap";
import { useQuery, gql } from "@apollo/client";

const FETCH_MAIN_CARD = gql`
  query Query {
    mainCards {
      image
      title
    }
  }
`;
function MainHero() {
  const { loading, error, data } = useQuery(FETCH_MAIN_CARD);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error Happened</div>;

  return (
    <div className="MainHero">
      <Container>
        <div className="header-container">
          <h2>
            Find your <br /> new four-legged <br /> best friend
          </h2>
          <img src={animals.rhino} />
        </div>
        <div className="cards-container">
          {data.mainCards.map((card, index) => {
            return (
              <div className="card" key={index}>
                <h3>{card.title}</h3>
                <img src={animals[card.image]} style={{ width: "100%" }} />
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default MainHero;
