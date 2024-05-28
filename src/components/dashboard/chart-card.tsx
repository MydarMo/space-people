// src/components/FinancialDashboard.js
import { Card, CardBody, CardHeader, Heading, Text } from "@chakra-ui/react";
import React, { FC} from "react";
import { Person } from "../../interfaces/person";

interface ChartCardProps {
    person: Person
}
export const ChartCard: FC<ChartCardProps> = (props) => {
  const { person } = props;

  return (
    <Card>
      <CardHeader>
        <Heading size="md">{person.name}</Heading>
        <Text pt="2" fontSize="sm">
          {`Height: ${person.height}`}
        </Text>
      </CardHeader>
      <CardBody>
      <Text pt="2" fontSize="sm">
          {`Gender: ${person.gender}`}
        </Text>
        <Text pt="2" fontSize="sm">
          {`Hair Color: ${person.hair_color}`}
        </Text>
        <Text pt="2" fontSize="sm">
          {`Skin color: ${person.skin_color}`}
        </Text>
      </CardBody>
    </Card>
  );
};
