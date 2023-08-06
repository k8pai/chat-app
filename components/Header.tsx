import { SessionUser } from '@/typings';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';

// export default function Header({ user }: SessionUser) {
// 	return (
// 		<div className="px-6 mb-3 py-4 sticky top-0 bg-black z-50 border-b-[0.25px] border-b-neutral-800 flex justify-between shadow-md">
// 			<div className="space-y-1">
// 				<h1 className="text-xl font-semibold">General Chat</h1>
// 				<p className="text-xs">12,345 members</p>
// 			</div>
// 			<div className=" flex space-x-3 items-center">
// 				<Image
// 					src={user?.image!}
// 					alt={user?.name!}
// 					height={10}
// 					width={30}
// 					className="rounded-full aspect-square w-8 h-8"
// 				/>
// 				<button>
// 					<BsThreeDotsVertical className="rounded-full aspect-square w-6 h-6" />
// 				</button>
// 			</div>
// 		</div>
// 	);
// }

import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ');
}
export default function Header({ user }: SessionUser) {
	return (
		<Disclosure as="nav" className="border-b border-neutral-800">
			{({ open }) => (
				<>
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="relative flex h-16 items-center justify-between">
							{/* <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div> */}
							<div className="flex flex-1 items-center justify-start">
								<div className="flex flex-shrink-0 items-center">
									<img
										className="h-8 w-auto"
										src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
										alt="Your Company"
									/>
								</div>
								<div className="hidden sm:ml-6 sm:block">
									<div className="flex space-x-4 font-bold text-2xl">
										Chat App
									</div>
								</div>
							</div>
							<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
								{/* Profile dropdown */}
								<Menu as="div" className="relative ml-3">
									<div>
										<Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
											<span className="absolute -inset-1.5" />
											<span className="sr-only">
												Open user menu
											</span>
											<Image
												src={user?.image!}
												alt={user?.name!}
												height={10}
												width={30}
												className="rounded-full w-8 h-8"
											/>
											{/* <img
												className="h-8 w-8 rounded-full"
												src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
												alt=""
											/> */}
										</Menu.Button>
									</div>
									<Transition
										as={Fragment}
										enter="transition ease-out duration-100"
										enterFrom="transform opacity-0 scale-95"
										enterTo="transform opacity-100 scale-100"
										leave="transition ease-in duration-75"
										leaveFrom="transform opacity-100 scale-100"
										leaveTo="transform opacity-0 scale-95"
									>
										<Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-neutral-700 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
											{/* <Menu.Item>
												{({ active }) => (
													<a
														href="#"
														className={classNames(
															active
																? 'bg-gray-100'
																: '',
															'block px-4 py-2 text-sm text-gray-700',
														)}
													>
														Your Profile
													</a>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<a
														href="#"
														className={classNames(
															active
																? 'bg-gray-100'
																: '',
															'block px-4 py-2 text-sm text-gray-700',
														)}
													>
														Settings
													</a>
												)}
											</Menu.Item> */}
											<Menu.Item>
												{({ active }) => (
													<button
														onClick={() =>
															signOut()
														}
														className={classNames(
															active
																? 'bg-neutral-800/30'
																: '',
															'block w-full text-left px-4 py-2 text-sm text-white tracking-wide font-semibold',
														)}
													>
														Sign out
													</button>
												)}
											</Menu.Item>
										</Menu.Items>
									</Transition>
								</Menu>
							</div>
						</div>
					</div>

					{/* <Disclosure.Panel className="sm:hidden">
						<div className="space-y-1 px-2 pb-3 pt-2">
							{navigation.map((item) => (
								<Disclosure.Button
									key={item.name}
									as="a"
									href={item.href}
									className={classNames(
										item.current
											? 'bg-gray-900 text-white'
											: 'text-gray-300 hover:bg-gray-700 hover:text-white',
										'block rounded-md px-3 py-2 text-base font-medium',
									)}
									aria-current={
										item.current ? 'page' : undefined
									}
								>
									{item.name}
								</Disclosure.Button>
							))}
						</div>
					</Disclosure.Panel> */}
				</>
			)}
		</Disclosure>
	);
}
