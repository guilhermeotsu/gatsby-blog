import { Youtube, Github } from '@styled-icons/boxicons-logos'
import { Search, UpArrow } from '@styled-icons/boxicons-regular'
import { LightUp } from '@styled-icons/entypo'
import { Home } from '@styled-icons/boxicons-solid'
import { Grid3x3GapFill as Grid } from '@styled-icons/bootstrap'

const linksTop = [
  {
    label: 'Voltar para a Home',
    url: '/',
    icon: Home
  },
  {
    label: 'Pesquisar',
    url: '/search/',
    icon: Search
  },
  {
    label: 'Youtube',
    url: 'https://youtube.com',
    icon: Youtube
  },

  {
    label: 'Projetos',
    url: 'https://github.com/guilhermeotsu',
    icon: Github
  }
]

const linksBotton = [
  {
    label: 'Mudar visualização',
    icon: Grid
  },
  {
    label: 'Alterar tema',
    icon: LightUp
  },
  {
    label: 'Início',
    icon: UpArrow
  }
]

export default { 
  linksTop,
  linksBotton
}