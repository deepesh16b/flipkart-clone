import React, { useEffect, useState } from "react";
import {
  Box,
  InputBase,
  styled,
  createTheme,
  useMediaQuery,
  List,
  ListItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./../../redux/actions/productsAction";
import {Link} from 'react-router-dom';

const SearchBox = styled(Box)(({ theme }) => ({
  background: "#fff",
  width: "38%",
  height: "36px",
  borderRadius: "2px",
  marginLeft: "10px",
  display: "flex",
  [theme.breakpoints.down("md")]: {
    position: "absolute",
    left: 0,
    right: 0,
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

const ListWrapper = styled(List)`
  color: #000;
  background: #ffffff;
  position: absolute;
  margin-top: 40px;
`;
const Search = () => {
  const theme = createTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("md"));
  const [text, setText] = useState("");
  const getText = (text) => {
    setText(text);
  };
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.getProducts);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  // -------RETURN----------------
  return (
    <SearchBox>
      <InputSearchBox
        placeholder="Search for products, brands and more"
        value={text}
        onChange={(e) => getText(e.target.value)}
      />
      {isMobileView ? null : (
        <SearchIconWrapper>
          <SearchIcon style={{ color: "#2874f0" }} />
        </SearchIconWrapper>
      )}
      {text && (
        <ListWrapper>
          {products
            .filter((product) =>
              product.title.longTitle.toLowerCase().includes(text.toLowerCase())
            )
            .map((product) => (
              <ListItem>
                <Link to={`/product/${product.id}`} onClick={()=>setText('')} style={{color : "inherit", textDecoration : "none"}}>
                  {product.title.longTitle.substring(0,80) }
                </Link>
              </ListItem>
            ))}
        </ListWrapper>
      )}
    </SearchBox>
  );
};
export default Search;
