// src/components/Overview.js
import React, { useEffect, useState } from "react";
import { Box, HStack } from "@chakra-ui/react";
import { ChartCard } from "./chart-card";
import { Person } from "../../interfaces/person";
import { getPeople } from "../../services/api";

const Overview = () => {
  const [data, setData] = useState<Person[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const fetchedData = await getPeople();
        setData(fetchedData.results);
      } catch (error: any) {
        setError(error.message);
      }
    };
    getData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <HStack spacing="24px">
      {data.map((person: Person, index: number) => {
        return (
          <Box key={index} w="400px" data-testid="overview-stack">
            <ChartCard person={person} />
          </Box>
        );
      })}
    </HStack>
  );
};

export default Overview;
