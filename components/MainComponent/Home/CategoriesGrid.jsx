import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { IoGridOutline } from "react-icons/io5";
import { MdFormatListNumbered } from "react-icons/md";
import {
  ArchiveBoxXMarkIcon,
  ChevronDownIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
} from '@heroicons/react/16/solid'
import { Checkbox } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/16/solid'
import { useState } from 'react'
import sort from '../../../assets/images/sort.png'
import NavAfter from '../../Navbar/Nav'
import ProductCard from './ProductCard'
import data from '../Cart/Data'

export default function CategoriesGrid() {
  const [denimChecked, setDenimChecked] = useState(false);
  const [cottonChecked, setCottonChecked] = useState(false);
  const [silkChecked, setSilkChecked] = useState(false);
  const [nylonChecked, setNylonChecked] = useState(false);
  const [leatherChecked, setLeatherChecked] = useState(false);
  const [fiveStarChecked, setFiveStarChecked] = useState(false);
  const [fourStarChecked, setFourStarChecked] = useState(true); 
  const [threeStarChecked, setThreeStarChecked] = useState(false);
  const [twoStarChecked, setTwoStarChecked] = useState(false);
  return (
    <div className="container">
        <NavAfter />
        <div className='flex flex-row gap-8'>
        <div className="hidden sm:block w-1/4">
      <Disclosure as="div" className="mt-4 border-r border-r-black/10" defaultOpen={true}>
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-sm/6 font-medium text-black group-data-[hover]:text-black/80">
              Related Category
            </span>
            <ChevronDownIcon className="size-5 fill-black/60 group-data-[hover]:fill-black/80 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-6 mr-6 pb-10 text-sm/5 space-y-6 font-normal border-b  border-b-black/10">
            <h1>Free wears</h1>
            <h1>Underwares</h1>
            <h1>Jeans packets</h1>
            <h1>Summer clothes</h1>
            <h1>Winter clothes</h1>
            <h1>Bodycon dresses</h1>
            <h1>T_shirt packets</h1>
            <h1>Jumpers</h1> 
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" className="pb-10 pt-4 border-b border-b-black/10" defaultOpen={true}>
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-sm/6 font-medium text-black group-data-[hover]:text-black/80">
              Material
            </span>
            <ChevronDownIcon className="size-5 fill-black/60 group-data-[hover]:fill-black/80 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-6 text-sm/5 space-y-6 font-normal">
          <span className='flex space-x-4'>
          <Checkbox
            checked={denimChecked}
            onChange={() => setDenimChecked(!denimChecked)}
            className="group block size-6 p-1 rounded border bg-white data-[checked]:bg-red-500 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[checked]:data-[disabled]:bg-gray-500"
          >
            <CheckIcon className="hidden size-4 fill-white group-data-[checked]:block" />
          </Checkbox>
          <h1>Denim</h1>
          </span>
          <span className='flex space-x-4'>
          <Checkbox
            checked={cottonChecked}
            onChange={() => setCottonChecked(!cottonChecked)}
            className="group block size-6 p-1 rounded border bg-white data-[checked]:bg-red-500 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[checked]:data-[disabled]:bg-gray-500"
          >
            <CheckIcon className="hidden size-4 fill-white group-data-[checked]:block" />
          </Checkbox>
          <h1>Cotton</h1>
          </span>
          <span className='flex space-x-4'>
          <Checkbox
            checked={silkChecked}
            onChange={() => setSilkChecked(!silkChecked)}
            className="group block size-6 p-1 rounded border bg-white data-[checked]:bg-red-500 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[checked]:data-[disabled]:bg-gray-500"
          >
            <CheckIcon className="hidden size-4 fill-white group-data-[checked]:block" />
          </Checkbox>
          <h1>Silk</h1>
          </span>
          <span className='flex space-x-4'>
          <Checkbox
            checked={nylonChecked}
            onChange={() => setNylonChecked(!nylonChecked)}
            className="group block size-6 p-1 rounded border bg-white data-[checked]:bg-red-500 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[checked]:data-[disabled]:bg-gray-500"
          >
            <CheckIcon className="hidden size-4 fill-white group-data-[checked]:block" />
          </Checkbox>
          <h1>Nylon</h1>
          </span>
          <span className='flex space-x-4'>
          <Checkbox
            checked={leatherChecked}
            onChange={() => setLeatherChecked(!leatherChecked)}
            className="group block size-6 p-1 rounded border bg-white data-[checked]:bg-red-500 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[checked]:data-[disabled]:bg-gray-500"
          >
            <CheckIcon className="hidden size-4 fill-white group-data-[checked]:block" />
          </Checkbox>
          <h1>Leather</h1>
          </span>
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" className="pt-4 pb-10" defaultOpen={true}>
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-sm/6 font-medium text-black group-data-[hover]:text-black/80">
             Rating
            </span>
            <ChevronDownIcon className="size-5 fill-black/60 group-data-[hover]:fill-black/80 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-6 text-sm/5 space-y-6 font-normal">
            <span className='flex space-x-4'>
              <Checkbox
                checked={fiveStarChecked}
                onChange={() => setFiveStarChecked(!fiveStarChecked)}
                className="group block size-6 p-1 rounded border bg-white checked:bg-red-500 disabled:cursor-not-allowed disabled:opacity-50 checked:disabled:bg-gray-500"
              >
                <CheckIcon className="hidden size-4 fill-white group-checked:block" />
              </Checkbox>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.287 3.951c.3.921-.755 1.688-1.538 1.117l-3.357-2.44a1 1 0 00-1.175 0l-3.357 2.44c-.783.571-1.838-.196-1.538-1.117l1.287-3.951a1 1 0 00-.364-1.118L2.316 9.377c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.95z" />
                  </svg>
                ))}
              </div>
            </span>
            <span className='flex space-x-4'>
              <Checkbox
                checked={fourStarChecked}
                onChange={() => setFourStarChecked(!fourStarChecked)}
                className="group block size-6 p-1 rounded border bg-white data-[checked]:bg-red-500 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[checked]:data-[disabled]:bg-gray-500"
                >
            <CheckIcon className="hidden size-4 fill-white group-data-[checked]:block" />
            </Checkbox>
              <div className="flex items-center">
                {[...Array(4)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.287 3.951c.3.921-.755 1.688-1.538 1.117l-3.357-2.44a1 1 0 00-1.175 0l-3.357 2.44c-.783.571-1.838-.196-1.538-1.117l1.287-3.951a1 1 0 00-.364-1.118L2.316 9.377c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.95z" />
                  </svg>
                ))}
                {[...Array(1)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.287 3.951c.3.921-.755 1.688-1.538 1.117l-3.357-2.44a1 1 0 00-1.175 0l-3.357 2.44c-.783.571-1.838-.196-1.538-1.117l1.287-3.951a1 1 0 00-.364-1.118L2.316 9.377c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.95z" />
                  </svg>
                ))}
              </div>
            </span>
            <span className='flex space-x-4'>
              <Checkbox
                checked={threeStarChecked}
                onChange={() => setThreeStarChecked(!threeStarChecked)}
                className="group block size-6 p-1 rounded border bg-white data-[checked]:bg-red-500 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[checked]:data-[disabled]:bg-gray-500"
                >
            <CheckIcon className="hidden size-4 fill-white group-data-[checked]:block" />
            </Checkbox>
              <div className="flex items-center">
                {[...Array(3)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.287 3.951c.3.921-.755 1.688-1.538 1.117l-3.357-2.44a1 1 0 00-1.175 0l-3.357 2.44c-.783.571-1.838-.196-1.538-1.117l1.287-3.951a1 1 0 00-.364-1.118L2.316 9.377c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.95z" />
                  </svg>
                ))}
                {[...Array(2)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.287 3.951c.3.921-.755 1.688-1.538 1.117l-3.357-2.44a1 1 0 00-1.175 0l-3.357 2.44c-.783.571-1.838-.196-1.538-1.117l1.287-3.951a1 1 0 00-.364-1.118L2.316 9.377c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.95z" />
                  </svg>
                ))}
              </div>
            </span>
            <span className='flex space-x-4'>
              <Checkbox
                checked={twoStarChecked}
                onChange={() => setTwoStarChecked(!twoStarChecked)}
                className="group block size-6 p-1 rounded border bg-white data-[checked]:bg-red-500 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[checked]:data-[disabled]:bg-gray-500"
                >
            <CheckIcon className="hidden size-4 fill-white group-data-[checked]:block" />
            </Checkbox>
              <div className="flex items-center">
                {[...Array(2)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.287 3.951c.3.921-.755 1.688-1.538 1.117l-3.357-2.44a1 1 0 00-1.175 0l-3.357 2.44c-.783.571-1.838-.196-1.538-1.117l1.287-3.951a1 1 0 00-.364-1.118L2.316 9.377c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.95z" />
                  </svg>
                ))}
                {[...Array(3)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.287 3.951c.3.921-.755 1.688-1.538 1.117l-3.357-2.44a1 1 0 00-1.175 0l-3.357 2.44c-.783.571-1.838-.196-1.538-1.117l1.287-3.951a1 1 0 00-.364-1.118L2.316 9.377c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.95z" />
                  </svg>
                ))}
              </div>
            </span>
          </DisclosurePanel>
        </Disclosure>
      </div>
      <div className='w-full sm:w-3/4 mt-6'>
      <div className='flex flex-row justify-between'>
        <h1 className='font-semibold text-sm'>120 items found</h1>
        <div className="">
      <Menu>
        <MenuButton className="inline-flex justify-between pl-2 rounded border border-black/10 text-sm/6 font-semibold shadow-inner shadow-white/10 focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white w-full sm:w-60 ">
        <span className='hidden sm:block'>Sort by price</span> 
          <div className='flex flex-row'>
          <ChevronDownIcon className="size-4 mt-1 border-black hidden sm:block" />
          <img src={sort} alt="" className='size-6 border-black/10 p-1 block sm:hidden'/>
          <IoGridOutline className=' border-r border-l size-6 border-black/10 bg-black/5 p-1'/>
          <MdFormatListNumbered className='size-6 p-1'/>
          </div>
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="w-52 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-black transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">            
              Sort by date modified
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
              Sort by size
            </button>
          </MenuItem>
          <div className="my-1 h-px bg-white/5" />
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
              Sort by Name
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">           Delete
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
      </div>
      <div className='w-full sm:flex grid grid-cols-4 overflow-y-auto sm:flex-wrap sm:gap-12'>
            {
            data.productData.map ((item, index)=>{
              return(
                <ProductCard img={item.img} title={item.title} desc={item.desc} price={item.price} key={index} />
              )
            })
          }
            </div>
      </div>
      </div>
    </div>
  )
}