import React from "react";
import Cultural_card from "@/components/cultural/Cultural_card";
import Navbaar from "@/components/layout/Navbaar";

const page = () => {
  return (
    <div>
      <Navbaar/>
      <div className="container mx-auto ">
        <div className="text-center text-5xl my-16 font-bold underline font-mono">
          Cultural Events
        </div>
        <div className="grid px-4 gap-x-6 place-items-center gap-y-10 sm:grid-cols-3">
          <div>
            <Cultural_card
              name="Calligraphy"
              img="/cultural/Calligraphy/1.jpg"
              linkUrl="/cultural/calligraphy"
            />
          </div>
          <div>
            <Cultural_card
              name="Painting"
              img="/cultural/Painting/1.jpeg"
              linkUrl="/cultural/painting"
            />
          </div>
          <div>
            <Cultural_card
              name="Flashmob"
              img="/cultural/Flashmob/1.jpeg"
              linkUrl="/cultural/flashmob"
            />
          </div>
          <div>
            <Cultural_card
              name="Diya_decoration"
              img="/cultural/Diya_decoration/1.jpg"
              linkUrl="/cultural/diya_decoration"
            />
          </div>
          <div>
            <Cultural_card
              name="Nukkad_natak"
              img="/cultural/Nukkad_natak/1.jpeg"
              linkUrl="/cultural/nukkad_natak"
            />
          </div>
          <div>
            <Cultural_card
              name="Singing"
              img="/cultural/Singing/1.jpg"
              linkUrl="/cultural/singing"
            />
          </div>
          <div>
            <Cultural_card
              name="Stand_up_comedy"
              img="/cultural/Stand_up_comedy/1.jpg"
              linkUrl="/cultural/stand_up_comedy"
            />
          </div>
          <div>
            <Cultural_card
              name="Openmic"
              img="/cultural/Openmic/1.jpg"
              linkUrl="/cultural/openmic"
            />
          </div>
          <div>
            <Cultural_card
              name="Sketching"
              img="/cultural/Sketching/3.png"
              linkUrl="/cultural/sketching"
            />
          </div>
          <div>
            <Cultural_card
              name="Theme_based"
              img="/cultural/Theme_based/1.jpg"
              linkUrl="/cultural/theme_based"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
