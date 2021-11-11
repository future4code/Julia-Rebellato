import React from "react";
import { useState } from "react";
import { CharacterDetailPage } from "./pages/CharacterDetailPage/CharacterDetailPage";
import  CharacterListPage  from "./pages/CharacterListPage/CharacterListPage";

export default function App() {

  const [ currentPage, setCurrentPage] = useState("list")
  const [ detailsUrl, setDetailsUrl ] = useState("")

  function goToDetailsPage(url) {
    setCurrentPage("details")
    setDetailsUrl(url)
  }

  function goToListPage () {
    setCurrentPage("list")
  }


  function selectPage() {
      if (currentPage === "list") {
        return <CharacterListPage CharacterListPage goToDetailsPage={goToDetailsPage}/>
      } else {
        return <CharacterDetailPage CharacterDetailPage goToListPage={goToListPage} url={detailsUrl} />
    }
  }

  return (
    <div>
      <h1>
        Star Wars
      </h1>
      {selectPage()}
    </div>
  )
}
