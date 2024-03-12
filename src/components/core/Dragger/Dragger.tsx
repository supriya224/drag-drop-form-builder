"use client";


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
import {  CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";


interface ToolbarItem {
  key: string;
  name: string;
  icon: string;
  static: boolean;
  content?: string;
  element?: string;
  component?: React.ComponentType<any>;
  type?: string;
  forwardRef?: boolean;
  field_name?: string;
  props?: any;
  label?: string;
}

// for Textarea deisgn import from shadcn ui
const MyText = (props: any) => {
  return <Textarea name={props.name} {...props.data} />;
};

// for Date deisgn import from shadcn ui
const DateTime = (props: any,ref:any) => {
  // const [date, setDate] = React.useState<Date | undefined>(Date());
  const [date, setDate] = React.useState<Date>()

  return (
    <Popover>
    <PopoverTrigger asChild>
      <Button
        variant={"outline"}
        className={cn(
          "w-[240px] flex justify-center text-left font-normal",
          !date && "text-muted-foreground"
        )}
      >
        <CalendarIcon className="mr-2 h-4 w-9 flex" />
        {date ? format(date, "PPP") : <span className=" items-center">Pick a date</span>}
      </Button>
    </PopoverTrigger>
    <PopoverContent className="w-auto p-3" align="start">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        initialFocus 
        className="flex"
      />
    </PopoverContent>
  </Popover>
  );
};


// for Radio deisgn import from shadcn ui
const MyRadio = (props: any, ref: any) => {
  const { name, value,defaultValue } = props;
  return (
  //   <RadioGroup ref={ref} defaultValue={defaultValue} name={props.name} {...props.data}>
  //     <RadioGroupItem ref={ref} value={value} name={props.name} {...props.data} />
  // </RadioGroup>
  <RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" />
    <label htmlFor="option-one">Option One</label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" />
    <label htmlFor="option-two">Option Two</label>
  </div>
</RadioGroup>
  );
};

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
const MyProgress = React.forwardRef((props: any, ref: any) => {
  const { defaultValue } = props;
  return (
    <Progress
      ref={ref}
      defaultValue={defaultValue}
    />
  );
});
const MySwitch = React.forwardRef((props: any, ref: any) => {
  const { name, defaultValue, disabled } = props;
  return (
    <Switch
      ref={ref}
      name={name}
      defaultValue={defaultValue}
      disabled={disabled}
    />
  );
});

interface ToolBarList extends Omit<ToolbarItem,"content">{
  content:string
}

Registry.register("MyInput", MyInput as any);
Registry.register("Test", MyText as any);
Registry.register("Date", DateTime as any);
Registry.register("Radio", MyRadio as any);
Registry.register("Select", DateTime as any);
Registry.register("Progress", MyProgress as any);
Registry.register("Switch", MySwitch as any);
Registry.register("Button", Button as any);



var toolbarItems: ToolbarItem[] | undefined=[
  {
    key: "Header",
    name: "Header Text",
    icon: "fa fa-header",
    static: true,
    content: "Placeholder Text...",
  },
  {
    key: "MyInput",
    element: "CustomElement",
    component: MyInput,
    type: "custom",
    forwardRef: true,
    field_name: "Email",
    name: "Email",
    icon: "fa-solid fa-envelope",
    props: { test: "test_input" },
    content: "",
    static: false,
    label: "Input",
  },
  {
    key: "MyInput",
    element: "CustomElement",
    component: MyInput,
    type: "custom",
    forwardRef: true,
    field_name: "Input",
    name: "Phone  Number",
    icon: "fa fa-phone",
    props: { test: "test_input" },
    content: "",
    static: false,
    label: "Phone Number",
  },
  
  {
    key: "Radio",
    name: "Radio",
    component:MyRadio,
    static: true,
    icon: "fa fa-circle-dot",
    forwardRef: true,
    content: "Placeholder Text...",
    element: "CustomElement",
    type: "custom",
    field_name: "Date_time",
    props: { test: "test_input" },
    label: "Multiple Choice",
  },

  {
    key: "Progress",
    name: "Progress",
    component:MyProgress,
    static: true,
    icon: "fa-solid fa-bars-progress",
    forwardRef: true,
    content: "Placeholder Text...",
    element: "CustomElement",
    type: "custom",
    field_name: "Date_time",
    props: { test: "test_input" },
    label: " Progress Btn",
  },

  {
    key: "Switch",
    name: "Switch",
    component:MySwitch,
    static: true,
    icon: "fa-solid fa-toggle-on",
    forwardRef: true,
    content: "Placeholder Text...",
    element: "CustomElement",
    type: "custom",
    field_name: "Date_time",
    props: { test: "test_input" },
    label: "Switch Choice",
  },
  {
    key: "Image",
    name: "Image",
    static: true,
    icon:"fa-solid fa-image",
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
          {/* Pass toolbarItems to ReactFormBuilder */}
          <ReactFormBuilder toolbarItems={toolbarItems} />
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Dragger;


// /* eslint-disable react/display-name */
// // eslint-disable-next-line react/display-name

// import React, { useMemo, useState } from "react";
// import { ReactFormBuilder, Registry } from "react-form-builder2";



// import "react-form-builder2/dist/app.css";
// // import Demobar from "../demoBar";
// // import { JOHN } from "@/app/variables";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import {  CalendarIcon } from "lucide-react";
// import { Calendar } from "@/components/ui/calendar";
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
// import { Button } from "@/components/ui/button";
// import { format } from "date-fns";
// import { cn } from "@/lib/utils";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
// import { Switch } from "@/components/ui/switch";
// import { Progress } from "@/components/ui/progress";
// // import dynamic from "next/dynamic";
// // import Demobar from "../demoBar";
// // import { JOHN } from "@/app/variables";
// import MyInput from "../Input";


// interface ToolbarItem {
//   key: string;
//   name: string;
//   icon: string;
//   static: boolean;
//   content?: string;
//   element?: string;
//   component?: React.ComponentType<any>;
//   type?: string;
//   forwardRef?: boolean;
//   field_name?: string;
//   props?: any;
//   label?: string;
// }
// interface ToolBarList extends Omit<ToolbarItem,"content">{
//   content:string
// }

// // for Textarea deisgn import from shadcn ui
// const MyText = (props: any) => {


//   return <Textarea name={props.name} {...props.data} />;
// };

// // for Date deisgn import from shadcn ui
// const DateTime = (props: any,ref:any) => {
//   // const [date, setDate] = React.useState<Date | undefined>(Date());
//   const [date, setDate] = React.useState<Date>()

//   return (
//     <Popover>
//     <PopoverTrigger asChild>
//       <Button
//         variant={"outline"}
//         className={cn(
//           "w-[240px] flex justify-center text-left font-normal",
//           !date && "text-muted-foreground"
//         )}
//       >
//         <CalendarIcon className="mr-2 h-4 w-9 flex" />
//         {date ? format(date, "PPP") : <span className=" items-center">Pick a date</span>}
//       </Button>
//     </PopoverTrigger>
//     <PopoverContent className="w-auto p-3" align="start">
//       <Calendar
//         mode="single"
//         selected={date}
//         onSelect={setDate}
//         initialFocus 
//         className="flex"
//       />
//     </PopoverContent>
//   </Popover>
//   );
// };


// // for Radio deisgn import from shadcn ui
// const MyRadio = (props: any, ref: any) => {
//   const { name, value,defaultValue } = props;
//   return (
//   //   <RadioGroup ref={ref} defaultValue={defaultValue} name={props.name} {...props.data}>
//   //     <RadioGroupItem ref={ref} value={value} name={props.name} {...props.data} />
//   // </RadioGroup>
//   <RadioGroup defaultValue="option-one">
//   <div className="flex items-center space-x-2">
//     <RadioGroupItem value="option-one" id="option-one" />
//     <label htmlFor="option-one">Option One</label>
//   </div>
//   <div className="flex items-center space-x-2">
//     <RadioGroupItem value="option-two" id="option-two" />
//     <label htmlFor="option-two">Option Two</label>
//   </div>
// </RadioGroup>
//   );
// };

// // for input deisgn import from shadcn ui


// const MyProgress = React.forwardRef((props: any, ref: any) => {
//   const { defaultValue } = props;
//   return (
//     <Progress
//       ref={ref}
//       defaultValue={defaultValue}
//     />
//   );
// });
// const MySwitch = React.forwardRef((props: any, ref: any) => {
//   const { name, defaultValue, disabled } = props;
//   return (
//     <Switch
//       ref={ref}
//       name={name}
//       defaultValue={defaultValue}
//       disabled={disabled}
//     />
//   );
// });






// const toolbarItems: ToolBarList[]=[
//   {
//     key: "Header",
//     name: "Header Text",
//     icon: "fa fa-header",
//     static: false,
//     content: "Placeholder Text...",
//   },
//   {
//     key: "MyInput",
//     element: "CustomElement",
//     component: MyInput,
    
//     type: "custom",
//     forwardRef: true,
//     field_name: "Email",
//     name: "Email",
//     icon: "fa-solid fa-envelope",
//     props: { test: "test_input" },
//     static: false,
//     label: "Input",
//     content:"First content"
//   },
//   {
//     key: "MyInput",
//     element: "CustomElement",
//     component: MyInput,
//     type: "custom",
//     forwardRef: true,
//     field_name: "Input",
//     name: "Phone  Number",
//     icon: "fa fa-phone",
//     props: { test: "test_input" },
//     content: "My First Input",
//     static: false,
//     label: "Phone Number",
//   },
  
//   {
//     key: "Radio",
//     name: "Radio",
//     component:MyRadio,
//     static: true,
//     icon: "fa fa-circle-dot",
//     forwardRef: true,
//     content: "Placeholder Text...",
//     element: "CustomElement",
//     type: "custom",
//     field_name: "Date_time",
//     props: { test: "test_input" },
//     label: "Multiple Choice",
//   },

//   {
//     key: "Progress",
//     name: "Progress",
//     component:MyProgress,
//     static: true,
//     icon: "fa-solid fa-bars-progress",
//     forwardRef: true,
//     content: "Placeholder Text...",
//     element: "CustomElement",
//     type: "custom",
//     field_name: "Date_time",
//     props: { test: "test_input" },
//     label: " Progress Btn",
//   },

//   {
//     key: "Switch",
//     name: "Switch",
//     component:MySwitch,
//     static: true,
//     icon: "fa-solid fa-toggle-on",
//     forwardRef: true,
//     content: "Placeholder Text...",
//     element: "CustomElement",
//     type: "custom",
//     field_name: "Date_time",
//     props: { test: "test_input" },
//     label: "Switch Choice",
//   },
//   {
//     key: "Image",
//     name: "Image",
//     static: true,
//     icon:"fa-solid fa-image",
//     content: "This is the image input",
//   },
//   {
//     key: "DateTime",
//     element: "CustomElement",
//     component: DateTime,
//     type: "custom",
//     forwardRef: true,
//     field_name: "Date_time",
//     name: "Date_time",
//     props: { test: "test_input" },
//     content: "This is the date time input",
//     icon: "fa-regular fa-calendar-days",
//     static: false,
//     label: "Date_time",
//   },
//   {
//     key: "MyText",
//     element: "CustomElement",
//     component: MyText,
//     type: "custom",
//     forwardRef: true,
//     field_name: "Email",
//     name: "TextArea",
//     props: { test: "test_input" },
//     content: "This is the text field input",
//     icon: "fa-solid fa-text-height",
//     static: false,
//     label: "TextArea",
//   },
// ];

// const Dragger = () => {
//   const [isMounted, setisMounted] = React.useState(false);
 
//   React.useEffect(() => {
   
//     setisMounted(true);
//   }, []);

//   if (isMounted && typeof window !== 'undefined') {
//     Registry.register("MyInput", MyInput as any);
// Registry.register("Test", MyText as any);
// Registry.register("Date", DateTime as any);
// Registry.register("Radio", MyRadio as any);
// Registry.register("Select", DateTime as any);
// Registry.register("Progress", MyProgress as any);
// Registry.register("Switch", MySwitch as any);
// Registry.register("Button", Button as any);
//   }

//   if (isMounted) {
//     return (
//       <div className="flex flex-row-reverse w-full">
//         <div className="w-[60%]">
//           {/* <Demobar variables={JOHN} /> */}
//         </div>
//         <div className="w-full mr-2 ">
//           {/* Pass toolbarItems to ReactFormBuilder */}
//           <ReactFormBuilder toolbarItems={toolbarItems} />
//         </div>
//       </div>
//     );
//   } else {
//     return null;
//   }
// };

// export default Dragger;
