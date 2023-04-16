import React from "react";
import { Box, InputBase, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBox = styled(Box)`
  background: #fff;
  width: 38%;
  height : 36px;
  border-radius: 2px;
  margin-left: 10px;
  display: flex;
 

  //   box-shadow : #000  1px 1px 1px ;
`;
const InputSearchBox = styled(InputBase)`
  padding-left: 17px;
  width: 100%;
  font-size: 0.9rem;
  padding-top : 4px;
  padding-bottom : 0;
  input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
    color: #828282; opacity:1; 
}
`;
const SearchIconWrapper = styled(SearchIcon)`
  color: #2874f0;
  padding: 5px 7px  ;
`;

const Search = () => {
  // -------RETURN----------------
  return (
    <SearchBox>
      <InputSearchBox placeholder="Search for products, brands and more" />
      <SearchIconWrapper>
        <SearchIcon style={{ color: "#2874f0" }} />
      </SearchIconWrapper>
    </SearchBox>
  );
};
export default Search;
