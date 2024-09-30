import Image from "next/image"
import Card from "~/components/Card"

export default function Home() {
  return (
    <div className="flex flex-row min-h-screen justify-center items-center">
      <main>
        <h1 className="text-mini">Xin chào</h1>
        <h2 className="text">Xin chào các bạn mình là Trần Phước Thiện</h2>
        <Card />
        {/* Image */}
        <div className="w-[300px] h-[300px] bg-slate-500 flex justify-center items-center rounded-sm ">
          <Image
            className=" rounded-sm"
            src="/images/logo.jpeg"
            alt="loading"
            width={200}
            height={200}
            quality={100}
          />
          <Image
            className=" rounded-sm"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZ-ZZ0tU_TRmrf5NnmtRcdVpucHM_EK7Gkw&s"
            alt="loading"
            width={200}
            height={200}
            quality={100}
          />
        </div>
      </main>
    </div>
  )
}

// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "~/components/ui/accordion"
// import { BarTest } from "~/components/ui/bar"
// import { Checkbox } from "~/components/ui/checkbox"
{
  /* <Accordion type="single" collapsible>
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
        </div> */
}
