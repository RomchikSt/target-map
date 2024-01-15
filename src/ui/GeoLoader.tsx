import { Radio } from "react-loader-spinner";
import styled from "styled-components";

const LoaderContainer = styled.div`
  margin-left: 0.2rem;
`;

function GeoLoader() {
  return (
    <LoaderContainer>
      <Radio
        visible={true}
        height="30"
        width="30"
        ariaLabel="radio-loading"
        wrapperStyle={{}}
        wrapperClass="
          "
      />
    </LoaderContainer>
  );
}

export default GeoLoader;
