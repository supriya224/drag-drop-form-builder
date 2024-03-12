'use client';
import React from "react";
import { Input } from "../ui/input";

// eslint-disable-next-line react/display-name
const MyInput = React.forwardRef((props: any, ref: any) => {
    const { name, defaultValue, disabled } = props;
    const [isMounted, setisMounted] = React.useState(false);
    React.useEffect(() => {
        setisMounted(true);
        return()=>{
            setisMounted(false);
        }
    }, [])
    if (isMounted) {
        return (
            <Input
              ref={ref}
              name={name}
              defaultValue={defaultValue}
              disabled={disabled}
            />
          );
    }else{
        return null;
    }
  });
  export default MyInput;