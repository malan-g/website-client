import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

function Career() {
  return (
    <div className="grid grid-cols-6 mt-8 px-4">
      <div className="col-span-6 md:col-span-1 text-[20px]">2023</div>
      <div className="col-span-5 md:col-start-2 mb-12">
        <h1 className="text-[20px] font-medium">Junior Web Developer</h1>
        <h2 className="text-[17px] leading-[18px] mb-4">
          Theia Design and Marketing Solutions
        </h2>
        <p className="text-[15px] mb-3">
          Career Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Assumenda excepturi vitae hic debitis consequuntur ad ex minima illo
          odio quo. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Programming Languages</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA guidelines for accessibility.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              JavaScript Frameworks and Libraries
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA guidelines for accessibility.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>PHP frameworks and Libraries</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA guidelines for accessibility.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Development Tools & Environments
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA guidelines for accessibility.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      {/* 2 */}
      <div className="col-span-6 md:col-span-1 text-[20px] ">2021</div>
      <div className="col-span-5 md:col-start-2 mb-12">
        <h1 className="text-[20px] font-medium">Software Development co-op</h1>
        <h2 className="text-[17px] leading-[18px] mb-4">
          Auckland University of Technology
        </h2>
        <p className="text-[15px] mb-3">
          Career Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Assumenda excepturi vitae hic debitis consequuntur ad ex minima illo
          odio quo. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Programming Languages</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA guidelines for accessibility.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              JavaScript Frameworks and Libraries
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA guidelines for accessibility.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Cloud Services</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA guidelines for accessibility.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Development Tools & Environments
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA guidelines for accessibility.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      {/* 3 */}
      <div className="col-span-6 md:col-span-1 text-[20px]">2020</div>
      <div className="col-span-5 md:col-start-2 mb-12">
        <h1 className="text-[20px] font-medium">
          Group Assignment - Android Application
        </h1>
        <h2 className="text-[17px] leading-[18px] mb-4">
          Auckland University of Technology
        </h2>
        <p className="text-[15px] mb-3">
          Career Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Assumenda excepturi vitae hic debitis consequuntur ad ex minima illo
          odio quo. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Programming Languages</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA guidelines for accessibility.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              JavaScript Frameworks and Libraries
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA guidelines for accessibility.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Cloud Services</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA guidelines for accessibility.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Development Tools & Environments
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA guidelines for accessibility.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default Career;
