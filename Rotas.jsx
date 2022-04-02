import React from 'react'
import Cabecalho from './components/Cabecalho.jsx'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import FilmesPopulares from './pages/filmes/filmesPopulares'
import FilmesLancamentos from './pages/filmes/filmesLancamentos'
import filmesDetalhes from './pages/filmes/filmesDetalhes.jsx'
import AtoresDetalhes from './pages/atores/atoresDetalhes.jsx'
import SeriesPopulares from './pages/series/seriesPopulares.jsx'
import SeriesDetalhes from './pages/series/seriesDetalhes.jsx'
import SeriesNoAr from './pages/series/seriesNoAr.jsx'
import SeriesAvaliados from './pages/series/seriesAvaliados.jsx'
import Home from './pages/filmes/home.jsx'
import AtoresPopulares from './pages/atores/atoresPopulares.jsx'
import FilmesHome from './pages/filmes/filmesHome.jsx'
import SeriesHome from './pages/series/seriesHome.jsx'

export default () => {
  return (
    <>
      <BrowserRouter>
        <Cabecalho />
        <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/filmes/populares" component={FilmesPopulares} />
        <Route exact path="/filmes/lancamentos" component={FilmesLancamentos} />
        <Route exact path="/filmes/:id" component={filmesDetalhes} />
        <Route exact path="/atores/:id" component={AtoresDetalhes} />
        <Route exact path="/atores/populares" component={AtoresPopulares} />
        <Route exact path="/series/populares" component={SeriesPopulares} />
        <Route exact path="/series/no-ar" component={SeriesNoAr} />
        <Route exact path="/series/avaliados" component={SeriesAvaliados} />
        <Route exact path="/series/:id" component={SeriesDetalhes} />
        <Route exact path="/filmes" component={FilmesHome} />
        <Route exact path="/series" component={SeriesHome} />
        </Switch>
      </BrowserRouter>
    </>
  )
}