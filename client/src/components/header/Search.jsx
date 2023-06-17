import React from "react";
import { Box, InputBase, styled,   createTheme, useMediaQuery } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBox = styled(Box)(({ theme }) => ({
  background: "#fff",
  width: "38%",
  height: "36px",
  borderRadius: "2px",
  marginLeft: "10px",
  display: "flex",
  [theme.breakpoints.down("md")]: {
    position: "absolute",
    left : 0,
    right : 0,
    width: "94vw",
    margin: "100px auto 0 auto",
  },
}));

const InputSearchBox = styled(InputBase)`
  padding-left: 17px;
  width: 100%;
  font-size: 0.9rem;
  padding-top: 4px;
  padding-bottom: 0;
  input::-webkit-input-placeholder,
  textarea::-webkit-input-placeholder {
    color: #828282;
    opacity: 1;
  }
`;
const SearchIconWrapper = styled(SearchIcon)`
  color: #2874f0;
  padding: 5px 7px;
`;

const Search = () => {
  const theme = createTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("md"));
  // -------RETURN----------------
  return (
    <SearchBox>
      <InputSearchBox placeholder="Search for products, brands and more" />
      {isMobileView ? null : (
        <SearchIconWrapper>
          <SearchIcon style={{ color: "#2874f0" }} />
        </SearchIconWrapper>
      )}
    </SearchBox>
  );
};
export default Search;
