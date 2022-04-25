import { FormControl } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { Modal, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import Search from "./Search.js";
import styled from "styled-components";

const SearchModal = ({ show, close }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = (e) => {
    if(e.target.value){
    setSearchInput(e.target.value);
    }
    else{
      setSearchInput("")
    }
  };

  return (
    <Modal size="xl" show={show} onHide={() => {close(); setSearchInput("")}}>
      <Modal.Header closeButton>
        <Modal.Title>
          <InputGroup className="mb-3">
            <InputGroup.Text id="search">
              <FaSearch />
            </InputGroup.Text>
            <FormControl
              placeholder="search"
              tupe="text"
              aria-label="search"
              aria-describedby="search"
              onChange={handleSearchInput}
            />
          </InputGroup>
        </Modal.Title>
      </Modal.Header>
      <ModalBodyWrapper>
        <Modal.Body className="show-grid">
          <Search searchInput={searchInput} />
        </Modal.Body>
      </ModalBodyWrapper>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => {close(); setSearchInput("")}}>
          Close
        </Button>

      </Modal.Footer>
    </Modal>
  );
};
const ModalBodyWrapper = styled.div`
.show-grid{
  display: flex;
  justify-content: space-around;
}
`;
export default SearchModal;
