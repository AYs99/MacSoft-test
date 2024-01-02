import React from "react";

import { Button, Text } from "components";

const FullWebsiteRowcontactUs = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex sm:flex-col flex-row gap-[15px] items-start justify-start w-auto sm:w-full">
          <div className="flex flex-col items-center justify-center px-2.5 py-[5px] w-auto">
            <Text
              className="text-indigo-900 text-xs w-auto"
              size="txtDhyanaRegular12Indigo900"
            >
              {props?.hometext}
            </Text>
          </div>
          <div className="flex flex-col items-center justify-center px-2.5 py-[5px] w-auto">
            <Text
              className="text-indigo-900 text-xs w-auto"
              size="txtDhyanaRegular12Indigo900"
            >
              {props?.aboutustext}
            </Text>
          </div>
          <div className="flex flex-col items-center justify-center px-2.5 py-[5px] w-auto">
            <Text
              className="text-indigo-900 text-xs w-auto"
              size="txtDhyanaRegular12Indigo900"
            >
              {props?.servicestext}
            </Text>
          </div>
          <div className="flex flex-col items-center justify-center px-2.5 py-[5px] w-auto">
            <Text
              className="text-indigo-900 text-xs w-auto"
              size="txtDhyanaRegular12Indigo900"
            >
              {props?.businessmodeltext}
            </Text>
          </div>
          <div className="flex flex-col items-center justify-center px-2.5 py-[5px] w-auto">
            <Text
              className="text-indigo-900 text-xs w-auto"
              size="txtDhyanaRegular12Indigo900"
            >
              {props?.roadmaptext}
            </Text>
          </div>
        </div>
        <Button
          className="cursor-pointer font-dhyana leading-[normal] min-w-[105px] rounded-[5px] text-center text-xs"
          size="xs"
          variant="gradient"
          color="light_blue_800_indigo_900"
        >
          {props?.contactusbutton}
        </Button>
      </div>
    </>
  );
};

FullWebsiteRowcontactUs.defaultProps = {
  hometext: "Home",
  aboutustext: "About Us",
  servicestext: "Services",
  businessmodeltext: "Buisness Model",
  roadmaptext: "Roadmap",
  contactusbutton: "Contact Us",
};

export default FullWebsiteRowcontactUs;
