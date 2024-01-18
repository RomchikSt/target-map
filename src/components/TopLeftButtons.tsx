import StandartMapButton from "../ui/StandartMapButton";
import { selectFilter } from "../features/map/mapSelectors";
import { useDispatch, useSelector } from "react-redux";
import { mapActions } from "../features/map/mapSlice";
import SearchInput from "../ui/SearchInput";
import { FaSearch } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";

function TopLeftButtons() {
  const dispatch = useDispatch();
  const searchOpen = useSelector(selectFilter);

  const handleOpenSearch = () => {
    dispatch(mapActions.setFilter(!searchOpen));
  };

  return (
    <>
      <StandartMapButton top={"3rem"} left={"2rem"} onClick={handleOpenSearch}>
        <FaSearch size={"2rem"} />
      </StandartMapButton>
      <AnimatePresence>
        {searchOpen && <SearchInput top={"3.1rem"} left={"2rem"} />}
      </AnimatePresence>
    </>
  );
}

export default TopLeftButtons;
