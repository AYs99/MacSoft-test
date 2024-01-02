import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import FullWebsiteRowcontactUs from "components/FullWebsiteRowcontactUs";

const FullWebsitePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-dhyana gap-14 items-center justify-end mx-auto w-full">
        <div className="md:h-[1989px] sm:h-[2273px] h-[2776px] md:px-5 relative w-full">
          <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
            <div className="flex flex-col justify-start w-full">
              <div className="flex flex-col relative w-full">
                <div className="h-[1024px] mx-auto w-full">
                  <Img
                    className="h-[1024px] m-auto object-cover w-full"
                    src="images/img_scientificmole.png"
                    alt="scientificmole"
                  />
                  <div className="absolute bottom-[12%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[88%]">
                    <div className="bg-gradient  flex flex-col items-center justify-center md:px-10 sm:px-5 px-[300px] py-20 rounded-bl-[35px] rounded-br-[60px] rounded-tl-[35px] rounded-tr-[35px] w-auto md:w-full">
                      <Text
                        className="md:text-5xl text-[84px] text-gray-100 w-auto"
                        size="txtDhyanaBold84"
                      >
                        Revolutionizing
                      </Text>
                      <Text
                        className="sm:text-[23px] md:text-[25px] text-[27px] text-gray-100 w-auto"
                        size="txtDhyanaRegular27"
                      >
                        Software Development with AI-Powered Efficiency
                      </Text>
                    </div>
                    <Text
                      className="mt-[145px] text-center text-gray-700 text-lg w-[68%] sm:w-full"
                      size="txtDhyanaBold18"
                    >
                      Welcome to MacSoft.AI - your gateway to pioneering fast
                      code for efficient software development. Leveraging the
                      latest in AI technology, we transform the complexities of
                      software creation into streamlined, manageable processes
                    </Text>
                    <div className="flex sm:flex-col flex-row sm:gap-10 gap-[66px] items-start justify-start mt-[85px] w-auto sm:w-full">
                      <Button
                        className="bg-transparent cursor-pointer font-bold leading-[normal] min-w-[190px] text-center text-lg"
                        shape="round"
                        size="sm"
                        variant="outline"
                        color="light_blue_800_indigo_900"
                      >
                        Discover More
                      </Button>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[173px] text-center text-lg"
                        shape="round"
                        size="sm"
                        variant="gradient"
                        color="light_blue_800_indigo_900"
                      >
                        Get in Touch
                      </Button>
                    </div>
                  </div>
                  <header className="absolute bg-white-A700 flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-center mx-auto top-[0] w-full">
                    <Img
                      className="h-12 mb-[33px] md:ml-[0] ml-[70px] md:mt-0 mt-[76px]"
                      src="images/img_macsotlogo04.svg"
                      alt="macsotlogoFour"
                    />
                    <FullWebsiteRowcontactUs className="flex md:flex-1 sm:flex-col flex-row sm:gap-10 gap-[122px] items-center justify-between mb-9 md:ml-[0] ml-[248px] mr-[286px] md:mt-0 mt-[92px] w-auto md:w-full" />
                  </header>
                </div>
                <Text
                  className="mb-[66px] ml-[117px] mt-[-NaNpx] text-gray-700 text-lg w-2/5 sm:w-full z-[1]"
                  size="txtDhyanaBold18"
                >
                  <>
                    MacSoft.AI emerged from the vision of integrating
                    cutting-edge AI with software development. Our mission is to
                    accelerate the software development lifecycle, making it
                    more efficient, cost-effective, and accessible for
                    businesses of all sizes. Inspired by operational excellence
                    from leaders like McDonald&#39;s and the user-focused
                    innovation of Apple, we strive to be at the forefront of the
                    &#39;Fast Code&#39; sector.
                  </>
                </Text>
                <Img
                  className="h-[437px] ml-auto mr-28 mt-[-40px] object-cover z-[1]"
                  src="images/img_macsotlogo051.png"
                  alt="macsotlogo051"
                />
                <Text
                  className="mb-72 ml-[107px] mt-[-27.49px] md:text-5xl text-[84px] text-indigo-900 z-[1]"
                  size="txtDhyanaBold84Indigo900"
                >
                  Our Story
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start md:ml-[0] ml-[268px] mt-7 w-[41%] md:w-full">
                <Img
                  className="h-[46px] md:h-auto sm:mt-0 mt-[234px] object-cover"
                  src="images/img_macsotlogo055.png"
                  alt="macsotlogo055"
                />
                <Img
                  className="h-[86px] md:h-auto ml-10 sm:ml-[0] sm:mt-0 mt-[172px] object-cover"
                  src="images/img_macsotlogo054.png"
                  alt="macsotlogo054"
                />
                <Img
                  className="h-[93px] md:h-auto sm:ml-[0] ml-[31px] sm:mt-0 mt-[102px] object-cover"
                  src="images/img_macsotlogo053.png"
                  alt="macsotlogo053"
                />
                <Img
                  className="h-[189px] md:h-auto mb-[91px] sm:ml-[0] ml-[31px] object-cover"
                  src="images/img_macsotlogo052.png"
                  alt="macsotlogo052"
                />
              </div>
              <Text
                className="md:ml-[0] ml-[117px] mt-[511px] text-gray-700 text-lg w-2/5 sm:w-full"
                size="txtDhyanaBold18"
              >
                Drawing inspiration from the best, we at MacSoft.AI believe in
                the power of operational excellence and exceptional user
                experience. Our vision is to be the market leader in the Fast
                Code sector, empowering our clients with advanced AI-driven
                software development tools.
              </Text>
            </div>
          </div>
          <div className="absolute bottom-[26%] flex flex-col justify-start left-[7%] w-[269px]">
            <Img
              className="h-[25px] md:h-auto ml-60 md:ml-[0] object-cover"
              src="images/img_vector.png"
              alt="vector"
            />
            <Img
              className="h-[86px] md:h-auto ml-40 md:ml-[0] mt-[19px] object-cover"
              src="images/img_macsotlogo054.png"
              alt="macsotlogo057"
            />
            <Text
              className="mr-[5px] mt-[3px] md:text-5xl text-[84px] text-indigo-900"
              size="txtDhyanaBold84Indigo900"
            >
              Vision
            </Text>
          </div>
          <div className="absolute bottom-[0] md:h-[441px] h-[833px] right-[0] w-[57%] md:w-full">
            <div className="absolute bottom-[0] md:h-[441px] h-[742px] left-[0] w-[93%] md:w-full">
              <div className="absolute border border-indigo-900 border-solid bottom-[0] h-[375px] left-[0] w-[45%]"></div>
              <Img
                className="absolute h-[441px] object-cover right-[0] top-[0] w-[89%]"
                src="images/img_retinalbiometr.png"
                alt="retinalbiometr"
              />
            </div>
            <div className="absolute bg-light_blue-800 h-[423px] right-[0] top-[0] w-[41%]"></div>
          </div>
        </div>
        <div className="flex flex-col items-end justify-end w-full">
          <div className="flex flex-col md:px-5 relative w-[94%] md:w-full">
            <div className="sm:h-[1994px] h-[2096px] md:h-[2243px] mx-auto w-full">
              <div className="absolute sm:h-[1994px] h-[1997px] md:h-[2243px] inset-x-[0] mx-auto top-[0] w-full">
                <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                  <div className="flex flex-col items-end justify-start w-full">
                    <Text
                      className="md:text-5xl text-[84px] text-light_blue-800"
                      size="txtDhyanaBold84Lightblue800"
                    >
                      Challenges
                    </Text>
                    <Text
                      className="sm:text-[33px] md:text-[35px] text-[37px] text-indigo-900"
                      size="txtDhyanaRegular37"
                    >
                      in Software Development
                    </Text>
                    <Text
                      className="mt-[403px] text-center text-gray-700 text-lg w-[67%] sm:w-full"
                      size="txtDhyanaBold18"
                    >
                      The journey of developing a Minimum Viable Product (MVP)
                      is often fraught with time-consuming and costly hurdles.
                      Additionally, handling large contexts in traditional AI
                      LLM models remains inefficient. MacSoft.AI addresses these
                      critical challenges head-on.
                    </Text>
                    <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[142px] w-full">
                      <div className="flex flex-col justify-start">
                        <Text
                          className="md:text-5xl text-[84px] text-light_blue-800"
                          size="txtDhyanaBold84Lightblue800"
                        >
                          AI Powered
                        </Text>
                        <div className="flex flex-col md:gap-10 gap-[600px] items-start justify-start ml-2 md:ml-[0] mt-[3px]">
                          <Text
                            className="sm:text-[33px] md:text-[35px] text-[37px] text-indigo-900"
                            size="txtDhyanaRegular37"
                          >
                            Modular Development
                          </Text>
                          <Text
                            className="sm:text-[33px] md:text-[35px] text-[37px] text-indigo-900"
                            size="txtDhyanaRegular37"
                          >
                            Methodology
                          </Text>
                        </div>
                      </div>
                      <Img
                        className="h-[1076px] md:h-auto md:mt-0 mt-[90px] object-cover"
                        src="images/img_rectangle7.png"
                        alt="rectangleSeven"
                      />
                    </div>
                  </div>
                </div>
                <Text
                  className="absolute bottom-[37%] left-[0] text-gray-700 text-lg w-[67%] sm:w-full"
                  size="txtDhyanaBold18"
                >
                  We revolutionize software development by breaking down the
                  entire lifecycle into AI-scripted, manageable steps. Our
                  approach leverages the latest AI capabilities for efficient,
                  part-by-part processing, ensuring both consistency and
                  accuracy in every phase.
                </Text>
                <Text
                  className="absolute bottom-[0] left-[0] text-gray-700 text-lg w-[41%] sm:w-full"
                  size="txtDhyanaBold18"
                >
                  At MacSoft.AI, we transform traditional roles, focusing teams
                  on review and quality assurance. A continuous feedback loop
                  between AI outcomes and our engineers enhances script
                  effectiveness. Our methodology emphasizes unprecedented speed
                  and significant cost reductions in development.
                </Text>
              </div>
              <div className="absolute bottom-[0] flex flex-col items-center justify-start right-[0] w-[72%]">
                <Img
                  className="h-[1268px] md:h-auto object-cover w-full"
                  src="images/img_robotmockupscene14.png"
                  alt="robotmockupscen"
                />
              </div>
            </div>
            <Img
              className="h-[213px] ml-auto mt-[-58px] object-cover w-3/5 z-[1]"
              src="images/img_rectangle6.png"
              alt="rectangleSix"
            />
            <Img
              className="h-[802px] ml-[153px] mt-[-NaNpx] z-[1]"
              src="images/img_group.svg"
              alt="group"
            />
          </div>
          <div className="flex flex-col items-start justify-start mt-[143px] md:px-5 w-[93%] md:w-full">
            <div className="md:h-[1077px] h-[1079px] md:ml-[0] ml-[3px] relative w-full">
              <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="md:text-5xl text-[84px] text-light_blue-800"
                    size="txtDhyanaBold84Lightblue800"
                  >
                    Custom
                  </Text>
                  <Text
                    className="mt-[3px] sm:text-[37px] md:text-[43px] text-[51px] text-indigo-900"
                    size="txtDhyanaRegular51"
                  >
                    AI Approach
                  </Text>
                  <Text
                    className="mt-20 text-gray-700 text-lg w-[68%] sm:w-full"
                    size="txtDhyanaBold18"
                  >
                    Our unique AI model is designed to extract and convert
                    complex business requirements into actionable use cases. We
                    automate the generation of UML diagrams and essential
                    software components, integrating frontend, mobile, and
                    backend development in a seamless, AI-driven process.
                  </Text>
                  <Img
                    className="h-[213px] sm:h-auto md:ml-[0] ml-[523px] mt-[446px] object-cover w-[61%] md:w-full"
                    src="images/img_rectangle8.png"
                    alt="rectangleEight"
                  />
                </div>
              </div>
              <Img
                className="absolute h-[783px] object-cover right-[0] top-[9%] w-[62%]"
                src="images/img_manwearingtshirtgesturing.png"
                alt="manwearingtshir"
              />
            </div>
            <div className="sm:h-[407px] md:h-[492px] h-[528px] md:ml-[0] ml-[5px] mt-[62px] relative w-full">
              <div className="absolute bottom-[0] sm:h-[345px] h-[429px] md:h-[430px] left-[0] w-[95%] md:w-full">
                <div className="absolute bottom-[0] h-[254px] md:h-[430px] left-[0] w-[73%] md:w-full">
                  <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                    <div className="flex flex-col gap-[21px] justify-start w-full">
                      <Text
                        className="text-[19px] text-indigo-900"
                        size="txtDhyanaRegular19"
                      >
                        Buisness Model:
                      </Text>
                      <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between md:ml-[0] ml-[25px] w-[98%] md:w-full">
                        <Text
                          className="md:mt-0 mt-2.5 md:text-5xl text-[84px] text-light_blue-800"
                          size="txtDhyanaBold84Lightblue800"
                        >
                          Scalability
                        </Text>
                        <div className="border border-light_blue-800 border-solid h-[202px] w-[26%]"></div>
                      </div>
                    </div>
                  </div>
                  <Img
                    className="absolute h-[149px] inset-y-[0] left-[0] my-auto"
                    src="images/img_vector1.svg"
                    alt="vectorOne"
                  />
                </div>
                <Img
                  className="absolute h-[345px] object-cover right-[0] top-[0] w-[39%]"
                  src="images/img_aitechnologyi.png"
                  alt="aitechnologyi"
                />
              </div>
              <div className="absolute bg-light_blue-800 h-[269px] right-[0] top-[0] w-[12%]"></div>
            </div>
            <Text
              className="mt-1.5 text-gray-700 text-lg w-[68%] sm:w-full"
              size="txtDhyanaBold18"
            >
              Our AI-scripted development process is not just revolutionary but
              scalable. We emphasize automated workflows, continuous AI
              improvements, and flexible cloud-based infrastructure to meet
              growing demands efficiently.
            </Text>
            <Text
              className="md:ml-[0] ml-[3px] mt-[66px] md:text-5xl text-[84px] text-light_blue-800"
              size="txtDhyanaBold84Lightblue800"
            >
              Roadmap
            </Text>
            <div className="md:h-[1291px] h-[639px] md:ml-[0] ml-[3px] relative w-[94%] md:w-full">
              <div className="absolute md:h-[1291px] h-[639px] inset-y-[0] left-[0] my-auto w-[86%] md:w-full">
                <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                    <div className="flex flex-col justify-start">
                      <Text
                        className="mr-[68px] sm:text-[31px] md:text-[33px] text-[35px] text-indigo-900"
                        size="txtDhyanaRegular35"
                      >
                        Future Directions
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[145px] mt-[220px] sm:text-[21px] md:text-[23px] text-[25px] text-indigo-900"
                        size="txtDhyanaRegular25"
                      >
                        Q3 2024 - Q2 2025
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[115px] mt-[183px] sm:text-[21px] md:text-[23px] text-[25px] text-indigo-900"
                        size="txtDhyanaRegular25"
                      >
                        Q3 2023 - Q1 2024
                      </Text>
                    </div>
                    <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[95px] md:mt-0 mt-[33px] w-[29%] md:w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="h-[606px] relative w-full">
                              <div className="h-[606px] m-auto w-full">
                                <div className="absolute bottom-[2%] md:h-[416px] h-[433px] right-[0] w-[94%]">
                                  <div className="absolute bottom-[0] h-[268px] inset-x-[0] mx-auto w-full">
                                    <Img
                                      className="h-[234px] m-auto"
                                      src="images/img_vector_gray_900.svg"
                                      alt="vector_One"
                                    />
                                    <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                                      <Img
                                        className="h-[268px] md:h-auto object-cover w-full"
                                        src="images/img_rectangle.png"
                                        alt="rectangle"
                                      />
                                    </div>
                                  </div>
                                  <Img
                                    className="absolute h-[416px] inset-[0] justify-center m-auto"
                                    src="images/img_group_gray_300_01.svg"
                                    alt="group_One"
                                  />
                                </div>
                                <Img
                                  className="absolute h-[606px] inset-y-[0] left-[0] my-auto"
                                  src="images/img_group_indigo_500.svg"
                                  alt="group_Two"
                                />
                              </div>
                              <div className="absolute bottom-[2%] flex flex-col gap-6 justify-start right-[2%] w-[89%]">
                                <List
                                  className="flex flex-col gap-[76px] items-center w-full"
                                  orientation="vertical"
                                >
                                  <div className="md:h-[53px] h-[57px] ml-[209px] my-0 relative w-[57px]">
                                    <div className="md:h-[53px] h-[57px] m-auto w-[57px]">
                                      <div className="absolute h-[5px] right-[4%] top-[0] w-[13%]">
                                        <div className="absolute h-[5px] right-[0] top-[0] w-[5px]">
                                          <Img
                                            className="absolute h-[5px] inset-[0] justify-center m-auto w-[5px]"
                                            src="images/img_vector_indigo_400.svg"
                                            alt="vector"
                                          />
                                          <Img
                                            className="absolute h-[5px] inset-[0] justify-center m-auto w-[5px]"
                                            src="images/img_vector_indigo_900_01.svg"
                                            alt="vector_One"
                                          />
                                        </div>
                                        <div
                                          className="absolute bg-cover bg-no-repeat flex flex-row h-full inset-y-[0] items-center justify-evenly left-[0] my-auto w-[15%]"
                                          style={{
                                            backgroundImage:
                                              "url('images/img_group5.svg')",
                                          }}
                                        >
                                          <Img
                                            className="h-[5px]"
                                            src="images/img_vector_indigo_900_01_5x1.svg"
                                            alt="vector_Two"
                                          />
                                        </div>
                                      </div>
                                      <div className="absolute bottom-[0] h-[53px] inset-x-[0] mx-auto w-full">
                                        <Img
                                          className="h-[42px] m-auto"
                                          src="images/img_maximize.svg"
                                          alt="maximize"
                                        />
                                        <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                                          <Img
                                            className="h-[53px] md:h-auto object-cover w-full"
                                            src="images/img_rectangle_53x57.png"
                                            alt="rectangle"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="absolute bg-cover bg-no-repeat flex flex-col h-12 inset-x-[0] items-center justify-start mx-auto top-[5%] w-[93%]"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_group4.svg')",
                                      }}
                                    >
                                      <div
                                        className="bg-cover bg-no-repeat flex flex-col h-12 items-end justify-start p-[11px] w-full"
                                        style={{
                                          backgroundImage:
                                            "url('images/img_group6.svg')",
                                        }}
                                      >
                                        <Img
                                          className="h-[22px] mb-[3px] mr-1"
                                          src="images/img_settings.svg"
                                          alt="settings"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="md:h-[53px] h-[58px] mr-[209px] my-0 relative w-[22%]">
                                    <div className="md:h-[53px] h-[58px] m-auto w-[57px]">
                                      <div className="absolute h-[5px] left-[4%] top-[0] w-[13%]">
                                        <div className="absolute h-[5px] left-[0] top-[0] w-[5px]">
                                          <Img
                                            className="absolute h-[5px] inset-[0] justify-center m-auto w-[5px]"
                                            src="images/img_vector_indigo_400.svg"
                                            alt="vector"
                                          />
                                          <Img
                                            className="absolute h-[5px] inset-[0] justify-center m-auto w-[5px]"
                                            src="images/img_vector_indigo_900_01.svg"
                                            alt="vector_One"
                                          />
                                        </div>
                                        <div
                                          className="absolute bg-cover bg-no-repeat flex flex-row h-full inset-y-[0] items-center justify-evenly my-auto right-[0] w-[15%]"
                                          style={{
                                            backgroundImage:
                                              "url('images/img_group5.svg')",
                                          }}
                                        >
                                          <Img
                                            className="h-[5px]"
                                            src="images/img_vector_indigo_900_01_5x1.svg"
                                            alt="vector_Two"
                                          />
                                        </div>
                                      </div>
                                      <div className="absolute bottom-[0] h-[53px] inset-x-[0] mx-auto w-full">
                                        <Img
                                          className="h-[43px] m-auto"
                                          src="images/img_maximize.svg"
                                          alt="maximize"
                                        />
                                        <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                                          <Img
                                            className="h-[53px] md:h-auto object-cover w-full"
                                            src="images/img_rectangle_1.png"
                                            alt="rectangle"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="absolute bg-cover bg-no-repeat flex flex-col h-12 inset-x-[0] items-center justify-start mx-auto top-[5%] w-[93%]"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_group4.svg')",
                                      }}
                                    >
                                      <div
                                        className="bg-cover bg-no-repeat flex flex-col h-12 items-center justify-end p-[13px] w-full"
                                        style={{
                                          backgroundImage:
                                            "url('images/img_group6.svg')",
                                        }}
                                      >
                                        <Img
                                          className="h-[21px]"
                                          src="images/img_thumbsup.svg"
                                          alt="thumbsup"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="md:h-[53px] h-[57px] ml-[209px] my-0 relative w-[57px]">
                                    <div className="md:h-[53px] h-[57px] m-auto w-[57px]">
                                      <div className="md:h-[53px] h-[57px] m-auto w-[57px]">
                                        <div className="absolute h-[5px] right-[4%] top-[0] w-[13%]">
                                          <div className="absolute flex flex-row h-full inset-[0] items-start justify-center m-auto w-full">
                                            <Img
                                              className="h-[5px]"
                                              src="images/img_group5.svg"
                                              alt="vector"
                                            />
                                            <div className="h-[5px] relative w-[5px]">
                                              <Img
                                                className="absolute h-[5px] inset-[0] justify-center m-auto w-[5px]"
                                                src="images/img_vector_indigo_400.svg"
                                                alt="vector_One"
                                              />
                                              <Img
                                                className="absolute h-[5px] inset-[0] justify-center m-auto w-[5px]"
                                                src="images/img_vector_indigo_900_01.svg"
                                                alt="vector_Two"
                                              />
                                            </div>
                                          </div>
                                          <Img
                                            className="absolute h-[5px] inset-y-[0] left-[0] my-auto"
                                            src="images/img_vector_indigo_900_01_5x1.svg"
                                            alt="vector_Three"
                                          />
                                        </div>
                                        <div className="absolute bottom-[0] h-[53px] inset-x-[0] mx-auto w-full">
                                          <Img
                                            className="h-[42px] m-auto"
                                            src="images/img_maximize.svg"
                                            alt="maximize"
                                          />
                                          <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                                            <Img
                                              className="h-[53px] md:h-auto object-cover w-full"
                                              src="images/img_rectangle_2.png"
                                              alt="rectangle"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <Img
                                        className="absolute h-12 inset-x-[0] mx-auto top-[5%]"
                                        src="images/img_group4.svg"
                                        alt="barcode"
                                      />
                                    </div>
                                    <div
                                      className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-center justify-center m-auto p-[13px] w-[92%]"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_group6.svg')",
                                      }}
                                    >
                                      <Img
                                        className="h-[21px]"
                                        src="images/img_thumbsup_white_a700.svg"
                                        alt="thumbsup"
                                      />
                                    </div>
                                  </div>
                                </List>
                                <div className="md:h-[58px] h-[59px] ml-2.5 md:ml-[0] relative w-[38%]">
                                  <div className="absolute h-[58px] inset-[0] justify-center m-auto w-full">
                                    <div className="absolute flex flex-col items-center justify-start right-[0] top-[0] w-[68%]">
                                      <div className="flex flex-col items-center justify-start w-full">
                                        <Img
                                          className="h-10 md:h-auto object-cover w-full"
                                          src="images/img_rectangle_40x68.png"
                                          alt="rectangle_One"
                                        />
                                      </div>
                                    </div>
                                    <Img
                                      className="absolute h-[58px] inset-y-[0] left-[0] my-auto"
                                      src="images/img_user.svg"
                                      alt="user"
                                    />
                                  </div>
                                  <div className="absolute bottom-[0] md:h-[50px] h-[54px] left-[3%] w-[48%]">
                                    <div className="md:h-[50px] h-[54px] m-auto w-full">
                                      <div className="absolute flex flex-row items-start justify-center right-[4%] top-[0] w-[15%]">
                                        <div
                                          className="bg-cover bg-no-repeat flex flex-row h-[5px] items-center justify-evenly w-[15%]"
                                          style={{
                                            backgroundImage:
                                              "url('images/img_group5.svg')",
                                          }}
                                        >
                                          <Img
                                            className="h-[5px]"
                                            src="images/img_vector_indigo_900_01_5x1.svg"
                                            alt="vector_Two"
                                          />
                                        </div>
                                        <div className="h-[5px] relative w-[5px]">
                                          <Img
                                            className="absolute h-[5px] inset-[0] justify-center m-auto w-[5px]"
                                            src="images/img_vector_indigo_400.svg"
                                            alt="vector_Three"
                                          />
                                          <Img
                                            className="absolute h-[5px] inset-[0] justify-center m-auto w-[5px]"
                                            src="images/img_vector_indigo_900_01.svg"
                                            alt="vector_Four"
                                          />
                                        </div>
                                      </div>
                                      <div className="absolute bottom-[0] h-[50px] inset-x-[0] mx-auto w-full">
                                        <Img
                                          className="h-[39px] m-auto"
                                          src="images/img_maximize.svg"
                                          alt="maximize"
                                        />
                                        <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                                          <Img
                                            className="h-[50px] md:h-auto object-cover w-full"
                                            src="images/img_rectangle_50x48.png"
                                            alt="rectangle_Two"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="absolute bg-cover bg-no-repeat flex flex-col h-[45px] inset-x-[0] items-center justify-start mx-auto top-[6%] w-[90%]"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_group4.svg')",
                                      }}
                                    >
                                      <div
                                        className="bg-cover bg-no-repeat flex flex-col h-11 items-start justify-end p-2 w-[43px] md:w-full"
                                        style={{
                                          backgroundImage:
                                            "url('images/img_group6.svg')",
                                        }}
                                      >
                                        <Img
                                          className="h-[25px]"
                                          src="images/img_thumbsup_white_a700_25x19.svg"
                                          alt="thumbsup"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col md:gap-10 gap-[229px] items-start justify-start md:ml-[0] ml-[127px] md:mt-0 mt-[138px]">
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-indigo-900"
                        size="txtDhyanaRegular25"
                      >
                        H2 2025 - 2027
                      </Text>
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-indigo-900"
                        size="txtDhyanaRegular25"
                      >
                        Q2 2024
                      </Text>
                    </div>
                  </div>
                </div>
                <Img
                  className="absolute bottom-[2%] h-[574px] right-[16%]"
                  src="images/img_macsotlogo09.svg"
                  alt="macsotlogoNine"
                />
              </div>
              <div className="absolute bottom-[12%] flex flex-col md:gap-10 gap-[199px] justify-start left-[9%]">
                <Text
                  className="ml-7 md:ml-[0] text-[15px] text-gray-700"
                  size="txtDhyanaBold15"
                >
                  Enhancement and Expansion Phase.
                </Text>
                <Text
                  className="text-[15px] text-gray-700"
                  size="txtDhyanaBold15"
                >
                  Intensive Development Phase of AI tools.
                </Text>
              </div>
              <Text
                className="absolute bottom-[24%] right-[0] text-[15px] text-gray-700"
                size="txtDhyanaBold15"
              >
                <>Market Introduction of MacSoft.AI&#39;s products.</>
              </Text>
              <Text
                className="absolute right-[8%] text-[15px] text-gray-700 top-[30%]"
                size="txtDhyanaBold15"
              >
                Market Consolidation and Growth.
              </Text>
            </div>
            <Text
              className="md:ml-[0] ml-[3px] mt-[58px] sm:text-[31px] md:text-[33px] text-[35px] text-indigo-900"
              size="txtDhyanaRegular35"
            >
              Investment Opportunity:
            </Text>
            <Text
              className="md:ml-[0] ml-[11px] mt-[33px] text-lg text-light_blue-800"
              size="txtDhyanaBold18Lightblue800"
            >
              Join us in shaping the future of software development. MacSoft.AI
            </Text>
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between md:ml-[0] ml-[3px] mt-[29px] w-[89%] md:w-full">
              <div className="flex flex-col items-start justify-start md:mt-0 mt-16 w-[34%] md:w-full">
                <Text className="text-gray-700 text-lg" size="txtDhyanaBold18">
                  Have questions or want to join our journey?
                </Text>
                <div className="flex flex-row gap-[27px] items-center justify-start mt-9 w-[52%] md:w-full">
                  <Img
                    className="h-[15px]"
                    src="images/img_vector_indigo_900.svg"
                    alt="vector_Five"
                  />
                  <Text
                    className="text-gray-700 text-lg"
                    size="txtDhyanaBold18"
                  >
                    info@macsoft.ai
                  </Text>
                </div>
                <div className="flex flex-row gap-[27px] items-start justify-start mt-[30px] w-[49%] md:w-full">
                  <Img
                    className="h-[22px]"
                    src="images/img_call.svg"
                    alt="call"
                  />
                  <Text
                    className="text-gray-700 text-lg"
                    size="txtDhyanaBold18"
                  >
                    +966563328204
                  </Text>
                </div>
                <div className="flex flex-row gap-[27px] items-center justify-start mt-[25px] w-1/2 md:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_globe.svg"
                    alt="globe"
                  />
                  <a
                    href="www.macsoft.ai"
                    className="text-gray-700 text-lg"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Text size="txtDhyanaBold18">www.macsoft.ai</Text>
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-7 items-start justify-start w-auto sm:w-full">
                <Input
                  name="frameSixtyOne"
                  placeholder="Name"
                  className="leading-[normal] p-0 placeholder:text-gray-700_01 text-left text-xl w-full"
                  wrapClassName="flex w-[99%]"
                  type="text"
                  prefix={
                    <div className="h-5 mt-[5px] mb-[7px] mr-[13px] w-5 bg-gray-700_01">
                      <Img
                        className="h-5 my-auto"
                        src="images/img_lock.svg"
                        alt="lock"
                      />
                    </div>
                  }
                ></Input>
                <Input
                  name="frameSixtyTwo"
                  placeholder="Email"
                  className="leading-[normal] p-0 placeholder:text-gray-700_01 text-left text-xl w-full"
                  wrapClassName="flex w-[97%]"
                  type="email"
                  prefix={
                    <div className="mt-[7px] mb-[9px] mr-[13px] sm:w-full sm:mx-0 w-[5%] bg-gray-700_01">
                      <Img
                        className="my-auto"
                        src="images/img_lock_gray_700_01.svg"
                        alt="lock"
                      />
                    </div>
                  }
                ></Input>
                <Input
                  name="frameSixtyThree"
                  placeholder="Mobile"
                  className="leading-[normal] p-0 placeholder:text-gray-700_01 text-left text-xl w-full"
                  wrapClassName="flex w-[99%]"
                  type="number"
                  prefix={
                    <div className="h-[18px] mt-1.5 mb-2 mr-[13px] w-[18px] bg-gray-700_01">
                      <Img
                        className="h-[18px] my-auto"
                        src="images/img_call_gray_700_01.svg"
                        alt="call"
                      />
                    </div>
                  }
                ></Input>
                <Input
                  name="frameSixtyFour"
                  placeholder="Address"
                  className="leading-[normal] p-0 placeholder:text-gray-700_01 text-left text-xl w-full"
                  wrapClassName="flex w-[98%]"
                  prefix={
                    <div className="mt-[5px] mb-[7px] mr-[13px] sm:w-full sm:mx-0 w-[4%] bg-gray-700_01">
                      <Img
                        className="my-auto"
                        src="images/img_linkedin.svg"
                        alt="linkedin"
                      />
                    </div>
                  }
                ></Input>
                <div className="border border-blue_gray-900 border-solid flex flex-row gap-[13px] items-center justify-center pb-[100px] pl-2.5 md:pr-10 sm:pr-5 pr-[138px] pt-2.5 rounded-[5px] w-auto sm:w-full">
                  <Img
                    className="h-[15px] w-[18px]"
                    src="images/img_thumbsup_gray_700_01.svg"
                    alt="thumbsup_One"
                  />
                  <Text
                    className="text-gray-700_01 text-xl w-auto"
                    size="txtDhyanaRegular20"
                  >
                    Write Your response here ........
                  </Text>
                </div>
                <Text
                  className="bg-indigo-900 justify-center pb-1.5 pt-3 sm:px-5 px-[35px] rounded-[5px] text-gray-100_03 text-xl w-auto"
                  size="txtDhyanaRegular20Gray10003"
                >
                  Send Your Message
                </Text>
              </div>
            </div>
          </div>
          <footer className="bg-gradient  flex items-center justify-center mt-[54px] md:px-5 w-full">
            <div className="flex flex-col items-center justify-center mb-[78px] ml-[69px] mr-[74px] mt-12 w-[91%]">
              <div className="flex flex-col items-center justify-center w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between ml-12 md:ml-[0] w-[87%] md:w-full">
                  <Text
                    className="mb-0.5 md:mt-0 mt-[11px] text-gray-100 text-lg"
                    size="txtDhyanaBold18Gray100"
                  >
                    Join us in shaping the future of software development.
                    MacSoft.AI
                  </Text>
                  <div className="flex flex-col items-center justify-start">
                    <div className="bg-gray-100 flex flex-row gap-2.5 items-center justify-center pl-[25px] md:pr-10 pr-[131px] sm:px-5 py-2.5 rounded-[5px] w-auto">
                      <Text
                        className="text-[15px] text-gray-700 w-auto"
                        size="txtDhyanaBold15"
                      >
                        Enter your email
                      </Text>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[76px] rounded-[5px] text-[15px] text-center"
                        color="indigo_900"
                        size="sm"
                        variant="fill"
                      >
                        Submit
                      </Button>
                    </div>
                  </div>
                </div>
                <Line className="bg-gray-100 h-px mt-[39px] shadow-bs w-full" />
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between md:ml-[0] ml-[45px] mt-8 w-[79%] md:w-full">
                  <div className="flex flex-col md:gap-10 gap-[63px] justify-start w-[34%] md:w-full">
                    <Img
                      className="h-[76px]"
                      src="images/img_macsotlogo04.svg"
                      alt="macsotlogo021"
                    />
                    <div className="flex flex-col gap-4 items-center justify-center md:ml-[0] ml-[66px] w-auto">
                      <Img
                        className="h-11 w-[251px]"
                        src="images/img_frame68.svg"
                        alt="frameSixtyEight"
                      />
                      <Text
                        className="text-3xl sm:text-[26px] md:text-[28px] text-gray-100 w-auto"
                        size="txtDhyanaRegular30"
                      >
                        /macsoft.ai
                      </Text>
                    </div>
                  </div>
                  <ul className="flex flex-col items-start justify-start w-[54%] md:w-full common-column-list">
                    <li>
                      <a href="javascript:">
                        <div className="flex flex-row items-center justify-between">
                          <Text
                            className="text-gray-100 text-lg"
                            size="txtDhyanaBold18Gray100"
                          >
                            Quick Menu
                          </Text>
                          <Text
                            className="text-gray-100 text-lg"
                            size="txtDhyanaBold18Gray100"
                          >
                            Legal
                          </Text>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
                        <div className="flex flex-row sm:gap-10 items-center justify-between mt-1">
                          <Text
                            className="text-gray-100 text-lg"
                            size="txtDhyanaRegular18"
                          >
                            Home
                          </Text>
                          <a
                            href="javascript:"
                            className="text-gray-100 text-lg"
                          >
                            <Text size="txtDhyanaRegular18">
                              Terms & Conditions
                            </Text>
                          </a>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
                        <div className="flex flex-row items-start justify-between mt-[13px]">
                          <Text
                            className="text-gray-100 text-lg"
                            size="txtDhyanaRegular18"
                          >
                            About Us
                          </Text>
                          <a
                            href="javascript:"
                            className="text-gray-100 text-lg"
                          >
                            <Text size="txtDhyanaRegular18">
                              Privacy Policy
                            </Text>
                          </a>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
                        <div className="flex flex-row items-start justify-between mt-3">
                          <Text
                            className="text-gray-100 text-lg"
                            size="txtDhyanaRegular18"
                          >
                            Services
                          </Text>
                          <Text
                            className="text-gray-100 text-lg"
                            size="txtDhyanaRegular18"
                          >
                            Help Center
                          </Text>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
                        <div className="flex flex-row items-start justify-between mt-[11px]">
                          <Text
                            className="mb-0.5 text-gray-100 text-lg"
                            size="txtDhyanaRegular18"
                          >
                            Buisness Model
                          </Text>
                          <a
                            href="javascript:"
                            className="mt-0.5 text-gray-100 text-lg"
                          >
                            <Text size="txtDhyanaRegular18">Support</Text>
                          </a>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
          <div className="flex flex-col gap-[15px] items-center justify-start mr-[241px] mt-[923px] md:px-5 w-[43%] md:w-full">
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
              <Text className="text-gray-100 text-lg" size="txtDhyanaRegular18">
                Market Opportunity
              </Text>
              <Text className="text-gray-100 text-lg" size="txtDhyanaRegular18">
                FAQ
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
              <Text className="text-gray-100 text-lg" size="txtDhyanaRegular18">
                Roadmap
              </Text>
              <a href="javascript:" className="text-gray-100 text-lg">
                <Text size="txtDhyanaRegular18">Contact Us</Text>
              </a>
            </div>
          </div>
          <Text
            className="mr-[925px] mt-1.5 text-gray-100 text-xs"
            size="txtDhyanaRegular12"
          >
            MacSoft.AI © 2024. All Rights Reserved. Terms and Conditions apply
          </Text>
        </div>
      </div>
    </>
  );
};

export default FullWebsitePage;
