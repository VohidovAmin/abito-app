import { Outlet } from "react-router-dom"
import { Header } from "../components/Header/header"
import { useEffect, useState } from "react"
import { cardArray } from "../constans"

export const Layout = () => {
    const [searchText, setSearchText] = useState('')
    const [products, setProducts] = useState([])

    const handleSearch = (event) => {
        setSearchText(event.target.value)
    }

    const handleSearchArray = () => {
        setProducts(cardArray.filter((p) => p.title.includes(searchText) || p.price.includes(searchText)))
    }

    useEffect(() => {
        setProducts(cardArray)
    }, [])

    return (
        <>
            <Header />

            <main>
                <section className="search">
                    <div className="container">
                        <div className="seacrh-box">
                            <input
                                type="text"
                                value={searchText}
                                onChange={handleSearch}
                            />
                            <button className="btn btn-primary seacrh-btn" onClick={handleSearchArray}>
                                <img className="seacrh-btn_icon" src="/images/search.svg" alt="search" />
                                <span className="seacrh-btn_text">Найти</span>
                            </button>   
                        </div>
                    </div>
                </section>
                <Outlet context={{products}}/>
            </main>
        </>
    )
}