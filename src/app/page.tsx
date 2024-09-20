import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion"
import { BarTest } from "~/components/ui/bar"

import { Checkbox } from "~/components/ui/checkbox"

export default function Home() {
  return (
    <div className="flex flex-row min-h-screen justify-center items-center">
      <main>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Về python v1.0.0</AccordionTrigger>
            <AccordionContent>
              Đây là phiên bản đầu tiên của python spendinng hoàn thành cách đây
              2 tuần
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Về python v1.0.1</AccordionTrigger>
            <AccordionContent>
              Đây là phiên bản vá lỗi cho python v1.0.0
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <BarTest />

        <div className="flex items-center space-x-2">
          <Checkbox id="terms2" disabled />
          <label
            htmlFor="terms2"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
        </div>
      </main>
    </div>
  )
}
