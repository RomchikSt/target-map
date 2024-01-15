import styled from "styled-components";
import { motion } from "framer-motion";
import { searchInputVariants } from "../animations/variants";
import { useTranslation } from "react-i18next";

const SearchContainer = styled(motion.div)`
  position: absolute;
  display: flex;
  z-index: 999;
  align-items: center;
  border: 1px solid #111111;
  background-color: #fef2f2;
  padding: 0.5rem 0 0.5rem;
  margin-left: 1rem;
  box-shadow: 0 0.1rem 1.2rem #111111;
  border-radius: 5rem;
`;

const StyledInput = styled.input`
  height: 2.7rem;
  padding: 0.5rem;
  border: none;
  background-color: transparent;
  color: #111111;
  text-indent: 3rem;

  &:focus {
    outline: none;
  }
`;

type SearchInputProps = {
  onClick?: () => void;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
};

function SearchInput({ top, left, right, bottom, onClick }: SearchInputProps) {
  const { t } = useTranslation();
  return (
    <SearchContainer
      variants={searchInputVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{ top, left, right, bottom }}
    >
      <StyledInput
        type="text"
        id="search"
        name="search"
        placeholder={t("search")}
      />
    </SearchContainer>
  );
}

export default SearchInput;
