import React from "react";
import Mail from "./mail";
import MarqueeOne from "./marquee-one";
import MarqueeTwo from "./marquee-two";
import WtfRuchitRed from "./svgs/wtf-ruchit-red";
import BlackStar from "./svgs/black-star";
import Marquee from "react-easy-marquee";
import BlackStartMobile from "./svgs/black-start-mobile";

export default function Glimpse() {
  return (
    <>
      <main className="relative">
        <div className="lg:hidden absolute inset-10 -left-10">
          <Marquee
            className="marquee-two"
            duration={10000}
            background="#B7D500"
            width="100%"
            height="35px"
          >
            <main className="w-full h-20 lg:h-20 bg-[#B7D500] flex items-center justify-center gap-x-5">
              <h1 className="text-black text-lg main-font">COMING SOON</h1>
              <BlackStartMobile />
              <h1 className="text-black text-lg main-font">COMING SOON</h1>
              <BlackStartMobile />

              <h1 className="text-black text-lg main-font">COMING SOON</h1>
              <div className="pr-5">
                <BlackStartMobile />
              </div>
            </main>
          </Marquee>
        </div>
        <div className="hidden lg:block">
          <MarqueeTwo />
        </div>
        <div className="hidden">
          <MarqueeTwo />
        </div>
        <div className="w-full h-screen flex flex-col items-center justify-center gap-y-0 lg:gap-y-12">
          <div className="hidden lg:block">
            <WtfRuchitRed />
          </div>
          <div className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="342"
              height="72"
              viewBox="0 0 771 146"
              fill="none"
            >
              <path
                d="M180.704 6.39999L162.144 69.632L142.688 6.39999H103.008L83.552 69.632L64.992 6.39999H29.28L58.72 96H108.128L122.848 44.416L137.568 96H186.976L216.416 6.39999H180.704ZM334.23 6.39999H224.15V34.56H262.55V96H295.83V34.56H334.23V6.39999ZM437.895 34.56V6.39999H343.175V96H376.455V72.32H430.215V44.16H376.455V34.56H437.895ZM499.339 67.648C499.339 57.664 492.363 51.2 482.187 51.2H446.987V96H458.507V84.032H477.067L484.299 96H497.867L489.611 82.688C495.627 80.32 499.339 74.944 499.339 67.648ZM458.507 60.864H478.987C482.443 60.864 487.819 60.864 487.819 67.648C487.819 74.368 482.443 74.368 478.987 74.368H458.507V60.864ZM547.832 58.304V79.424C544.44 83.392 536.504 87.168 529.144 87.168C520.12 87.168 517.432 83.008 517.432 75.008V58.304H506.424L506.296 79.168C506.424 93.056 515.832 96.64 525.88 96.64C535.032 96.64 542.456 93.632 547.832 89.408V96H558.776V58.304H547.832ZM565.529 77.184C565.529 91.008 576.025 96.64 591.641 96.64C605.721 96.64 615.641 92.032 617.433 80.96H606.233C604.761 85.824 599.577 87.488 591.641 87.488C582.233 87.488 576.473 84.992 576.473 77.184C576.473 69.312 582.233 66.816 591.641 66.816C599.577 66.816 604.761 68.48 606.233 73.344H617.433C615.641 62.272 605.721 57.664 591.641 57.664C576.025 57.664 565.529 63.296 565.529 77.184ZM657.063 57.664C647.911 57.664 640.487 60.672 635.111 64.896V44.8H624.167V96H635.111V74.88C638.503 70.912 646.439 67.136 653.799 67.136C662.823 67.136 665.511 71.296 665.511 79.296V96H676.519L676.647 75.136C676.519 61.248 667.111 57.664 657.063 57.664ZM684.289 44.8V54.336H695.233V44.8H684.289ZM684.289 58.304V96H695.233V58.304H684.289ZM740.368 67.456V58.304H722.512V47.36L711.504 50.496V58.304H701.584V67.456H711.504V84.672C711.504 92.992 717.776 96.64 727.504 96.64C732.56 96.64 736.72 96.32 740.368 95.68V86.848C735.952 87.488 734.032 87.488 730.576 87.488C723.92 87.488 722.512 85.632 722.512 78.336V67.456H740.368Z"
                fill="#E85433"
              />
              <path
                d="M285.923 133.288C285.923 139.752 291.395 141.32 300.579 141.32C308.867 141.32 314.531 140.104 314.531 134.12C314.531 128.456 309.059 127.976 300.227 127.496C293.699 127.112 292.355 126.792 292.355 125.064C292.355 123.4 293.699 122.856 299.363 122.856C305.347 122.856 307.811 123.464 307.811 125.928H313.571C313.571 120.392 308.451 118.28 300.003 118.28C291.619 118.28 286.595 119.848 286.595 124.776C286.595 129.8 290.467 131.336 300.227 131.784C307.491 132.136 308.771 132.456 308.771 134.312C308.771 136.072 306.947 136.744 300.899 136.744C293.603 136.744 291.683 135.656 291.683 133.288H285.923ZM344.597 118.6H317.077V123.432H327.957V141H333.717V123.432H344.597V118.6ZM377.398 129.768V118.6H371.638V129.768C371.638 132.872 370.774 136.488 363.318 136.488C355.862 136.488 354.998 132.904 354.998 129.768V118.6H349.238V129.768C349.238 137.576 353.462 141.32 363.318 141.32C373.142 141.32 377.398 137.544 377.398 129.768ZM398.616 118.6H382.36V141H398.616C404.408 141 409.496 137.416 409.496 129.8C409.496 122.184 404.408 118.6 398.616 118.6ZM396.44 136.168H388.12V123.432H396.44C400.792 123.432 403.736 124.36 403.736 129.8C403.736 135.24 400.792 136.168 396.44 136.168ZM419.899 118.6H414.139V141H419.899V118.6ZM438.459 141.32C448.283 141.32 452.539 137.192 452.539 129.768C452.539 122.376 448.283 118.28 438.459 118.28C428.603 118.28 424.379 122.344 424.379 129.768C424.379 137.224 428.603 141.32 438.459 141.32ZM438.459 136.488C432.475 136.488 430.139 134.376 430.139 129.768C430.139 125.192 432.443 123.112 438.459 123.112C444.475 123.112 446.779 125.224 446.779 129.768C446.779 134.344 444.443 136.488 438.459 136.488ZM456.47 133.288C456.47 139.752 461.942 141.32 471.126 141.32C479.414 141.32 485.078 140.104 485.078 134.12C485.078 128.456 479.606 127.976 470.774 127.496C464.246 127.112 462.902 126.792 462.902 125.064C462.902 123.4 464.246 122.856 469.91 122.856C475.894 122.856 478.358 123.464 478.358 125.928H484.118C484.118 120.392 478.998 118.28 470.55 118.28C462.166 118.28 457.142 119.848 457.142 124.776C457.142 129.8 461.014 131.336 470.774 131.784C478.038 132.136 479.318 132.456 479.318 134.312C479.318 136.072 477.494 136.744 471.446 136.744C464.15 136.744 462.23 135.656 462.23 133.288H456.47Z"
                fill="#E85433"
              />
            </svg>
          </div>
          <h1 className="lg:hidden uppercase main-font text-[#E3EBD2] py-6 text-2xl lg:text-5xl text-center tracking-wide">
            giving your <br /> company the <br /> digital presence it needs
          </h1>
          <h1 className="hidden lg:block uppercase main-font text-[#E3EBD2] py-6 text-[14px] lg:text-5xl text-center tracking-wide">
            giving your company <br /> the digital presence it needs
          </h1>
          <Mail />
        </div>
      </main>
      <div className="hidden lg:block mt-28 lg:mt-40 -mr-40">
        <MarqueeTwo />
      </div>
      <div className="lg:hidden">
        <Marquee
          className="w-full marquee-three -mt-24 -ml-10"
          duration={10000}
          background="#B7D500"
          width="100%"
          height="40px"
        >
          <main className="w-full h-20 lg:h-20 bg-[#B7D500] flex items-center justify-center gap-x-5">
            <h1 className="text-black text-lg main-font">COMING SOON</h1>
            <BlackStartMobile />
            <h1 className="text-black text-lg main-font">COMING SOON</h1>
            <BlackStartMobile />
            <h1 className="text-black text-lg main-font">COMING SOON</h1>
            <div className="pr-5">
              <BlackStartMobile />
            </div>
          </main>
        </Marquee>
      </div>
    </>
  );
}
