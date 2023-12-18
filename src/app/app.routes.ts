import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { FilmComponent } from './film/film.component';
import { SeriesComponent } from './series/series.component';
import { SeriesListComponent } from './series-list/series-list.component';
import { HomeComponent } from './home/home.component';
import { FilmListComponent } from './film-list/film-list.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'movies',
        component: FilmListComponent
    },
    {
        path: 'movies/:id',
        component: FilmComponent
    },
    {
        path: 'series',
        component: SeriesListComponent
    },
    {
        path: 'series/:id',
        component: SeriesComponent
    },
    {
        path: '',
        component: HomeComponent
    }
];
