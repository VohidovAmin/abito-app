import { Header } from "../components/Header/header"
import { Card } from "../components/Card/Card"
import { cardArray } from "../constans"

export const Home = () => {
    return (
        <>
            <Header />

            <main>
                <section className="search">
                    <div className="container">
                        <div className="seacrh-box">
                            <input type="text"  />
                                <button className="btn btn-primary seacrh-btn">
                                    <img className="seacrh-btn_icon" src="/images/search.svg" alt="search"  />
                                        <span className="seacrh-btn_text">Найти</span>
                                </button>
                        </div>
                    </div>
                </section>

                <section className="search">
                    <div className="container">
                        <div className="content-box">
                            <div className="content-main">
                                <h2 className="content-main_title">Рекомендации для вас</h2>

                                <div className="content-main_list">
                                    {
                                        cardArray.map((card) => (
                                            <Card 
                                            key={card.id}
                                            title={card.title}
                                            price={card.price}
                                            address={card.address}
                                            date={card.date}
                                            img={card.img}
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="content-side">
                                <h3 className="content-side_title">Сервисы и услуги</h3>

                                <div className="content-side_box">
                                    <div className="content-side_list">
                                        <div className="content-side_list-item">
                                            <img className="content-side_list--img" src="/images/side-info_1.svg" alt="side-info 1"  />
                                                <h5 className="content-side_list--title">Доставка</h5>
                                                <p className="content-side_list--text">
                                                    Проверка при получении и возможность бесплатно вернуть товар
                                                </p>
                                        </div>

                                        <div className="content-side_list-item">
                                            <img className="content-side_list--img" src="/images/side-info_2.svg" alt="side-info 2"  />
                                                <h5 className="content-side_list--title">Автотека</h5>
                                                <p className="content-side_list--text">
                                                    Отчет с историей авто: пробег, владельцы, сведения о залоге, ДТП и ремонтах
                                                </p>
                                        </div>

                                        <div className="content-side_list-item">
                                            <img className="content-side_list--img" src="/images/side-info_3.svg" alt="side-info 3"  />
                                                <h5 className="content-side_list--title">Онлайн-бронирование жилья</h5>
                                                <p className="content-side_list--text">
                                                    Посуточная аренда квартир и домов: большой выбор вариантов для поездок по России
                                                </p>
                                        </div>
                                    </div>

                                    <div className="content-side_footer">
                                        <p className="content-side_footer--item">
                                            © ООО «Абито», 2011–2021
                                        </p>
                                        <a href="#!" className="content-side_footer--item">
                                            Политика конфиденциальности
                                        </a>
                                        <a href="#!" className="content-side_footer--item">
                                            Обработка данных
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}