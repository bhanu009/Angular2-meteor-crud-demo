/**
 * Created by it on 8/6/16.
 */

import 'reflect-metadata';
import 'zone.js/dist/zone';
import { Component }   from '@angular/core';
import { Songs }     from '../../../collections/songs';
import { Mongo }       from 'meteor/mongo';
import {PaginatePipe, PaginationControlsCmp, PaginationService} from 'ng2-pagination';

@Component({
    selector: 'parties-list',
    templateUrl: '/client/imports/songs-list/songs-list.html',
    directives: [PaginationControlsCmp],
    pipes: [PaginatePipe],
    providers: [PaginationService]
})
export class SongsList {
    songs: Mongo.Cursor<Object>;

    constructor() {
        this.songs = Songs.find().fetch();
    }

    deleteSong(song) {
        Songs.remove(song._id);
        this.songs = Songs.find().fetch();  
    }
}