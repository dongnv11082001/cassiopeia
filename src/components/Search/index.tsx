import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

type SearchProps = {
  onShow: boolean;
};

function Search({ onShow }: SearchProps) {
  const [seacrhInput, setSearchInput] = useState("");
  
  return (
    <div>
      {onShow && (
        <HeaderInput
          type="text"
          className="header__search"
          placeholder="Search"
          value={seacrhInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      )}
    </div>
  );
}

const slideIn = keyframes`
    0% {
        width: 0%;
        transform: translateX(0);
    }
    100% {
        width: 100%;
    }
`;

const HeaderInput = styled.input`
  outline: none;
  border: solid #000;
  border-width: 0 0 2px;
  width: 100%;
  animation: ${slideIn} 0.5s ease;
`;

export default Search;
