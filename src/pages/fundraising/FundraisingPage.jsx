import { Helmet } from "react-helmet-async";
import FundraisingBanner from "./FundraisingBanner";
import JoinVoenture from "./JoinVoenture";
import { SponserSection } from "./SponserSection";

const FundraisingPage = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Helmet>
        <title>Virtuehope | Fundraising&involved</title>
      </Helmet>
      <FundraisingBanner></FundraisingBanner>
      <SponserSection></SponserSection>
      <JoinVoenture></JoinVoenture>
    </div>
  );
};

export default FundraisingPage;
