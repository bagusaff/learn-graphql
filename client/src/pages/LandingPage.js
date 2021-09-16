import React from "react";
import MainHero from "../components/MainHero/MainHero";
import CategoryDisplay from "../components/CategoryDisplay/CategoryDisplay";
import CardDisplay from "../components/CardDisplay/CardDisplay";
import { useQuery, gql } from "@apollo/client";

const ANIMAL_QUERY = gql`
  query Query {
    animals {
      id
      title
      image
      price
      slug
    }
  }
`;

function LandingPage() {
  const { loading, error, data } = useQuery(ANIMAL_QUERY);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error Happened</div>;

  return (
    <div>
      <MainHero />
      <CategoryDisplay />
      <CardDisplay animals={data.animals} />
    </div>
  );
}

export default LandingPage;
