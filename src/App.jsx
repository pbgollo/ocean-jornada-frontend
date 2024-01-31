import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card/Card'

function App() {

  //Carregamento dos dados via código
  // const item1 = {
  //   name: 'Rick Sanchez',
  //   image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  // }

  // const item2 = {
  //   name: 'Morty Smith',
  //   image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  // }
  
  // const item3 = {
  //   name: 'Summer Smith',
  //   image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
  // }

  // const item4 = {
  //   name: 'Beth Smith',
  //   image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
  // }

  // const itens = [item1, item2, item3, item4]

  const [itens, setItens] = useState([])

  async function carregarDadosApi(){

    const apiUrl = 'https://rickandmortyapi.com/api/character/'

    const response = await fetch(apiUrl)

    const body = await response.json()

    const results = body.results;

    setItens(results)

  }

  useEffect(function(){
    carregarDadosApi()
  }, [])

  
  return (
    <>
      <div className='cards'>
        {/* <Card item = {item1}/>
        <Card item = {item2}/>
        <Card item = {item3}/> */}
        {itens.map((item,i) => <Card item={item} key={i}/>)}
      </div>
    </>
  )
}

export default App
