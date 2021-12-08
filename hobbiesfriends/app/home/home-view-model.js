import { fromObject } from '@nativescript/core'

export function HomeViewModel() {
  const viewModel = fromObject({
    persons: [
      {
        name: 'Alia',
        photo: '~/images/person1.jpg',
        passion: 'Patisserie',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,'
          + 'sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,'
        + ' sed diam voluptua.',
      },
      {
        name: 'Bastien',
        photo: '~/images/person2.jpg',
        passion: '',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,'
          + 'sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,'
          + ' sed diam voluptua.',
      },
      {
        name: 'Tom',
        photo: '~/images/person3.jpg',
        passion: '',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,'
          + 'sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,'
          + ' sed diam voluptua.',
      },
      {
        name: 'Alexandra',
        photo: '~/images/person4.jpg',
        passion: '',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,'
          + 'sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,'
          + ' sed diam voluptua.',
      },
      {
        name: 'Jeanne',
        photo: '~/images/person5.jpg',
        passion: '',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,'
          + 'sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,'
          + ' sed diam voluptua.',
      },
      {
        name: 'Louis',
        photo: '~/images/person6.jpg',
        passion: '',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,'
          + 'sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,'
          + ' sed diam voluptua.',
      },
      {
        name: 'Igor',
        photo: '~/images/person7.jpg',
        passion: '',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,'
          + 'sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,'
          + ' sed diam voluptua.',
      },
      {
        name: 'Rothema',
        photo: '~/images/person8.jpg',
        passion: '',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,'
          + 'sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,'
          + ' sed diam voluptua.',
      },
      {
        name: 'Jack',
        photo: '~/images/person9.jpg',
        passion: '',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,'
          + 'sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,'
          + ' sed diam voluptua.',
      },
      {
        name: 'James',
        photo: '~/images/person10.jpg',
        passion: '',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,'
          + 'sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,'
          + ' sed diam voluptua.',
      },
    ],
  })

  return viewModel
}
