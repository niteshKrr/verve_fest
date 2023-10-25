import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

export default function App() {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">NextUI</p>
          <p className="text-small text-default-500">nextui.org</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p>Make beautiful websites regardless of your design experience.</p>
      </CardBody>
      <Divider/>
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="/all_events"
        >
          All events yaha hai ....
        </Link>
      </CardFooter>
    </Card>
  );
}










// const people = [
//   {
//     name: 'Leslie Alexander',
//     role: 'Co-Founder / CEO',
//     imageUrl:
//       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//   },
//   // More people...
// ]

// export default function Example() {
//   return (
//     <div className="bg-white py-24 sm:py-32">
//       <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
//         <div className="max-w-2xl">
//           <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
//           <p className="mt-6 text-lg leading-8 text-gray-600">
//             Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
//             suspendisse.
//           </p>
//         </div>
//         <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
//           {people.map((person) => (
//             <li key={person.name}>
//               <div className="flex items-center gap-x-6">
//                 <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
//                 <div>
//                   <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
//                   <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
//                 </div>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   )
// }

