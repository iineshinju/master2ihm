import { fromObject } from '@nativescript/core'

export function MessageItemsViewModel() {
  const viewModel = fromObject({
    persons: [
      {
        name: 'Alia',
        photo: '~/images/person1.jpg',
        message: 'Hi',
      },
      {
        name: 'Bastien',
        photo: '~/images/person2.jpg',
        message: 'I am waiting for you.',
      },
      {
        name: 'Tom',
        photo: '~/images/person3.jpg',
        message: 'Can we go somewhere?',
      },
      {
        name: 'Alexandra',
        photo: '~/images/person4.jpg',
        message: 'Lorem ipsum dolor sit amet.',
      },
      {
        name: 'Jeanne',
        photo: '~/images/person5.jpg',
        message: 'ut labore et dolore magna aliquyam erat',
      },
      {
        name: 'Louis',
        photo: '~/images/person6.jpg',
        message: 'sed diam nonumy eirmod tempor invidunt ut '
        +'labore et dolore magna aliquyam erat',
      },
      {
        name: 'Igor',
        photo: '~/images/person7.jpg',
        message: ' sed diam voluptua.',
      },
      {
        name: 'Rothema',
        photo: '~/images/person8.jpg',
        message: ' sed diam voluptua.',
      },
      {
        name: 'Jack',
        photo: '~/images/person9.jpg',
        message: ' sed diam voluptua.',
      },
      {
        name: 'James',
        photo: '~/images/person10.jpg',
        message: ' consetetur sadipscing elitr.',
      },
    ],
  })
  return viewModel
}
