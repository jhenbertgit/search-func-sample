import React, { useState } from "react";
import { Col, Container, Row, Input, Button } from "reactstrap";

function App() {
  const [search, setSearch] = useState("");

  const data = [
    { brgy: "Dapdap", mun: "Tigbauan", prov: "Iloilo", bdpStatus: "non-bdp" },
    {
      brgy: "Pob Dos",
      mun: "Bansalan",
      prov: "Davao del Sur",
      bdpStatus: "bdp",
    },
  ];
  const searchByBrgy = (brgy) => {
    return data.filter((item) => item.brgy === brgy);
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    const searchRes = searchByBrgy(search);

    if (searchRes.length > 0) {
      searchRes.forEach((result) => {
        console.log(`Brgy. ${result.brgy}, is a ${result.bdpStatus} barangay.`);
      });
    } else {
      console.log(`No results found for ${search}`);
    }
  };

  return (
    <Container>
      <Row>
        <Col className="mt-5 d-flex justify-content-center">
          <Input type="search" className="me-3" onChange={handleChange} />
          <Button onClick={handleClick}>Search</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
