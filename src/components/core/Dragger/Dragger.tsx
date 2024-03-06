'use client';
import React from 'react'
import { ReactFormBuilder, Registry } from 'react-form-builder2'
import 'react-form-builder2/dist/app.css';
import Demobar from '../demoBar';
import { JOHN } from '@/app/variables';
import { Input } from '@/components/ui/input';

const Hell =(props:any)=>{
    console.log("props",props);
    
return <Input name={props.name} {...props.data} /> 
}

// eslint-disable-next-line react/display-name
const MyInput = React.forwardRef((props:any, ref:any) => {
    const { name, defaultValue, disabled } = props;
    return <Input ref={ref} name={name} defaultValue={defaultValue} disabled={disabled} />;
  });
Registry.register('TestComponent', MyInput as any);
var items = [{key: 'TestComponent',
element: 'CustomElement',
component: MyInput,
type: 'custom',
forwardRef: true,
field_name: 'email',
name: 'Input',
icon: 'fa fa-cog',
static: true,
props: { test: 'test_comp' },
label: 'Label Test',
content:'My First',

}, {
key: 'MyInput',
element: 'CustomElement',
component: Hell,
type: 'custom',
forwardRef: true,
field_name: 'my_input_',
name: 'My Input',
icon: 'fa fa-cog',
props: { test: 'test_input' },
content:'',
static: false,

label: 'Label Input',
},];
  

const Dragger = () => {
    const [isMounted, setisMounted] = React.useState(false);
    React.useEffect(() => {
    setisMounted(true);
    }, [])

    if (isMounted) {
    return (<div className='flex flex-row-reverse w-full'>
        <div className='w-[60%]'>

         <Demobar variables={JOHN} />,
        </div>
         <div className='w-full'>

         <ReactFormBuilder  toolbarItems={items}   />
         </div>
    </div>)
        
    }else{
        return null;
    }
 
}

export default Dragger