/**
 * Created by it on 4/6/16.
 */


import 'reflect-metadata';
import 'zone.js/dist/zone';
import { Component, provide } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import {APP_BASE_HREF} from '@angular/common';
import { AddSongForm } from './imports/songs-form/add-song-form';
import { SongsList } from './imports/songs-list/songs-list';
import { EditSongForm } from  './imports/songs-form/edit-song-form';

@Component({
    selector: 'app',
    template:
        `
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand" [routerLink]="['/List']">Angular2 CRUD Demo</a>
            </div>
            <ul class="nav navbar-nav">
              <li><a [routerLink]="['/List']">List</a></li>
              <li><a [routerLink]="['/Add']">Add</a></li>
            </ul>
          </div>
        </nav>
        <router-outlet></router-outlet>
        `,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        AddSongForm,
        SongsList
    ]
})

@RouteConfig([
    {
        path : '/',
        name : 'List',
        component : SongsList,
        useAsDefault : true
    },
    {
        path : '/add-song',
        name : 'Add',
        component : AddSongForm
    },
    {
        path : '/edit-song/:id',
        name : 'Edit',
        component : EditSongForm
    }
])


class App {}

bootstrap(App, [ROUTER_PROVIDERS, provide(APP_BASE_HREF, {useValue : '/' })]);