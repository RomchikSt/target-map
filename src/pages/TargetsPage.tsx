import styled from "styled-components";
import Map from "../components/Map";
import TopLeftButtons from "../components/TopLeftButtons";
import TopRightsButtons from "../components/TopRightsButtons";
import BottomRightButtons from "../components/BottomRightButtons";

const PageContainer = styled.div`
  position: relative;
`;

function TargetsPage() {
  return (
    <PageContainer>
      <Map />
      <TopLeftButtons />
      <TopRightsButtons />
      <BottomRightButtons />
    </PageContainer>
  );
}

export default TargetsPage;
