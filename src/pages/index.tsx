import { Link } from "react-router-dom";
import { BlueSmiley } from "../assets/icons/bluesmiley-icon";
import { LandingWelcomeIcon } from "../assets/icons/landing-welcome-icon";
import ButtonAtom from "../components/button/button-atom";
import { ParagraphAtom } from "../components/paragraph/paragraph-atom";

const LandingPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="mx-auto max-w-[1150px] w-full px-4">
        <div className="grid sm:grid-cols-2 grid-cols-1 items-center">
          <div>
            <BlueSmiley />
            <ParagraphAtom className="mt-5 font-degular-black text-[88px] font-[900]">
              Givva.
            </ParagraphAtom>
            <ParagraphAtom className="text-5xl mt-5 font-degular-semi-bold font-semibold text-primary">
              Find the perfect gift <br /> in seconds!
            </ParagraphAtom>

            <div className="mt-10">
              <Link to="/curations">
                <ButtonAtom title="Get started" />
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <LandingWelcomeIcon className="w-[600px] h-[600px]" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
