/* eslint-disable react/display-name */
// eslint-disable-next-line react/display-name

"use client";
import React from "react";
import { ReactFormBuilder, Registry } from "react-form-builder2";
import "react-form-builder2/dist/app.css";
import Demobar from "../demoBar";
import { JOHN } from "@/app/variables";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, CalendarIcon } from "lucide-react";
// import { RadioGroupItem } from "@radix-ui/react-radio-group";
// import { RadioGroup } from "@radix-ui/react-radio-group";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { format } from "path";
import { cn } from "@/lib/utils";

const Hell = (props: any) => {
  // for input deisgn import from shadcn ui
  console.log("props", props);
  return <Input name={props.name} {...props.data} />;
};

// for Textarea deisgn import from shadcn ui
const MyText = (props: any) => {
  return <Textarea name={props.name} {...props.data} />;
};

// for Date deisgn import from shadcn ui
const DateTime = (props: any) => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const formatDate = (date: Date | undefined) => {
    if (!date) return "Pick a date";
    return format(date);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[240px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {formatDate(date)}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          name={props.name} {...props.data}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};


// for Radio deisgn import from shadcn ui
// const MyRadio = (props: any, ref: any) => {
//   const { name, value,defaultValue } = props;
//   return (
//     <RadioGroup ref={ref} defaultValue={defaultValue} name={props.name} {...props.data}>
//       <RadioGroupItem ref={ref} value={value} name={props.name} {...props.data} />
//   </RadioGroup>
//   );
// };

// for input deisgn import from shadcn ui
const MyInput = React.forwardRef((props: any, ref: any) => {
  const { name, defaultValue, disabled } = props;
  return (
    <Input
      ref={ref}
      name={name}
      defaultValue={defaultValue}
      disabled={disabled}
    />
  );
});

Registry.register("TestComponent", MyInput as any);
Registry.register("Test", MyText as any);
Registry.register("Date", DateTime as any);
// Registry.register("Radio", MyRadio as any);

var items = [
  {
    key: "Header",
    name: "Header Text",
    icon: "fa fa-header",
    static: true,
    content: "Placeholder Text...",
  },
  {
    key: "Paragraph",
    name: "Paragraph",
    static: true,
    icon: "fa fa-paragraph",
    content: "Placeholder Text...",
  },
   {
    key: "RadioButtons",
    name: "Multiple Choice",
    static: true,
    icon: "fa fa-circle-dot",
    forwardRef: true,
    content: "Placeholder Text...",
    type: "custom",
    field_name: "Radio",
    props: { test: "test_input" },
    label: "Multiple choice",
  },
  {
    key: "Image",
    name: "Image",
    static: true,
  },
  {
    key: "DateTime",
    element: "CustomElement",
    component: DateTime,
    type: "custom",
    forwardRef: true,
    field_name: "Date_time",
    name: "Date_time",
    props: { test: "test_input" },
    content: "",
    icon: "fa-regular fa-calendar-days",
    static: false,
    label: "Date_time",
  },
  {
    key: "MyText",
    element: "CustomElement",
    component: MyText,
    type: "custom",
    forwardRef: true,
    field_name: "Email",
    name: "TextArea",
    props: { test: "test_input" },
    content: "",
    icon: "fa-solid fa-text-height",
    static: false,
    label: "TextArea",
  },
  {
    key: "MyInput",
    element: "CustomElement",
    component: Hell,
    type: "custom",
    forwardRef: true,
    field_name: "Email",
    name: "Email",
    icon: "fa-solid fa-envelope",
    props: { test: "test_input" },
    content: "",
    static: false,
    label: "Email",
  },
  {
    key: "MyInput",
    element: "CustomElement",
    component: Hell,
    type: "custom",
    forwardRef: true,
    field_name: "Phone Number",
    name: "Phone  Number",
    icon: "fa fa-phone",
    props: { test: "test_input" },
    content: "",
    static: false,
    label: "Phone Number",
  },
];

const Dragger = () => {
  const [isMounted, setisMounted] = React.useState(false);
  React.useEffect(() => {
    setisMounted(true);
  }, []);

  if (isMounted) {
    return (
      <div className="flex flex-row-reverse w-full">
        <div className="w-[60%]">
          <Demobar variables={JOHN} />,
        </div>
        <div className="w-full mr-2 ">
          <ReactFormBuilder toolbarItems={items} />
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Dragger;
