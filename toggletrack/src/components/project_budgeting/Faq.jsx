import React from "react";
import { FaqsData } from "./FAQ_data/faq";
import style from "./Faq.module.css"
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
 export const Faq = () => {
  return (
    <div className={style.faqsr}>
      <Accordion allowToggle allowMultiple={false}>
        {FaqsData.map((el, idx) => {
          return (
            <div key={idx} className={style.mainDiv}>
              <AccordionItem borderTop="1px solid black" borderBottom="0px">
                <h2>
                  <AccordionButton
                    _expanded={{ bg: "#E57CD8", color: "#412a4c" }}
                  >
                    {/* <SimpleGrid columns={[1, 1, 1]} > */}
                    <Box
                      
                      className={style.box}
                    >
                      {el.Heading}
                    </Box>
                    {/* </SimpleGrid> */}

                    <AccordionIcon boxSize={8} />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  bg="#E57CD8"
                  color="#412a4c"
                  textAlign="left"
                  pb={4}
                >
                  {el.Description}
                </AccordionPanel>
              </AccordionItem>
            </div>
          );
        })}
      </Accordion>
    </div>
  );
};

